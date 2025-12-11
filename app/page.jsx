import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Link } from "lucide-react";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span>Software Developer</span>
            <h1 className="mb-6 mt-4">
              Hello, I&apos;m <br />{" "}
              <span className="text-accent">Daniel Pilant</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              I am a third-year software engineering student at the Lev Academic
              Center. In addition to my academic studies, I develop my talents
              in doing practical programming projects, taking practical and
              up-to-date courses in development and programming, such as the
              Flutter application development course at Udemy and the Fullstack
              course at the Lev Academic Center. In addition, as a contribution
              to the community, I specialize in tutoring, mentoring and teaching
              with two years of experience in tutoring in schools, and
              experience in management and leadership through the DEVLEV
              community, which I co-founded, and which I currently manage.
            </p>
            {/* button and social links */}
            <div className="flex flex-col xl:flex-row items-center mb-8 gap-6">
              <Button
                asChild
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/assets/resume/Resume.pdf"
                  download="Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download resume</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border
              border-accent rounded-full flex justify-center items-center
              text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>

            {/* snake github animation */}
            {/* <div className="">
              github snake game
            </div> */}
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>
        </div>
        {/* <div className="border-b border-white/10 mb-8 flex flex-col items-center">
          <h2 className="mb-6 mt-4">more about me...</h2>

          <div
            className="max-w-3xl mx-auto py-8 margin-top-8 border-2 border-accent
          rounded-lg p-4"
          >
            <h3>Programming</h3>
            <br />
            <p>
              I've always been fascinated by how logic can create entire worlds.
              Programming, to me, is both art and architecture — the ability to
              build systems that think, move, and evolve. I enjoy the process of
              solving complex problems and turning abstract ideas into something
              real and functional, where every line of code feels like a step
              toward mastery.
            </p>
          </div>
          <br />
          <div
            className="max-w-3xl mx-auto py-8 margin-top-8 border-2 border-accent
          rounded-lg p-4"
          >
            <h3>Music</h3>
            <br />
            <p>
              Music is my purest language. I compose in Cubase, play keyboard,
              and shape soundscapes that mix logic, emotion, and a touch of
              chaos.
              <br />
              <span className="bg-accent text-black px-2 py-1 rounded-md mt-2 inline-block">
                <a
                  href="https://www.youtube.com/@DoubleDan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to my music YouTube Channel
                </a>
              </span>
            </p>
          </div>
          <br />
          <div
            className="max-w-3xl mx-auto py-8 margin-top-8 border-2 border-accent
          rounded-lg p-4"
          >
            <h3>Science & Mathematics</h3>
            <br />
            <p>
              I’m captivated by the hidden order of the universe — the language
              of mathematics, the elegance of physics, and the vast mysteries of
              astronomy. I love uncovering the principles that govern everything
              from subatomic particles to galaxies. For me, science isn’t just
              knowledge; it’s a way of seeing truth — precise, infinite, and
              beautiful.
            </p>
          </div>
          <br />
          <div
            className="max-w-3xl mx-auto py-8 margin-top-8 border-2 border-accent
          rounded-lg p-4"
          >
            <h3>Mythology & Storytelling</h3>
            <br />
            <p>
              I’m fascinated by worlds where myth, philosophy, and imagination
              intertwine. Stories like 'The Elder Scrolls', 'The Stormlight
              Archive', and the 'Avengers' universe inspire me — not just for
              their epic scale, but for the ideas they explore about destiny,
              power, and the human spirit. Writing, for me, is a way to build
              universes that question reality itself and mirror the struggle
              between light and darkness within us.
            </p>
          </div> 
        </div>*/}
      </div>
    </section>
  );
};
export default Home;
