import { motion } from 'framer-motion';
import { Book, ArrowUp } from 'lucide-react';

const BlogSection = () => {
  const learnings = [
    {
      title: "Advanced ASP.NET Core Development",
      description: "Mastering modern web development with ASP.NET Core, from basic MVC patterns to advanced microservices architecture.",
      category: "Web Development",
      date: "2024",
      tags: ["ASP.NET", "C#", "Web API", "Microservices"],
      readTime: "12 min read"
    },
    {
      title: "Robotics Competition Engineering",
      description: "Lessons learned from building competitive robots, including mechanical design, sensor integration, and real-time control systems.",
      category: "Robotics",
      date: "2023",
      tags: ["Robotics", "Control Systems", "Sensors", "Competition"],
      readTime: "6 min read"
    },
    {
      title: "Software Architecture Patterns",
      description: "Exploring design patterns, clean architecture principles, and best practices for building maintainable software systems.",
      category: "Software Engineering",
      date: "2024",
      tags: ["Architecture", "Design Patterns", "Clean Code", "Software Engineering"],
      readTime: "11 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Documenting my continuous learning path through various technologies and engineering disciplines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learnings.map((learning, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Book size={18} className="text-blue-400" />
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{learning.category}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500 text-sm">{learning.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {learning.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{learning.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {learning.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-200 dark:bg-gray-700 text-purple-600 dark:text-purple-400 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-500 text-sm">{learning.readTime}</span>
                  <motion.div
                    className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowUp size={16} className="transform rotate-45" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-200"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;