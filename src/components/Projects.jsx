import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "MunchPop: Explore the World of Movies and TV Shows",
    description:
      "Dive into MunchPop’s extensive collection of movies and TV shows. Discover detailed information, explore genres, and check out viewer ratings to find your next favorite show or movie!",
    imageUrl: "https://imageshack.com/i/pmXvergsp",
    liveUrl: "https://munchpopsite.com/",
    sourceUrl: "https://github.com/Lrev47/PopMunch_Movie-Review-Website",
    orientation: "right",
    containerClass: "todo",
  },
  {
    id: 2,
    title: "Mystical Marketplace Ecommerce Website",
    description:
      "Full stack Ecommerce Demo made with React, Node.js, Express.js, PostgreSQL, Prisma ORM, and Redux.",
    imageUrl: "https://imagizer.imageshack.com/img924/3310/IIziPT.png",
    liveUrl: "https://mysticalmarketplace.netlify.app/",
    sourceUrl: "https://github.com/Lrev47/CapstoneFullstack",
    orientation: "left",
    containerClass: "weather",
  },
  // Uncomment the following project if needed
  {
    id: 3,
    title: "AISynthLab: A One stop Shop for AI Creation",
    description:
      "A custom-built admin dashboard for managing AI agents, data analytics, financial tracking, and image management. Features include user authentication, version control, drag-and-drop UI for AI workflows, integration with APIs, and PostgreSQL database management.",
    imageUrl: "https://imagizer.imageshack.com/img924/9162/CibDvJ.png", // Replace with your actual image URL
    liveUrl: "https://aisynthlab.com/", // Replace with your actual live URL
    sourceUrl: "https://github.com/Lrev47/AiImageGenFrontEnd", // Replace with your actual repository URL
    orientation: "right",
    containerClass: "dashboard",
  },

  // Uncomment the following project if needed
  // {
  //   id: 4,
  //   title: "Admin Dashboard: AI Agent and Workflow Management",
  //   description:
  //     "A custom-built admin dashboard for managing AI agents, data analytics, financial tracking, and image management. Features include user authentication, version control, drag-and-drop UI for AI workflows, integration with APIs, and PostgreSQL database management.",
  //   imageUrl: "https://example.com/admin-dashboard-image.png", // Replace with your actual image URL
  //   liveUrl: "https://admin-dashboard-live-url.com/", // Replace with your actual live URL
  //   sourceUrl: "https://github.com/Lrev47/Admin-Dashboard", // Replace with your actual repository URL
  //   orientation: "right",
  //   containerClass: "dashboard",
  // },
];

const Project = ({
  title,
  description,
  imageUrl,
  liveUrl,
  sourceUrl,
  orientation,
  containerClass,
  isLast,
}) => (
  <div
    className={`project project-${orientation} ${
      isLast ? "project--last" : ""
    }`}
  >
    {orientation === "left" ? (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <div className={`project__image-container ${containerClass}`}>
          <div className="project__image-image">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </a>
    ) : null}
    <div className="project__info">
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <div className="project__live-2">Live app</div>
      </a>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        <div className="project__live-2">Learn more</div>
      </a>
    </div>
    {orientation === "right" ? (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <div className={`project__image-container ${containerClass}`}>
          <div className="project__image-image">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </a>
    ) : null}
  </div>
);

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="projects__heading section-heading">Projects</h2>
    {projectsData.map((project, index) => (
      <Project
        key={project.id}
        isLast={index === projectsData.length - 1}
        {...project}
      />
    ))}
    <div className="projects__all-projects-button-container">
      <Link to="/all-projects" className="projects__all-projects-button">
        All Projects
      </Link>
    </div>
  </section>
);

export default Projects;
