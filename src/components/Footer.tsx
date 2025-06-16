import { motion } from 'framer-motion';
import { Github, Mail, User, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Nooraldeen Tantawi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Computer Engineering student passionate about robotics, web development, 
              and emerging technologies. Building innovative solutions for tomorrow's challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:nooraldeen@email.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <User size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Nooraldeen Tantawi. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-colors duration-200"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;