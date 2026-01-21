
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SDE III",
      company: "getreplies.ai",
      period: "2025 July - Present",
      location: "Bangalore, India",
      description: "Building A.I SaaS to reach out to the customers and get the replies.",
      responsibilities: [
        "Full ownership of the product.",
        "Deploying project to AWS.",
        "Building the frontend of the product.",
        "Building the UI/UX of the product.",
        "Building the CI/CD pipeline of the product.",
      ]
    },
    {
      title: "SDE III",
      company: "Zolostays",
      period: "2024 - Present",
      location: "Bangalore, India",
      description: "Leading full-stack development initiatives and mentoring junior developers.",
      responsibilities: [
        "Led a team of 3 developers in building scalable web applications",
        "Architected zolostays.com website serving 10K+ daily users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical interviews",
        "Collaborated with product teams to define technical requirements."
      ]
    },
    {
      title: "SDE II",
      company: "Zolostays",
      period: "2023 - 2024",
      location: "Bangalore, India", 
      description: "Developed scalable web applications and improved system performance.",
      responsibilities: [
        "Built responsive web applications using React.js and TypeScript",
        "Worked on Node.js and Express.js BFF (Backend for Frontend) layer hide actual API calls",
        "Reduced redundant API calls and improved performance",
        "Integrated third-party APIs",
        "Participated in code reviews and maintained coding standards"
      ]
    },
    {
      title: "SDE I",
      company: "Zolostays",
      period: "2022 - 2023",
      location: "Bangalore, India",
      description: "Built responsive web interfaces and collaborated on backend services.",
      responsibilities: [
        "Developed user-friendly interfaces with modern web technologies",
        "Collaborated with backend teams to design RESTful APIs",
        "Implemented responsive designs for mobile and desktop",
        "Fixed critical bugs and improved application performance",
        "Participated in agile development processes"
      ]
    },
    {
      title: "SDE Intern",
      company: "Zolostays",
      period: "2022",
      location: "Bangalore, India",
      description: "Started my journey in software development with hands-on projects.",
      responsibilities: [
        "Learned frontend development fundamentals",
        "Built small features under senior developer guidance",
        "Participated in daily standups and sprint planning",
        "Documented code and created technical specifications",
        "Contributed to internal tools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and growth
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {/* {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-blue-200 dark:bg-blue-800 z-0"></div>
                )} */}
                
                <div className="relative flex items-start">
                  {/* Timeline dot */}
                  {/* <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div> */}
                  
                  {/* Content */}
                  <div className="ml-6 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
