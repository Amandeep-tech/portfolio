import React from "react";
import { FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { TechnologyList } from './TechnologyList';
import SocialHandleList from "./SocialHandleList";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const technologies = [
    "React",
    "JavaScript",
    "Next.js",
    "TypeScript",
    "Webpack",
    "Redux",
    "TanStack Query",
    "React Router",
    "Tailwind CSS",
    "Ant Design",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "RestFul APIs",
    "Git",
    "CI/CD",
    "Docker",
    "AWS",
    "MySQL"
  ];

  return (
    <section
      id="home"
      className="mt-[8rem] flex items-center justify-center  dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="px-[2rem] sm:px-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
               text-gray-900 dark:text-white mb-6 
              leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amandeep Singh
              </span>
              <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] ml-2 animate-wave">👋</span>
            </h1>

            <div className="px-[2rem] sm:px-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600 dark:text-gray-300 mb-8 
              leading-relaxed">
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Software Engineer
              </div>{" "}
              <div className="text-gray-600 dark:text-gray-300 text-3xl mb-2">
                {"(4+ YoE)"}
              </div>
            </div>
            <p className="mb-8">
              I work with{" "}
              <TechnologyList technologies={technologies} />
            </p>

            <div className="flex justify-center items-center mb-8">
              <SocialHandleList />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <FileText size={20} />
                <Link
                  to="https://drive.google.com/file/d/1Qhep_TyPFFHmapUUE-cRo_Z9W6ndpsyX/view?usp=sharing"
                  target="_blank"
                >
                  View Resume
                </Link>
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  →
                </div>
              </button>

              <button
                onClick={scrollToContact}
                className="group border-2 border-blue-600 dark:border-blue-400
                 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold 
                 text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 
                 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300 
                 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  →
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
