// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import lpuLogo from "./assets/lpu.webp";
import apsLogo from "./assets/grss.jpg";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/meds.jpg";
import csprepLogo from "./assets/work_logo/vote.jpg";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/image copy 3.png";
import npmLogo from "./assets/work_logo/car rental.png";
import webverLogo from "./assets/work_logo/image copy 4.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Med Connect",
    description:
      "MedConnect is a full-stack web application designed to streamline the process of booking medical appointments. The system allows users to schedule appointments through an intuitive interface, while ensuring efficient data handling and storage using a MySQL database. The application focuses on user-friendly design, responsive layout, and reliable backend logic for managing appointment records.",
    image: githubdetLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL"
      
    ],
    github:
      "https://github.com/Sudhanshukumar2004/medconnect",

  },
  {
    id: 1,
    title: "Online Polling System",
    description:
      "Online Polling System is a full-stack application where users can create polls and vote in real time.It uses React for frontend, Node.js and MongoDB for backend, and Socket.io for live updates.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript","NodeJS", "ExpressJS","MongoDB","Socket.io"],
    github: "https://github.com/Sudhanshukumar2004/Polling_System",
   
  },

  {
    id: 3,
    title: "Car Rental",
    description:
      "Car Rental System is a full-stack web application designed to provide users with a seamless platform for browsing available vehicles, booking rentals, and managing reservation details. The application handles backend operations such as vehicle availability, booking records, and user data management using Node.js and MongoDB. The frontend is built with React.js to ensure a responsive and intuitive user experience. The system focuses on efficient data handling, smooth navigation, and real-time updates of booking status.",
    image: npmLogo,
    tags: ["React JS", "Node.js","ReactJS","NodeJS","ExpressJS","MongoDB"],
    github: "https://github.com/Sudhanshukumar2004/Car-Rental-management",
    
  }
 
];

export const achievements = [
  "Solved 200+ DSA problems across LeetCode, GFG and HackerRank",
  "Built multiple full-stack MERN applications",
  "Earned a 5★ Hacker Rank for solving C++ problems.",
  "Participated in coding contests and hackathons"

];

export const certificates = [
  {
    title: "React.js (Basic)",
    org: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/b01a1818a238",
    date: "Feb 2026",
  },
  // {
  //   title: "Build Generative AI Apps",
  //   org: "Infosys Springboard",
  //   link: "https://www.hackerrank.com/certificates/64b299aa1228",
  //   date: "Aug 2025",
  // },
  {
    title: "Algo University Graph Theory Camp",
    org: "Algo University",
    link: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/sudhanshu-kumar.png",
    date: "Feb 2026",
  },
  {
    title: "Object Oriented Programming",
    org: "IamNeo",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BY5XBSaCOPRwFfbwkSrnGPFuKR5CQmtlQ%3D",
    date: "Aug 2024",
  },
  {
    title: "Object Oriented Programming",
    org: "IamNeo",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BY6iiY0mQS%2Fu%2BM2Aoc%2FUowQidufuD8Eik%3D",
    date: "Aug 2024",
  },
];

export const educationData = [
  {
    logo: lpuLogo,
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    degree: "Bachelors of Technology in Computer Science and Engineering",
    duration: "August 2023 - Present",
    percentage: "CGPA: 6.8 CGPA (Till Date)",
    description:
      "Pursuing B.Tech in Computer Science and Engineering, focusing on full-stack web development and modern frameworks like MERN. Actively involved in projects that emphasize performance, scalability, and clean UI/UX design.",
  },
  {
    logo: apsLogo,
    institution: "Saraswati Vidya Mandir",
    location: "Bhagalpur, Bihar",
    degree: "Senior Secondary (Class XII)",
    duration: "April 2020 - March 2021",
    percentage: "Percentage: 78%",
    description:
      "Completed higher secondary education in the science stream with a focus on Mathematics and Computer Science. Developed strong analytical and logical reasoning abilities.",
  },
  {
    logo: apsLogo,
    institution: "Saraswati Vidya Mandir",
    location: "Bhagalpur, Bihar",
    degree: "Secondary (Class X)",
    duration: "April 2018 - March 2019",
    percentage: "Percentage: 75%",
    description:
      "Completed foundational education with distinction, sparking an early interest in technology, computers, and logical problem solving.",
  },
];
