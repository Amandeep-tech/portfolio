import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';


const About = () => {
  const timeline = [
    {
      role: "SDE III",
      company: "zolostays.com",
      companyLink: "https://www.zolostays.com/",
      period: "2024 - Present",
      description: "Leading full-stack development initiatives and mentoring junior developers."
    },
    {
      role: "SDE II",
      company: "zolostays.com",
      companyLink: "https://www.zolostays.com/",
      period: "2023 - 2024",
      description: "Developed scalable web applications and improved system performance."
    },
    {
      role: "SDE I",
      company: "zolostays.com",
      companyLink: "https://www.zolostays.com/",
      period: "2022 - 2023",
      description: "Built responsive web interfaces and collaborated on backend services."
    },
    {
      role: "SDE Intern",
      company: "zolostays.com",
      companyLink: "https://www.zolostays.com/",
      period: "2022",
      description: "Started my journey in software development with hands-on projects."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <img 
                      // Google Drive sharing links don't work as direct image sources
                      // Solutions:
                      // 1. Upload to a CDN like Cloudinary, AWS S3, or Vercel
                      // 2. Use a public image hosting service like Imgur
                      // 3. Store the image in your project's public folder
                      // 4. Use a placeholder service temporarily
                      src="/assets/images/myPhoto.jpeg" 
                      alt="Amandeep Singh" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Amandeep Singh
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  Frontend Engineer
                </p>
                <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin size={16} className="mr-2" />
                  Bangalore, India
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Passionate <span className="text-blue-600 dark:text-blue-400">Frontend Engineer</span> with expertise in modern web technologies. 
                  I love creating efficient, scalable solutions and have a keen eye for user experience. 
                  My journey from intern to SDE III at Zolostays has given me valuable insights into 
                  building robust applications that serve real users.
                </p>
              </div>
            </div>

            {/* Timeline Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
                My Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-6 relative z-10 group-hover:scale-125 transition-transform duration-200">
                      {index !== timeline.length - 1 && (
                        <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2"></div>
                      )}
                    </div>
                    <div className="ml-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 group-hover:shadow-lg transition-shadow duration-200 w-full">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.role}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 underline underline-offset-[0.4rem]">
                        <Link to={item.companyLink} target="_blank">{item.company}</Link>
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
