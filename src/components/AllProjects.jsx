import React from "react";
// Example imports for icons as variables.
// Replace or add to these with your actual icon paths:
import htmlIcon from "../assets/PNGs/HTMLEmblem.png";
import cssIcon from "../assets/PNGs/CSSEmblem.png";
import jsIcon from "../assets/PNGs/JavaScriptLogo.png";
import nodeIcon from "../assets/PNGs/NodejsLogo.png";
import reactIcon from "../assets/PNGs/ReactLogo.png";
import expressIcon from "../assets/PNGs/ExpressEmblem.png";
import sassIcon from "../assets/PNGs/SassLogo.png";
import python from "../assets/PNGs/py.png";
import runpodIcon from "../assets/PNGs/runPod.png";
import docker from "../assets/PNGs/docker.png";

// ...and so on

// Placeholder array of project data you can expand with your own info

const postgresIcon = "https://imagizer.imageshack.com/img923/8932/4uyFY4.png";
const AiIcon = "https://imagizer.imageshack.com/img922/8946/vrAhTr.png";
const reactRouterIcon = "https://imagizer.imageshack.com/img924/614/8yINvl.png";

const allProjectsData = [
  {
    id: 1,
    title: "Book Buddy",
    description: "Search a catalog of books using a public book API.",
    imageUrl: "https://imagizer.imageshack.com/img924/8831/VWEIH6.png", // External or internal URL
    // An array of icons relevant to this project:
    icons: [htmlIcon, cssIcon, jsIcon, reactIcon, reactRouterIcon],
    liveUrl: "https://bookbuddylrev.netlify.app",
  },
  {
    id: 2,
    title: "Grocery List V2",
    description: "Learning HTML & CSS by making a grocery list.",
    imageUrl: "https://imagizer.imageshack.com/img924/7462/7NS3v0.png",
    icons: [htmlIcon, cssIcon],
    liveUrl: "https://grocerylist2lrev.netlify.app",
  },
  {
    id: 3,
    title: "Puppy Pals",
    description: "Learning JavaScript, state management, and basic animation.",
    imageUrl: "https://imagizer.imageshack.com/img923/4715/1cgOjG.png",
    icons: [reactIcon, cssIcon, jsIcon],
    liveUrl: "https://puppypalslrev.netlify.app",
  },
  {
    id: 4,
    title: "Color Router",
    description:
      "Learning React Router by routing to pages with different colors.",
    imageUrl: "https://imagizer.imageshack.com/img923/1276/W7kuE6.png", // External or internal URL
    icons: [htmlIcon, cssIcon, reactIcon, reactRouterIcon],
    liveUrl: "https://reactrouterlrev.netlify.app",
  },
  {
    id: 5,
    title: "Personal Website",
    description: "My first attempt at creating a portfolio.",
    imageUrl: "https://imagizer.imageshack.com/img924/504/Hqe57B.png",
    icons: [htmlIcon, cssIcon, jsIcon],
    liveUrl: "https://personalwebsitelrev.netlify.app",
  },
  {
    id: 6,
    title: "Bank Account",
    description: "Learning React and Redux by simulating bank transactions.",
    imageUrl: "https://imagizer.imageshack.com/img922/718/tZZOI4.png",
    icons: [reactIcon, jsIcon, cssIcon, sassIcon],
    liveUrl: "https://bankaccountlrev.netlify.app",
  },
  {
    id: 7,
    title: "Puppy Bowl V3",
    description: "My React version of Puppy Bowl.",
    imageUrl: "https://imagizer.imageshack.com/img924/4116/dXTNTX.png",
    icons: [cssIcon, reactIcon, jsIcon, reactRouterIcon],
    liveUrl: "https://puppybowllrev.netlify.app",
  },
  {
    id: 8,
    title: "Color Picker",
    description:
      "Learning React Hooks and state management by updating the displayed color based on button clicks.",
    imageUrl: "https://imagizer.imageshack.com/img922/2141/iyfStH.png",
    icons: [reactIcon, cssIcon],
    liveUrl: "https://colorpickerlrev.netlify.app",
  },
  {
    id: 9,
    title: "Art Gallery",
    description:
      "Learning about forms and the sign-up process by simulating an art gallery.",
    imageUrl: "https://imagizer.imageshack.com/img922/3996/5Jj2R9.png",
    icons: [htmlIcon, cssIcon],
    liveUrl: "https://artgallerylrev.netlify.app",
  },
  {
    id: 10,
    title: "Puppy Bowl V2",
    description: "Puppy Bowl created in HTML.",
    imageUrl: "https://imagizer.imageshack.com/img923/1219/CkkJlh.png", // External or internal URL
    // An array of icons relevant to this project:
    icons: [htmlIcon, cssIcon, jsIcon],
    liveUrl: "https://pupbowllrev.netlify.app",
  },
  {
    id: 11,
    title: "Odds and Evens",
    description:
      "Learning JavaScript by separating odd and even numbers from a list.",
    imageUrl: "https://imagizer.imageshack.com/img924/3199/0r4HwI.png",
    icons: [htmlIcon, cssIcon, jsIcon],
    liveUrl: "https://oddsandevenslrev.netlify.app",
  },
  {
    id: 12,
    title: "Puppy Bowl V1",
    description: "Learning to work with external APIs.",
    imageUrl: "https://imagizer.imageshack.com/img924/9757/AvQs0K.png",
    icons: [reactIcon, jsIcon, cssIcon],
    liveUrl: "https://puppybowleventlrev.netlify.app",
  },
  {
    id: 13,
    title: "Grocery List",
    description: "Learning CSS by creating a more organized grocery list.",
    imageUrl: "https://imagizer.imageshack.com/img924/7073/BbFWIV.png", // External or internal URL
    // An array of icons relevant to this project:
    icons: [htmlIcon, cssIcon],
    liveUrl: "https://grocerylistlrev.netlify.app",
  },
  {
    id: 14,
    title: "Animal List",
    description:
      "My first time coding: a list of animals linking to Wikipedia pages.",
    imageUrl: "https://imagizer.imageshack.com/img923/5874/IniYhM.png",
    icons: [htmlIcon],
    liveUrl: "https://animallistlrev.netlify.app",
  },
  {
    id: 15,
    title: "Mythical MarketPlace",
    description: "A full-stack mock eCommerce clone selling mythical goods.",
    imageUrl: "https://imagizer.imageshack.com/img924/3310/IIziPT.png",
    icons: [reactIcon, cssIcon, jsIcon, expressIcon, postgresIcon, nodeIcon],
    liveUrl: "https://mysticalmarketplace.netlify.app",
  },
  {
    id: 16,
    title: "Revilla Realm",
    description:
      "A choose-your-own-adventure game using AI-generated images (under development).",
    imageUrl: "https://imagizer.imageshack.com/img924/5949/qySBEj.png", // External or internal URL
    // An array of icons relevant to this project:
    icons: [
      reactIcon,
      cssIcon,
      jsIcon,
      expressIcon,
      postgresIcon,
      nodeIcon,
      AiIcon,
    ],
    liveUrl: "https://revillarealm.com",
  },
  {
    id: 17,
    title: "MunchPop! Movie Ratings",
    description:
      "A front-end website displaying various movies and TV show information and ratings.",
    imageUrl: "https://imagizer.imageshack.com/img922/2042/Xvergs.png",
    icons: [cssIcon, jsIcon, reactIcon, reactRouterIcon],
    liveUrl: "https://munchpopsite.com",
  },
  {
    id: 18,
    title: "AI Synth Lab",
    description:
      "An AI image generation website where you can create any image in various styles.",
    imageUrl: "https://imagizer.imageshack.com/img924/9162/CibDvJ.png",
    icons: [
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon,
      reactRouterIcon,
      AiIcon,
      python,
      docker,
      runpodIcon,
    ],
    liveUrl: "https://aisynthlab.com",
  },
  // Add as many more as you need...
];

const AllProjects = () => {
  return (
    <section className="all-projects" id="all-projects">
      <h2 className="all-projects__heading section-heading">All Projects</h2>
      <p className="all-projects__placeholder">
        Here you can find a more complete list of all my work, both big and
        small.
      </p>

      <div className="all-projects__grid">
        {allProjectsData.map((project) => (
          <a
            href={project.liveUrl}
            key={project.id}
            className="all-projects__card"
            target="_blank"
            rel="noopener noreferrer"
            // style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="all-projects__card" key={project.id}>
              <div className="all-projects__image-container">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="all-projects__image"
                />
              </div>
              <h3 className="all-projects__card-title">{project.title}</h3>
              <p className="all-projects__card-description">
                {project.description}
              </p>
              <div className="all-projects__icons">
                {project.icons.map((iconSrc, idx) => (
                  <img
                    key={idx}
                    src={iconSrc}
                    alt={`icon-${idx}`}
                    className="all-projects__icon"
                  />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
