import { motion } from 'framer-motion';
import { Award, User, Code, Download } from 'lucide-react';

const AboutSection = () => {
  const certifications = [
  {
      title: "ASP.NET Development",
      description: "Basic and Advanced ASP.NET Development",
      link: "https://www.credential.net/cb66d115-9908-427f-a698-29b5df32c6a5#acc.5tCpLGT7",
      type: "Web Development"
  },
  {
    title: "Intoduction to Arduino",
    description: "Microcontroller programming and hardware integration using C/C++, sensors, and serial communication.",
    type: "Hardware"
  },
  {
    title: "Sumo Robot – 2nd Place in National Competition",
    description: "Won 2nd place in programming at Jordan's Second National Sumo Robot Championship.",
    type: "Robotics"
  },
  {
    title: "JRC Line Follower Robot",
    description: "Participated in the JRC 2023–2024 contest; built a PID-controlled line following robot; reached top 8 finalists.",
    type: "Robotics"
  }
];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Final year Computer Engineering student with a passion for innovation and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Box: Who Am I + My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full flex flex-col justify-between transition-colors space-y-8">
              {/* Who Am I */}
              <div>
                <div className="flex items-center mb-4">
                  <User className="text-purple-400 mr-4" size={28} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Who Am I?</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                   <strong>Junior .NET Developer</strong><br />
                   <strong>Computer Engineering Student at JUST</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm Nooraldeen Tayseer Tantawi, a highly motivated student with a strong foundation in full-stack web development, robotics, and embedded systems. I’m driven by curiosity and a desire to bridge the gap between software and hardware solutions.
                </p>
              </div>

              {/* My Journey */}
              <div>
                <div className="flex items-center mb-4 mt-6">
                  <User className="text-blue-400 mr-4" size={28} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I've dedicated myself to mastering both hardware and software technologies. My journey includes hands-on experience in robotics competitions and full-stack web development using modern frameworks.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I love building innovative solutions that bring real-world value, with a strong focus on clean code, modern architecture, and continuous learning.
                </p>
              </div>

              {/* Resume Button */}
              <a
                href="/Nooraldeen Tayseer Tantawi.pdf"
                download
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg w-fit"
              >
                <Download size={18} />
                Download My Resume
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>

            </div>
          </motion.div>

          {/* Right Box: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-full transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-6">
                  <Award className="text-purple-400 mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications & Achievements</h3>
                </div>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:border-blue-400 transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400">{cert.title}</h4>
                        <span className="text-xs bg-purple-600 px-2 py-1 rounded-full text-white">
                          {cert.type}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.description}</p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm inline-flex items-center gap-1"
                        >
                          <Code size={16} />
                          View Credential
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
