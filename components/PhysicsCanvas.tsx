"use client";

import { useEffect, useRef, RefObject } from "react";

// ─── Config ────────────────────────────────────────────────────────────────────

const MAX_BODIES = 20;
const SPAWN_MS   = 850;

const PALETTE = [
  { fill: "rgba(0, 195, 255, 0.06)",   stroke: "rgba(0, 195, 255, 0.65)" },
  { fill: "rgba(147, 89, 255, 0.06)",  stroke: "rgba(147, 89, 255, 0.65)" },
  { fill: "rgba(255, 255, 255, 0.04)", stroke: "rgba(255, 255, 255, 0.22)" },
];

// ─── Component ─────────────────────────────────────────────────────────────────

interface Props {
  floorRef: RefObject<HTMLDivElement | null>;
}

export function PhysicsCanvas({ floorRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let stopped = false;
    let innerCleanup: (() => void) | undefined;

    import("matter-js").then((Matter) => {
      if (stopped) return;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      const floorRect   = floorRef.current?.getBoundingClientRect();
      const sectionRect = canvas.getBoundingClientRect();
      const floorY = floorRect
        ? floorRect.top - sectionRect.top
        : h * 0.84;

      // ── Engine & renderer ──────────────────────────────────────────────────

      const engine = Matter.Engine.create({ gravity: { y: 1.4 } });

      const render = Matter.Render.create({
        canvas,
        engine,
        options: {
          width:      w,
          height:     h,
          background: "transparent",
          wireframes: false,
          pixelRatio: window.devicePixelRatio ?? 1,
        },
      });

      // ── Static boundaries ──────────────────────────────────────────────────

      const staticOpts = {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent", lineWidth: 0 },
      };

      const ground = Matter.Bodies.rectangle(
        w / 2, floorY + 30, w + 200, 60, staticOpts,
      );
      Matter.Composite.add(engine.world, [ground]);

      // ── Mouse interaction ──────────────────────────────────────────────────

      const mouse = Matter.Mouse.create(canvas);

      // Correct mouse position for high-DPI canvases
      Matter.Mouse.setScale(mouse, {
        x: 1 / (window.devicePixelRatio ?? 1),
        y: 1 / (window.devicePixelRatio ?? 1),
      });

      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.18,
          damping:   0.1,
          render:    { visible: false },
        },
      });
      Matter.Composite.add(engine.world, mouseConstraint);

      // ── Hit-test pass-through ──────────────────────────────────────────────
      // If the user clicks empty space (no body under cursor), temporarily
      // remove pointer-events so the click reaches buttons/links underneath.

      const onMouseDown = (e: MouseEvent) => {
        const rect    = canvas.getBoundingClientRect();
        const dpr     = window.devicePixelRatio ?? 1;
        const point   = {
          x: (e.clientX - rect.left) / dpr,
          y: (e.clientY - rect.top)  / dpr,
        };
        const dynamic = Matter.Composite.allBodies(engine.world).filter(
          (b) => !b.isStatic,
        );
        const hit = Matter.Query.point(dynamic, point);

        if (hit.length === 0) {
          canvas.style.pointerEvents = "none";
          document.addEventListener(
            "mouseup",
            () => { canvas.style.pointerEvents = "auto"; },
            { once: true },
          );
        }
      };

      canvas.addEventListener("mousedown", onMouseDown, { capture: true });

      // ── Cursor feedback ────────────────────────────────────────────────────

      const onMouseMove = (e: MouseEvent) => {
        if (mouseConstraint.body) {
          canvas.style.cursor = "grabbing";
          return;
        }
        const rect    = canvas.getBoundingClientRect();
        const dpr     = window.devicePixelRatio ?? 1;
        const point   = {
          x: (e.clientX - rect.left) / dpr,
          y: (e.clientY - rect.top)  / dpr,
        };
        const dynamic = Matter.Composite.allBodies(engine.world).filter(
          (b) => !b.isStatic,
        );
        const hit = Matter.Query.point(dynamic, point);
        canvas.style.cursor = hit.length > 0 ? "grab" : "default";
      };

      canvas.addEventListener("mousemove", onMouseMove);

      // ── Shape spawner ──────────────────────────────────────────────────────

      const bodies: Matter.Body[] = [];

      const spawn = () => {
        if (stopped) return;

        const x     = 60 + Math.random() * (w - 120);
        const size  = 16 + Math.random() * 24;
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];

        const opts = {
          restitution: 0.5,
          friction:    0.3,
          frictionAir: 0.007,
          angle:       Math.random() * Math.PI * 2,
          render: {
            fillStyle:   color.fill,
            strokeStyle: color.stroke,
            lineWidth:   1.5,
          },
        };

        const r = Math.random();
        let body: Matter.Body;

        if (r < 0.4) {
          body = Matter.Bodies.rectangle(x, -size * 2, size, size, opts);
        } else if (r < 0.72) {
          body = Matter.Bodies.circle(x, -size * 2, size * 0.5, opts);
        } else {
          body = Matter.Bodies.polygon(x, -size * 2, 3, size * 0.7, opts);
        }

        if (bodies.length >= MAX_BODIES) {
          Matter.Composite.remove(engine.world, bodies.shift()!);
        }
        bodies.push(body);
        Matter.Composite.add(engine.world, body);
      };

      // ── Off-screen cleanup ─────────────────────────────────────────────────

      Matter.Events.on(engine, "afterUpdate", () => {
        const offscreen = bodies.filter((b) => b.position.y > h + 100);
        offscreen.forEach((b) => {
          Matter.Composite.remove(engine.world, b);
          bodies.splice(bodies.indexOf(b), 1);
        });
      });

      // ── Run ────────────────────────────────────────────────────────────────

      Matter.Render.run(render);
      const runner   = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
      const interval = setInterval(spawn, SPAWN_MS);

      innerCleanup = () => {
        clearInterval(interval);
        canvas.removeEventListener("mousedown", onMouseDown, { capture: true });
        canvas.removeEventListener("mousemove", onMouseMove);
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
        Matter.Engine.clear(engine);
      };
    });

    return () => {
      stopped = true;
      innerCleanup?.();
    };
  }, [floorRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 20, pointerEvents: "auto" }}
    />
  );
}
