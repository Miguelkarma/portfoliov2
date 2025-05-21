import { Home, User, Info, Briefcase, FolderGit, Mail } from "lucide-react";

import cert1 from "@/assets/certs/cert1.jpg";
import cert2 from "@/assets/certs/cert2.jpg";
import cert3 from "@/assets/certs/cert3.jpg";
import cert4 from "@/assets/certs/cert4.jpg";
import udemy from "@/assets/udemy-logo.jpg";

export type ProjectCardProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  tags?: string[];
  github?: string;
  live?: string;
  overlayTitle?: string;
  overlayDescription?: string;
};

export const projects = [
  {
    title: "Flux",
    description:
      "A full-stack asset tracking system with QR-based asset monitoring. Implemented CRUD operations for assets and employees using Firebase Firestore, ensuring real-time data handling.",
    image: "flux",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Firebase",
      "Tailwind",
      "Shadcn/ui",
      "Git",
      "Jest",
      "REST API",
      "Styled Components",
      "Framer-Motion",
    ],
    github: "https://github.com/Miguelkarma/Flux",
    live: "https://flux-omega-ten.vercel.app/",
    overlayTitle: "Flux",
    overlayDescription: "IT Equipment Asset Management",
  },
  {
    title: "VetCare",
    description:
      "A web-based application designed for managing veterinary clinic operations. It provides features for appointment scheduling, vaccine scheduling, and managing pet records and services.",
    image: "VetCare",
    tags: [
      "Javascript",
      "PHP",
      "Bootstrap",
      "HTML",
      "CSS",
      "mySQL",
      "Git",
      "Calendar.js",
      "Xampp",
      "Styled Components",
      "REST API",
      "",
    ],
    github: "https://github.com/Miguelkarma/VetCare",
    live: "http://vet-care.miguelkarma.rf.gd/?i=1",
    overlayTitle: "VetCare",
    overlayDescription: "Veterinary Management Clinic",
  },
  {
    title: "Portfolio V2",
    description:
      "A clean and modern personal website to showcase my work, skills, and background. Designed to be responsive and easy to explore.",
    image: "portfolio",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Firebase",
      "Tailwind",
      "Preline UI",
      "Shadcn/ui",
      "Git",
      "Styled Components",
      "Framer-Motion",
    ],
    github: "https://github.com/Miguelkarma/portfoliov2",
    live: "https://miguelkarma.vercel.app/",
    overlayTitle: "Portfolio V2",
    overlayDescription: "Personal Portfolio",
  },
  {
    title: "CalorieCalc",
    description:
      "Built with PHP and Bootstrap, it lets users calculate daily calorie needs based on weight and height, track daily intake, and view past calculations.",
    image: "CalorieCalc",
    tags: [
      "Javascript",
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "mySQL",
      "Git",
      "Graph.js",
      "Laragon",
      "",
    ],
    github: "https://github.com/Miguelkarma/calorieCalc",
    live: "http://caloriecalc.miguelkarma.rf.gd/?i=1",
    overlayTitle: "CalorieCalc",
    overlayDescription: "Calorie Calculator and Calorie Tracker",
  },
];

// Experience Types
export type ExperienceProjectType = {
  title: string;
  description: string;
};

export type ExperienceType = {
  period: string;
  role: string;
  company: string;
  projects: ExperienceProjectType[];
};

// Experience Data
export const experiences: ExperienceType[] = [
  {
    period: "January 2025 - April 2025",
    role: "Front-End Developer Intern",
    company: "Toro Cloud Philippines Pty Ltd ( lonti )",
    projects: [
      {
        title: "🔧 Full-Stack Development Training",
        description:
          "Participated in a structured internship program at Toro Cloud, studying JavaScript fundamentals along with hands-on training in React, TypeScript, Tailwind CSS, Firebase, Node.js, Express, Playwright and Jest.",
      },
      {
        title: "💻 Internship Project",
        description:
          "Designed and developed a full-stack asset tracking system with QR-based asset monitoring. Implemented CRUD operations for assets and employees using Firebase Firestore, ensuring real-time data handling.",
      },
      {
        title: "🚀 Deployment & Testing",
        description:
          "Deployed the application on Vercel with performance optimizations. Integrated third-party APIs to enhance system features and implemented comprehensive test coverage using Jest to ensure application reliability.",
      },
    ],
  },
];

// Skills Types
export type SkillType = {
  name: string;
  color: string;
};

export type SkillsType = {
  languages: SkillType[];
  frontend: SkillType[];
  backend: SkillType[];
  tools: SkillType[];
};

// Skills Data
export const skills: SkillsType = {
  languages: [
    { name: "JavaScript", color: "bg-yellow-600" },
    { name: "TypeScript", color: "bg-blue-700" },
    { name: "HTML", color: "bg-orange-600" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "PHP", color: "bg-indigo-500" },
  ],
  frontend: [
    { name: "React", color: "bg-cyan-600" },
    { name: "Tailwind CSS", color: "bg-cyan-800" },
    { name: "Vite", color: "bg-teal-600" },
    { name: "Bootstrap", color: "bg-purple-600" },
    { name: "shadcn/ui", color: "bg-gray-950" },
  ],
  backend: [
    { name: "Firebase", color: "bg-amber-600" },
    { name: "Node.js", color: "bg-green-800" },
    { name: "Express", color: "bg-emerald-800" },
  ],
  tools: [
    { name: "Git", color: "bg-gray-900" },
    { name: "GitHub", color: "bg-black" },
    { name: "BitBucket", color: "bg-sky-700" },
    { name: "Figma", color: "bg-purple-500" },
    { name: "VS Code", color: "bg-blue-600" },
    { name: "Vercel", color: "bg-gray-800" },
    { name: "Xampp", color: "bg-yellow-700" },
    { name: "Laragon", color: "bg-indigo-600" },
    { name: "Composer", color: "bg-amber-800" },
  ],
};

// Navigation Types
export type MenuItemType = {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
};

// Navigation Data
export const menuItems: MenuItemType[] = [
  {
    icon: <Home className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Home",
    href: "#home",
    gradient:
      "radial-gradient(circle, rgba(95, 153, 245, 0.42) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  },
  {
    icon: <Info className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "About Me",
    href: "#about-me",
    gradient:
      "radial-gradient(circle, rgba(199, 124, 214, 0.42) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
  },
  {
    icon: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Experience",
    href: "#experience",
    gradient:
      "radial-gradient(circle, rgba(162, 241, 191, 0.42) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
  },
  {
    icon: <FolderGit className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Projects",
    href: "#projects",
    gradient:
      "radial-gradient(circle, rgba(163, 29, 216, 0.42) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
  },
  {
    icon: <User className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Certifications",
    href: "#certs",
    gradient:
      "radial-gradient(circle, rgba(46, 106, 175, 0.42) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
  },
  {
    icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Contact Me",
    href: "#contact",
    gradient:
      "radial-gradient(circle, rgba(241, 170, 78, 0.42) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
  },
];

// certifications
export const certifications = [
  {
    id: 1,
    image: cert1,
    title: "Web Development Bootcamp",
    description:
      "Comprehensive web development course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    author: {
      name: "Udemy",
      avatar: udemy,
      date: "Oct 13, 2024",
    },
  },
  {
    id: 2,
    image: cert2,
    title: "Advanced JavaScript",
    description:
      "Deep dive into JavaScript concepts including closures, prototypes, async/await, and ES6+ features.",
    author: {
      name: "Udemy",
      avatar: udemy,
      date: "Oct 18, 2024",
    },
  },
  {
    id: 3,
    image: cert3,
    title: "React Masterclass",
    description:
      "Complete guide to building modern web applications with React",
    author: {
      name: "Udemy",
      avatar: udemy,
      date: "Oct 23, 2024",
    },
  },
  {
    id: 4,
    image: cert4,
    title: "JavaScript & PHP Complete Course",
    description:
      "Master front-end and back-end development with this complete JavaScript and PHP course",
    author: {
      name: "Udemy",
      avatar: udemy,
      date: "Oct 31, 2024",
    },
  },
];

export const contactInfo = {
  badge: {
    text: "Explore My Portfolio",
    link: "#",
    cta: "Explore",
  },
  title: "Get In Touch",
  description:
    "Feel free to reach out if you have any questions or would like to discuss potential collaborations.",
  email: "santos.p.miguel46@gmail.com",
  ctaButton: {
    text: "Send Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=santos.p.miguel46@gmail.com",
    icon: "Mail",
  },
};

export const aboutMeInfo = {
  title: "About Me",
  paragraphs: [
    "I'm a web developer passionate about building real-world applications. My journey into web development began with curiosity and the drive to solve problems through code — and it's been an exciting learning experience ever since.",
    "Over time, I've worked on several personal and academic projects, including an IT Equipment Asset Management system and a Veterinary Clinic Management app. These projects helped me gain hands-on experience in both front-end and back-end development.",
    "My current focus is on developing modern, responsive web apps using React, Firebase, and Tailwind CSS. I'm also exploring new technologies like TypeScript and external APIs to expand my skills and build more advanced features.",
  ],
  highlights: [
    { text: "IT Equipment Asset Management system", highlight: true },
    { text: "Veterinary Clinic Management app", highlight: true },
    { text: "React", highlight: true },
    { text: "Firebase", highlight: true },
    { text: "Tailwind CSS", highlight: true },
    { text: "TypeScript", highlight: true },
  ],
  skillsSection: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Languages",
        skills: skills.languages,
      },
      {
        name: "Frontend",
        skills: skills.frontend,
      },
      {
        name: "Backend",
        skills: skills.backend,
      },
      {
        name: "Tools",
        skills: skills.tools,
      },
    ],
  },
  profileImage: {
    src: "/assets/profile.jpg",
    alt: "Profile",
    browser: {
      url: "www.miguelkarma.com",
    },
  },
};
export const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "College of The Immaculate Conception",
    period: "2021-2025",
    description: "Specialized in Web Development and Cloud.",
  },
];
