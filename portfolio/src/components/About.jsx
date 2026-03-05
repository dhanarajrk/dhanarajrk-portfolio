import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-5xl w-full mx-auto text-center px-4">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <div className="bg-light p-10 rounded-2xl border border-gray-300 shadow-md hover:shadow-lg transition">

          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm <span className="font-semibold">Dhanaraj Rajkumar</span>, a passionate and detail-oriented developer with a growing interest in full-stack development using the <span className="font-semibold">MERN stack</span>. I enjoy building scalable, user-friendly web applications and solving real-world problems through code.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I have hands-on experience in <span className="font-semibold">frontend and backend development</span>, and I'm always eager to learn new technologies and improve my skills. My goal is to create impactful software that makes a difference.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            When I'm not coding, you can find me exploring new tools, contributing to open-source projects, or working on personal projects that challenge me to grow as a developer.
          </p>

        </div>

      </div>
    </motion.div>
  );
};

export default About;