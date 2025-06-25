import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  jobit,
  tripguide,
  trackit,
  bookstore,
  movie,
  homes,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "InTrack AI",
    description:
      "Django/React Native project that implements GPS tracking and employs an AI model.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: trackit, // placeholder, update as needed
    source_code_link: "https://github.com/OmarDerwy/ITI-Attendance-FrontendRN",
  },
  {
    name: "Bookstore",
    description:
      "MERN project that implements paymob, utilizes the entire stack and is deployed on Vercel.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "paymob",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore, // placeholder, update as needed
    source_code_link: "https://github.com/OmarDerwy/ITIProject-GoodReads-Front",
  },
  {
    name: "Homes",
    description:
      "Vanilla JS real estate site. Similar to nawy. Lets users list properties for other people to buy.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "real-estate",
        color: "green-text-gradient",
      },
      {
        name: "vanilla-js",
        color: "pink-text-gradient",
      },
    ],
    image: homes, // placeholder, update as needed
    source_code_link: "https://github.com/OmarDerwy/ITIProject-eCommerce",
  },
  {
    name: "Movie catalogue",
    description:
      "React project that lets users browse through movies and wish-list them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "movies",
        color: "green-text-gradient",
      },
      {
        name: "wishlist",
        color: "pink-text-gradient",
      },
    ],
    image: movie, // placeholder, update as needed
    source_code_link: "https://github.com/OmarDerwy/movie-app",
  },
  // {
  //   name: "DBMS project",
  //   description:
  //     "Using bash, implemented a database management system. Allows users to add and query data.",
  //   tags: [
  //     {
  //       name: "bash",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "dbms",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "cli",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit, // placeholder, update as needed
  //   source_code_link: "https://github.com/OmarDerwy/ITIProject-BashDBMS",
  // },
];

const dev_name = "Omar Elderwy";
const brief =
  "A passionate Full Stack Developer with expertise in React.js, Node.js, and MongoDB, dedicated to building scalable web applications.";
const introduction =
  "As a Full Stack Developer, I excel at building dynamic, responsive web applications with modern technologies. I specialize in React.js for the frontend and Node.js or Django for the backend, utilizing PostgreSQL or MongoDB for robust data management. My focus is on delivering high-quality, scalable solutions that align with user needs and drive business success.";
// const introduction = `I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!`;
export {
  dev_name,
  brief,
  introduction,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
