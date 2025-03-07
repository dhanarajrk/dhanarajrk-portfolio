import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiFigma, SiAdobephotoshop, SiJavascript, SiDocker, SiAmazonec2 } from "react-icons/si";

export const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> }, // Added JavaScript
  { name: "Java", icon: <FaJava /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Docker", icon: <SiDocker /> }, // Added Docker
  { name: "AWS EC2", icon: <SiAmazonec2 /> }, // Corrected AWS EC2 icon
];