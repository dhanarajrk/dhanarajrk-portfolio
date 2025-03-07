import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-8">Experience</h2>

      {/* Experience Item 1 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold">MERN Stack Web Development Training</h3>
        <p className="text-lg text-gray-600">TuteDude | Mar 2024 – Jul 2024</p>
        <ul className="text-lg text-gray-700 mt-4 list-disc list-inside">
          <li>Completed the MERN Stack Development Course, gaining proficiency in MongoDB, Express.js, React, and Node.js.</li>
          <li>Built and tested full-stack applications, including e-commerce and task manager apps.</li>
          <li>Optimized APIs and MongoDB management, resulting in a 20% increase in performance.</li>
        </ul>
      </div>

      {/* Experience Item 2 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold">Web Development Internship</h3>
        <p className="text-lg text-gray-600">CodSoft | Oct 2023 – Nov 2023</p>
        <ul className="text-lg text-gray-700 mt-4 list-disc list-inside">
          <li>Gained hands-on experience with HTML5, CSS3, JavaScript, and modern web development practices.</li>
          <li>Completed projects such as portfolio sites and landing pages.</li>
          <li>Enhanced deployment skills, improving efficiency by 50%.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;