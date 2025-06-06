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
  sggsc,
  tesla,
  shopify,
  carrent,
  fitnesstracker,
  smartbrain,
  crypto,
  taskmanager,
  threejs,
  by,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Blue Yonder",
    icon: by,
    iconBg: "#383E56",
    date: "September 2024 - ",
    points: [
      "Resolved defects in the Warehouse Management System (WMS), focusing on UI issues and improving functional stability.",
      "Contributed to robotics automation development in Warehouse Labor Management (WLM) to streamline operations.",
      "Integrated new policy configurations into the database to support automation features.",
      "Upgraded UI components and created new backend endpoints to ensure smooth automation workflows.",
      "Designed database tables and automation commands, and initiated a scheduling system for robotics processes.",
      "Implemented microservices architecture to boost scalability and enable independent service deployment.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Societe generale Global Solution Centre",
    icon: sggsc,
    iconBg: "#383E56",
    date: "August 2023 - September 2024",
    points: [
      "Improved and enhanced existing codebases, resulting in faster loading time for key application features.",
      "Migrated legacy systems from HD Insight to Azure Kubernetes Service (AKS), improving scalability and cutting operational costs.",
      "Replaced legacy .NET services with Python-based REST APIs, simplifying code and improving performance.",
      "Built robust data pipelines to manage ingestion, transformation, and storage of large datasets across platforms.",
      "Architected data computation frameworks using PySpark and Apache Spark, increasing throughput and enabling large-scale analytics.",
      "Improved site performance by introducing caching mechanisms, reducing server load and enhancing user engagement.",
      "Established CI/CD pipelines to streamline deployments, reduce errors, and improve system reliability.",
    ],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Revamped the existing codebase architecture by implementing advanced compression algorithms, resulting in an impressive reduction in Cloud storage space, streamlining data management and optimizing system performance significantly.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Fitness Tracker",
    description:
      "A responsive web app to log workouts, track fitness progress, and set goals. Features an intuitive UI, interactive charts, and user profiles. Built with modern tech and deployed on Vercel.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: fitnesstracker,
    source_code_link: "https://github.com/ashishkr2149/fitness-tracker/",
    url: "https://fitness-tracker-ashishkr2149s-projects.vercel.app/",
  },
  {
    name: "Smart Brain",
    description:
      "Web-based platform that allows users to register, login and keep score of images searched, it can detect single or even multiple faces and outlines them from the image provided via a url.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootsrap",
        color: "pink-text-gradient",
      },
    ],
    image: smartbrain,
    source_code_link: "https://github.com/ashishkr2149/smartbrain/",
    url: "https://smartbrain-two.vercel.app/",
  },
  {
    name: "Crypto Dashboard",
    description:
      "Web application that enables users to view, search and add any crypto currencies on watchlist, it also shows the top 10 crypto currencies and has a custom pagination component.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/ashishkr2149/crypto-dashboard",
    url: "https://crypto-dashboard-6apa.vercel.app/",
  },
  // {
  //   name: "Ecommerce",
  //   description:
  //     "A comprehensive Ecommerce app which allows admin to create new categories and products and allows user to view, add them to wacthlist and even continue to checkout with a payment system.",
  //   tags: [
  //     {
  //       name: "mongodb",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "expressjs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/ecommerce-app",
  //   url: "https://crypto-dashboard-6apa.vercel.app/",
  // },
  {
    name: "Task Manager",
    description:
      "This web application lets users register, log in, and manage tasks in To Do, In Progress, and Done sections. Users can see due times and move tasks between sections easily. Stay organized and efficient with this intuitive tool.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/ashishkr2149/task-manager",
    url: "https://task-manager-ashishkr2149s-projects.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
