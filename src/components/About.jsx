import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    const aboutFadeIn = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && document.body.scrollWidth > 1300) {
          document.querySelector(".profile").classList.add("profile__fade-in");

          // HTML
          sleep(1000).then(() => {
            document
              .querySelector(".skills__item--html")
              .classList.add("skills__item-fade-in");
          });

          // React
          sleep(1100).then(() => {
            document
              .querySelector(".skills__item--react")
              .classList.add("skills__item-fade-in");
          });

          // Express.js
          sleep(1200).then(() => {
            document
              .querySelector(".skills__item--express")
              .classList.add("skills__item-fade-in");
          });

          // JavaScript
          sleep(1300).then(() => {
            document
              .querySelector(".skills__item--js")
              .classList.add("skills__item-fade-in");
          });

          // CSS
          sleep(1400).then(() => {
            document
              .querySelector(".skills__item--css")
              .classList.add("skills__item-fade-in");
          });

          // PostgreSQL
          sleep(1500).then(() => {
            document
              .querySelector(".skills__item--postgres")
              .classList.add("skills__item-fade-in");
          });

          // Git
          sleep(1600).then(() => {
            document
              .querySelector(".skills__item--git")
              .classList.add("skills__item-fade-in");
          });

          // Redux
          sleep(1700).then(() => {
            document
              .querySelector(".skills__item--redux")
              .classList.add("skills__item-fade-in");
          });

          // Prisma ORM
          sleep(1800).then(() => {
            document
              .querySelector(".skills__item--prisma")
              .classList.add("skills__item-fade-in");
          });

          // Node.js
          sleep(1900).then(() => {
            document
              .querySelector(".skills__item--node")
              .classList.add("skills__item-fade-in");
          });
        }
      });
    };

    const observer = new IntersectionObserver(aboutFadeIn, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const target = document.querySelector(".about__content");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.disconnect();
    };
  }, []);

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
              style={{ enableBackground: "new 0 0 482.9 482.9" }}
              xmlSpace="preserve"
              height="100%"
              stroke="rgb(26, 26, 26)"
              strokeWidth="16"
            >
              <g>
                <path
                  fill="url(#gradient-1)"
                  d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5
  			c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6
  			c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z
  			 M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4
  			c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0
  			c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"
                />
                <path
                  fill="url(#gradient-2)"
                  d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3
  			c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7
  			c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41
  			c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56
  			c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8
  			c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3
  			c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3
  			C447,415.5,446.9,388.8,446.8,383.6z"
                />
              </g>
              <defs>
                <linearGradient id="gradient-1" x1="0" y1="0" x2="80%" y2="80%">
                  <stop stopColor="rgb(81,162,233)" offset="0%" />
                  <stop stopColor="rgb(168,120,162)" offset="100%" />
                </linearGradient>

                <linearGradient
                  id="gradient-2"
                  x1="20%"
                  y1="20%"
                  x2="100%"
                  y2="100%"
                >
                  <stop stopColor="rgb(168,120,162)" offset="0%" />
                  <stop stopColor="rgb(255,77,90)" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="profile__blurb">
          Fully committed to the philosophy of life-long learning, I’m a full-stack developer with a deep passion for JavaScript, React, and all things web development. The unique combination of creativity, logic, technology, and the endless opportunities for discovery drives my excitement and passion for web development. I give 100% in everything I do and strive to exceed expectations, not just meet them. When I’m not coding, I enjoy spending time with my family and playing with my son.
          </p>
        </div>
        <div className="skills">
          <div className="skills__row">
            <div className="skills__item skills__item--html">
              <img
                src="https://imagizer.imageshack.com/img922/3632/UMgriu.png"
                alt="HTML"
              />
              <div className="skills__item-name">HTML</div>
            </div>
            <div className="skills__item skills__item--react">
              <img
                src="https://imagizer.imageshack.com/img922/4779/Gtpvc1.png"
                alt="React"
              />
              <div className="skills__item-name">REACT</div>
            </div>
            <div className="skills__item skills__item--express">
              <img
                src="https://imagizer.imageshack.com/img922/7062/DHguwO.png"
                alt="Express.js"
              />
              <div className="skills__item-name">EXPRESS.JS</div>
            </div>
          </div>
          <div className="skills__row">
            <div className="skills__item skills__item--js">
              <img
                src="https://imagizer.imageshack.com/img922/5992/4NCUb3.png"
                alt="JavaScript"
              />
              <div className="skills__item-name">JAVASCRIPT</div>
            </div>
            <div className="skills__item skills__item--css">
              <img
                src="https://imagizer.imageshack.com/img923/8672/7WeCst.png"
                alt="CSS"
              />
              <div className="skills__item-name">CSS</div>
            </div>
            <div className="skills__item skills__item--postgres">
              <img
                src="https://imagizer.imageshack.com/img923/8932/4uyFY4.png"
                alt="PostgreSQL"
              />
              <div className="skills__item-name">POSTGRESQL</div>
            </div>
            <div className="skills__item skills__item--git">
              <img
                src="https://imagizer.imageshack.com/img922/8664/8uGrKJ.png"
                alt="Git"
              />
              <div className="skills__item-name">GIT</div>
            </div>
          </div>
          <div className="skills__row">
            <div className="skills__item skills__item--redux">
              <img
                src="https://imagizer.imageshack.com/img923/5948/KK4Usx.png"
                alt="Redux"
              />
              <div className="skills__item-name">REDUX</div>
            </div>
            <div className="skills__item skills__item--prisma">
              <img
                src="https://imagizer.imageshack.com/img923/5875/pOeGd7.png"
                alt="Prisma ORM"
              />
              <div className="skills__item-name">PRISMA ORM</div>
            </div>
            <div className="skills__item skills__item--node">
              <img
                src="https://imagizer.imageshack.com/img924/6241/dcO3IL.png"
                alt="Node.js"
              />
              <div className="skills__item-name">NODE.JS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
