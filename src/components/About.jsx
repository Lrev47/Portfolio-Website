import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__heading section-heading">About</h2>
      <div className="about__content">
        <div className="profile">
          <div className="profile__picture">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 482.9 482.9"
              style={{
                enableBackground: "new 0 0 482.9 482.9",
                height: "100%",
                stroke: "rgb(26, 26, 26)",
                strokeWidth: "16",
              }}
              xmlSpace="preserve"
            >
              {/* SVG content */}
            </svg>
          </div>
          <p className="profile__blurb">
            Fully committed to the philosophy of life-long learning, I’m a full
            stack developer with a deep passion for JavaScript, React, and all
            things web development. The unique combination of creativity, logic,
            technology, and never running out of new things to discover, drives
            my excitement and passion for web development. When I’m not at my
            computer I like to spend my time reading, keeping fit, and playing
            guitar.
          </p>
        </div>
        <div className="skills">
          <div className="skills__row">
            <div className="skills__item skills__item--html">
              <img src="./assets/html.png" alt="HTML" />
              <div className="skills__item-name">HTML</div>
            </div>
            <div className="skills__item skills__item--react">
              <img src="./assets/react.png" alt="React" />
              <div className="skills__item-name">REACT</div>
            </div>
            <div className="skills__item skills__item--npm">
              <img src="./assets/express.png" alt="Express.js" />
              <div className="skills__item-name">EXPRESS.JS</div>
            </div>
          </div>
          <div className="skills__row">
            <div className="skills__item skills__item--js">
              <img src="./assets/js.png" alt="JavaScript" />
              <div className="skills__item-name">JAVASCRIPT</div>
            </div>
            <div className="skills__item skills__item--css">
              <img src="./assets/css.png" alt="CSS" />
              <div className="skills__item-name">CSS</div>
            </div>
            <div className="skills__item skills__item--python">
              <img src="./assets/mongo.png" alt="MongoDB" />
              <div className="skills__item-name">MONGODB</div>
            </div>
            <div className="skills__item skills__item--git">
              <img src="./assets/git.png" alt="Git" />
              <div className="skills__item-name">GIT</div>
            </div>
          </div>
          <div className="skills__row">
            <div className="skills__item skills__item--sass">
              <img src="./assets/sass.png" alt="Sass" />
              <div className="skills__item-name">SASS</div>
            </div>
            <div className="skills__item skills__item--webpack">
              <img src="./assets/nextjs.png" alt="Next.js" />
              <div className="skills__item-name">NEXT.JS</div>
            </div>
            <div className="skills__item skills__item--r">
              <img src="./assets/node.png" alt="Node.js" />
              <div className="skills__item-name">NODE.JS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
