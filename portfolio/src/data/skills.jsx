import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJava, 
  FaGitAlt, 
  FaAws
} from "react-icons/fa";

import { 
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiAdobephotoshop,
  SiJavascript,
  SiDocker,
  SiAmazonec2,
  SiTypescript,
  SiRedis,
  SiMysql,
  SiPrisma,
  SiAwslambda,
  SiAmazons3,
} from "react-icons/si";

import { TbGitBranch } from "react-icons/tb";

export const skills = [

  // Frontend
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Java", icon: <FaJava /> },

  // Database / ORM
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Prisma", icon: <SiPrisma /> },

  // DevOps / Cloud
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS EC2", icon: <SiAmazonec2 /> },
  { name: "AWS Lambda", icon: <SiAwslambda /> },
  { name: "AWS S3", icon: <SiAmazons3 /> },
  { name: "CloudFront", icon: <FaAws /> },
  { name: "CI/CD", icon: <TbGitBranch /> },

  // Tools / Design
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> }

];