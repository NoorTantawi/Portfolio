
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Nooraldeen Tantawi
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Computer Engineering Student
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about robotics, full-stack web development and building scalable, maintainable applications.  
            Skilled in C++, C#, ASP.NET Core, and modern software engineering practices like Git, and clean architecture.  
            Turning ideas into robust digital experiences.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 dark:border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-400 font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <Github size={20} />
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
