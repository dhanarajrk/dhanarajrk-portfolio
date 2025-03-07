import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.5 }}
      className="h-screen flex items-center justify-center" // No background
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.1 }} // Staggered delay
              viewport={{ once: false, amount: 0.5 }}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 transform hover:scale-103" // Added hover zoom effect
            >
              <div className="text-4xl mb-2 text-gray-700">{skill.icon}</div>
              <p className="text-lg text-gray-700 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;