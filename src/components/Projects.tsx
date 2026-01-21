import React from "react";
import { ExternalLink, Github } from "lucide-react";

const project = [
  {
    title: "Personal Milk Tracker",
    description: `Built a personal automation-focused app using Next.js and Node.js with GitHub Actions–based
cron jobs and Supabase Postgres. Secured backend APIs using PIN-based middleware, CORS restrictions, and rate
limiting`,
    image: "/assets/images/milkTracker2.png",
    techStack: ["React.js", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Amandeep-tech/milk-tracker-frontend",
    liveLink: "https://milk-tracker-frontend.vercel.app/",
    features: [
      "Track and manage daily milk purchase",
      "Activate/Deactivate automatic daily milk entry",
      "Set up Vacation Mode",
      "Month-wise summary",
    ],
  },
  {
    title: "modify-str (npm package)",
    description: `Designed a simple and predictable API for common string transformations while
keeping the logic pure and immutable. Added unit tests with Vitest and set up GitHub Actions to automatically
run tests on every push. The package has received 50+ downloads so far.`,
    image: "/assets/images/modify-str.png",
    techStack: ["React.js", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Amandeep-tech/milk-tracker-frontend",
    liveLink: "https://milk-tracker-frontend.vercel.app/",
    features: [
      "Track and manage daily milk purchase",
      "Activate/Deactivate automatic daily milk entry",
      "Set up Vacation Mode",
      "Month-wise summary",
    ],
  },
  {
    title: "KBC Quiz Web App",
    description:
      "An interactive quiz application inspired by the popular TV show 'Kaun Banega Crorepati'. Features multiple choice questions, lifelines, progressive difficulty levels, and real-time score tracking. Built with modern web technologies for an engaging user experience.",
    image: "/assets/images/kbcHomeScreenPhoto.png",
    techStack: ["React.js", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Amandeep-tech/kbc-react",
    liveLink: "https://amandeep-kbc.netlify.app/",
    features: [
      "Interactive quiz interface with smooth animations",
      "Multiple difficulty levels and categories",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Project
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>

          {project.map((project) => (
            <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden lg:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                      <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                        →
                      </div>
                    </a>
                    <a
                      href={project.githubLink}
                      target="blank"
                      className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold text-center hover:border-gray-900 dark:hover:border-gray-100 hover:text-gray-900 dark:hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      Source Code
                      <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                        →
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
