import React from "react";

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
      "Full stack Ecommerce Demo made with, React, Node.js, Express.js, PostgreSQL, Prima ORM and , and Redux.",
    imageUrl: "https://imagizer.imageshack.com/img924/3310/IIziPT.png",
    liveUrl: "https://mysticalmarketplace.netlify.app/",
    sourceUrl: "https://github.com/Lrev47/CapstoneFullstack",
    orientation: "left",
    containerClass: "weather",
  },

  // {
  //   id: 3,
  //   title: "Project Number 3",
  //   description: "Create pixel art with a variety of drawing tools.",
  //   imageUrl: "./assets/retro.png",
  //   liveUrl: "https://bscottnz.github.io/esketch/",
  //   sourceUrl: "https://github.com/bscottnz/esketch",
  //   orientation: "left",
  //   containerClass: "retro",
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
}) => (
  <div className={`project project-${orientation}`}>
    {orientation === "left" ? (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <div className={`project__image-container ${containerClass}`}>
          <div className="project__image-image">
            <img src={imageUrl} alt="" />
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
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </a>
    ) : null}
  </div>
);

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="projects__heading section-heading">Projects</h2>
    {projectsData.map((project) => (
      <Project key={project.id} {...project} />
    ))}
  </section>
);

export default Projects;
