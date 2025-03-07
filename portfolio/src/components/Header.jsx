import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h1 className="text-6xl md:text-8xl font-bold">DHANARAJ RAJKUMAR</h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-600">Full-Stack Developer | Crafting Web Experiences</p>

      <div className="mt-8 space-x-4">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg text-gray-700 hover:text-black"
        >
          About
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg text-gray-700 hover:text-black"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg text-gray-700 hover:text-black"
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg text-gray-700 hover:text-black"
        >
          Skills
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg text-gray-700 hover:text-black"
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;