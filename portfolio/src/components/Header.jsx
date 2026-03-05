import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const linkStyle =
    "cursor-pointer text-lg text-gray-700 hover:text-black transform transition duration-300 hover:scale-110 hover:drop-shadow-lg inline-block";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h1 className="text-6xl md:text-8xl font-bold">DHANARAJ RAJKUMAR</h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-600">
        Full-Stack Developer | Crafting Web Experiences
      </p>

      <div className="mt-8 space-x-6">
        <Link to="about" smooth duration={500} className={linkStyle}>
          About
        </Link>

        <Link to="experience" smooth duration={500} className={linkStyle}>
          Experience
        </Link>

        <Link to="projects" smooth duration={500} className={linkStyle}>
          Projects
        </Link>

        <Link to="skills" smooth duration={500} className={linkStyle}>
          Skills
        </Link>

        <Link to="contact" smooth duration={500} className={linkStyle}>
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;