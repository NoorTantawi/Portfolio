
import { motion } from 'framer-motion';
import { Github, Link, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sumo Robot Contest 2023",
      description: "Advanced autonomous sumo robot with AI-based decision making and sensor fusion for competitive robotics.",
      image: "/sumo.jpg",  //
      tech: ["Rasperry pi", "Arduino", "Sensors", "AI", "Unity ML-agents", "Real-time analysis"],
      github: "#",
      demo: "#",
      category: "Robotics"
    },
    {
      title: "Line Follower Contest JRC2023",
      description: "High-speed line following robot with advanced path optimization and obstacle detection capabilities.",
      image: "/JRC.jpg",  //
      tech: ["C++", "PID", "Real-time Systems"],
      github: "#",
      demo: "#",
      category: "Robotics"
    },
    {
      title: "ASP.NET Web Application",
      description: "Full-stack web application built with ASP.NET Core, featuring modern UI and robust backend architecture.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      tech: ["ASP.NET Core", "C#", "SQL Server", "MVC"],
      github: "#",
      demo: "#",
      category: "Web Development"
    },
    {
    title: "Library Management System (CLI)",
    description: "A command-line interface application built with C# to efficiently manage library operations, including book tracking, user management, and lending history. Developed two years ago to enhance core programming and system design skills.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=300&fit=crop",
    tech: ["C#", "CLI", "Object-Oriented Programming"],
    github: "#",
    demo: "#",
    category: "Software Development"
    },
    { 
    title: "Pharmacy Management System",
    description: "A full-stack web application built with ASP.NET MVC and Web API using scaffolding for rapid development. Features include product catalog, inventory management, and online ordering tailored to pharmacy needs.",
    image: "/pharmacy.jpg", //
    tech: ["ASP.NET MVC", "Web API", "C#", "Scaffolding", "SQL Server"],
    github: "#",
    demo: "#",
    category: "Web Development"
    },
    {
    title: "Bank Management System",
    description: "Robust bank management system designed with ASP.NET Core following Onion Architecture principles for maintainability and scalability. Implements user authentication, account management, and transaction processing.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    tech: ["ASP.NET Core", "Onion Architecture", "C#", "Entity Framework Core"],
    github: "#",
    demo: "#",
    category: "Enterprise Application"
  }
    
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise in building scalable and maintainable full-stack web applications using ASP.NET Core, MVC, Web API, and clean architecture principles, alongside earlier projects demonstrating solid C# programming fundamentals. Additionally, I have hands-on experience in robotics through participation in two competitive contests, applying AI and real-time systems for autonomous robots.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <Link size={18} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
