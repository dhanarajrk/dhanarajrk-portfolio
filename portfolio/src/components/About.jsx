import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Hi, I'm <span className="font-semibold">Dhanaraj Rajkumar</span>, a passionate and detail-oriented developer with a growing interest in full-stack development using the <span className="font-semibold">MERN stack</span>. I enjoy building scalable, user-friendly web applications and solving real-world problems through code.

      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        I have hands-on experience in <span className="font-semibold">frontend and backend development</span>, and I'm always eager to learn new technologies and improve my skills. My goal is to create impactful software that makes a difference.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        When I'm not coding, you can find me exploring new tools, contributing to open-source projects, or working on personal projects that challenge me to grow as a developer.
      </p>
    </motion.div>
  );
};

export default About;