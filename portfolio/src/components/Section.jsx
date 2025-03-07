import { motion } from 'framer-motion';

const Section = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50, scale: 0.95 }} // Start slightly below and scaled down
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Slide up, fade in, and scale to normal
      transition={{ duration: 1.2, ease: 'easeInOut' }} // Slower animation
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the section is visible
      className="h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
};

export default Section;