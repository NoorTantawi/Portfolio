import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Github, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    emailjs.send(
      'service_zscgq6s',    
      'template_ecud4xt',   
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      'hv7HNZWWHbcO0rF5Y'     
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast({
        title: "Something went wrong",
        description: "Failed to send message. Please try again later.",
      });
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/NoorTantawi",
      color: "hover:text-gray-600 dark:hover:text-gray-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ntaltantawi21@cit.just.edu.jo",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: User,
      url: "https://www.linkedin.com/in/nooraldeen-tantawi-3bb899237/",
      color: "hover:text-purple-600 dark:hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in technology and engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send me a message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-blue-400 focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-blue-400 focus:outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    id="subject"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-blue-400 focus:outline-none transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    rows={5}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect with me</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                or collaborations in computer engineering, robotics, and web development. 
                Feel free to reach out through any of these platforms.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 text-gray-600 dark:text-gray-300 ${link.color} transition-all duration-200 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700`}
                  >
                    <link.icon size={24} />
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30"
            >
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Response</h4>
              <p className="text-gray-700 dark:text-gray-300">
                I typically respond to messages within 24 hours. For urgent matters, 
                please use email for faster communication.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;