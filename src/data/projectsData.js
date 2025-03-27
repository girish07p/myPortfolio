// src/data/projectsData.js
import projImg1 from "../assets/img/mazeSolver.png";
import projImg2 from "../assets/img/ball-shooting.png";
import projImg3 from "../assets/img/coin-exchange.png";
import projImg4 from "../assets/img/ecomGrocerry.png";
import projImg5 from "../assets/img/oneDayCart.png";
import projImg6 from "../assets/img/printingQueue.png";
import projImg7 from "../assets/img/restraApp.png";

// for the projects component
export const projects = [
  {
    id: "p01",
    title: "1DayCart (E-Commerce Startup)",
    description: "Backend Intern",
    imgUrl: projImg5,
  },
  {
    id: "p02",
    title: "Restra-App Startup",
    description: "Design & Development",
    imgUrl: projImg7,
  },
  {
    id: "p03",
    title: "General Store e-commerce",
    description: "Developed & Deployed",
    imgUrl: projImg4,
  },
  {
    id: "p04",
    title: "Dynamic Coin-exchange",
    description: "Design & Development",
    imgUrl: projImg3,
    link: "https://www.youtube.com/watch?v=adZkE-TD_T8",
  },
  {
    id: "p05",
    title: "Ball-Shooting Game",
    description: "Design & Development",
    imgUrl: projImg2,
    link: "https://girish07p.github.io/Ball-Shooting-Game/",
  },
  {
    id: "p06",
    title: "Maze Solver | Visual BFS",
    description: "Design and Development in C++",
    imgUrl: projImg1,
  },
  {
    id: "p07",
    title: "Printing Queue",
    description: "Design and Development",
    imgUrl: projImg6,
  },
];

// for the project displayer component
export const detailedProjects = projects.map((project) => ({
  ...project,
  shortDescription: project.description,
  longDescription: getLongDescription(project.id),
  additionalImages: getAdditionalImages(project.id),
  details: getProjectDetails(project.id),
  link: project.link || null,
}));

function getLongDescription(id) {
  const descriptions = {
    p01: "Worked on the backend of a fast-paced e-commerce startup, implementing scalable database solutions and optimizing search functionalities.",
    p02: "Designed and developed a restaurant management app, streamlining order processing and improving customer experience.",
    p03: "Built and deployed a general store e-commerce platform, integrating payment gateways and cart functionalities.",
    p04: "A dynamic real-time currency exchange system with WebSocket-based updates and interactive UI.",
    p05: "An interactive 2D game with physics-based shooting mechanics and score tracking.",
    p06: "A visualization tool demonstrating the BFS algorithm solving mazes with interactive grid creation.",
    p07: "Developed a queue management system for efficient handling of multiple print jobs in a shared environment.",
  };
  return descriptions[id] || "Project details coming soon.";
}

function getAdditionalImages(id) {
  const images = {
    p01: [projImg5],
    p02: [projImg7],
    p03: [projImg4],
    p04: [projImg3],
    p05: [projImg2],
    p06: [projImg1],
    p07: [projImg6],
  };
  return images[id] || [];
}

function getProjectDetails(id) {
  const details = {
    p01: [
      "Developed REST APIs using Node.js and Express.js",
      "Designed optimized database schema with Sequelize",
      "Implemented search algorithms to enhance product discovery",
      "Integrated authentication for different user roles",
    ],
    p02: [
      "Created a full-stack restaurant management system",
      "Integrated real-time order tracking for better service efficiency",
      "Designed an intuitive UI with responsive components",
    ],
    p03: [
      "Developed an online store with inventory and checkout system",
      "Integrated Razorpay for secure payment processing",
      "Implemented admin panel for product management",
    ],
    p04: [
      "Built a WebSocket-based live currency exchange system",
      "Designed a real-time transaction mechanism",
      "Implemented secure authentication and user wallet feature",
    ],
    p05: [
      "Developed a physics-based interactive shooting game",
      "Implemented collision detection using vanilla JavaScript",
      "Designed engaging animations and score tracking system",
    ],
    p06: [
      "Implemented BFS algorithm for shortest pathfinding",
      "Created an interactive grid with real-time visualization",
      "Developed C++ console graphics for better user interaction",
    ],
    p07: [
      "Designed a queue management system for shared printers",
      "Implemented priority-based scheduling",
      "Developed a user-friendly interface for tracking print jobs",
    ],
  };
  return details[id] || [];
}