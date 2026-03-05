import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center justify-center"
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
              className="group flex flex-col items-center justify-center p-4 transition-all duration-200 transform hover:-translate-y-2 hover:scale-110" // Added hover zoom effect
            >
              <div className="text-5xl mb-2 text-gray-700 drop-shadow-lg transition-all duration-200 group-hover:drop-shadow-2xl">{skill.icon}</div>
              <p className="text-lg text-gray-700 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;