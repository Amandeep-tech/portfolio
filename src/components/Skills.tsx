const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/assets/icons/html5Icon.svg', category: 'Frontend' },
    { name: 'CSS', icon: '/assets/icons/css3Icon.svg', category: 'Frontend' },
    { name: 'JavaScript', icon: '/assets/icons/jsIcon.svg', category: 'Frontend' },
    { name: 'TypeScript', icon: '/assets/icons/tsIcon.svg', category: 'Frontend' },
    { name: 'React.js', icon: '/assets/icons/reactIcon.svg', category: 'Frontend' },
    { name: 'Redux', icon: '/assets/icons/reduxIcon.svg', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '/assets/icons/tailwindcssIcon.svg', category: 'Frontend' },
    { name: 'Node.js', icon: '/assets/icons/nodejsIcon.svg', category: 'Backend' },
    { name: 'Express.js', icon: '/assets/icons/expressjsIcon.svg', category: 'Backend' },
    { name: 'Git', icon: '/assets/icons/gitIcon.svg', category: 'Tools' },
    // { name: 'GitHub', icon: '/assets/icons/githubIcon.svg', category: 'Tools' },
    { name: 'Postman', icon: '/assets/icons/postmanIcon.svg', category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center border border-gray-100 dark:border-gray-700"
                    >
                      <div className="text-3xl flex justify-center items-center mb-3 group-hover:scale-110 transition-transform duration-200">
                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {skill.name}
                      </h4>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
