
import { motion } from 'framer-motion';
import { Award, User, Code } from 'lucide-react';

const AboutSection = () => {
  const certifications = [
    {
      title: "ASP.NET Development",
      description: "Basic and Advanced ASP.NET Development",
      link: "https://www.credential.net/cb66d115-9908-427f-a698-29b5df32c6a5#acc.5tCpLGT7",
      type: "Web Development"
    },
    {
      title: "Robotics Competition",
      description: "Sumo Robot Participation & Line Follower Robot JRC2023",
      type: "Robotics"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Final year Computer Engineering student with a passion for innovation and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <User className="text-blue-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                  As a final-year Computer Engineering student, I've dedicated myself to mastering both hardware and software technologies. My journey includes hands-on experience in robotics competitions and full-stack web development using modern frameworks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about building innovative solutions that bridge the gap between engineering principles and real-world applications, with a focus on practical problem-solving and continuous learning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Award className="text-purple-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border border-gray-700 rounded-lg p-4 hover:border-blue-400 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-blue-400">{cert.title}</h4>
                      <span className="text-xs bg-purple-600 px-2 py-1 rounded-full">
                        {cert.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{cert.description}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1"
                      >
                        <Code size={16} />
                        View Credential
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
