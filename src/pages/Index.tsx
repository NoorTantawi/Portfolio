
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
