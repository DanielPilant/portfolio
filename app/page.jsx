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
              to the community, I specialize in tutoring, mentoring
              and teaching with two years of experience in tutoring in schools,
              and experience in management and leadership through the DEVLEV
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
                  href="/assets/resume/Daniel_Pilant_resume.pdf"
                  download="Daniel_Pilant_resume.pdf"
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
      </div>
    </section>
  );
};
export default Home;
