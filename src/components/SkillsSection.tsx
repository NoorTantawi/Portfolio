import { motion } from 'framer-motion';
import { Code, LaptopIcon } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 90 },
        { name: "C#", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "OOP", level: 85 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "Problem Solving", level: 88 }
      ]
    },
    {
      title: "Web Technologies",
      icon: LaptopIcon,
      skills: [
        { name: "ASP.NET Core", level: 88 },
        { name: "Entity Framework Core", level: 82 },
        { name: "Onion Architecture", level: 86 },
        { name: "SQL Server", level: 85 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      title: "General Knowledge & Best Practices",
      icon: Code,
      skills: [
        { name: "Version Control (Git & GitHub)", level: 90 },
        { name: "Clean Code & Best Coding Practices", level: 85 },
        { name: "Dependency Injection (ASP.NET Core)", level: 80 },
        { name: "REST API Design", level: 85 },
        { name: "Agile Development & Scrum", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack development, hardware systems, and scalable architectures
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-200 dark:hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;