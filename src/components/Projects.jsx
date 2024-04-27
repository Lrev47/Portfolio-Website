import React from "react";

const projectsData = [
  {
    id: 1,
    title: "lifeinvader Social Media App",
    description:
      "Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3.",
    imageUrl: "./assets/lifeinvader.png",
    liveUrl: "https://lifeinvadersocial.herokuapp.com/",
    sourceUrl: "https://github.com/bscottnz/life-invader-frontend",
    orientation: "left",
  },
  {
    id: 2,
    title: "Chakra Chat Messaging App",
    description:
      "Instant messaging app built with Next.JS, Firebase and Chakra UI.",
    imageUrl: "./assets/chatapp.png",
    liveUrl: "https://nextjs-chakra-chatapp-qnhb6dq42-bscottnz.vercel.app/",
    sourceUrl: "https://github.com/bscottnz/nextjs-chakra-chatapp",
    orientation: "right",
  },
  // Add other projects here...
];

const Project = ({
  title,
  description,
  imageUrl,
  liveUrl,
  sourceUrl,
  orientation,
}) => (
  <div className={`project project-${orientation}`}>
    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
      <div className="project__image-container">
        <div className="project__image-image">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </a>
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
