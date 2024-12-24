import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    "https://imagizer.imageshack.com/img924/9923/MFwrMR.jpg",
    "https://imagizer.imageshack.com/img924/6143/GhSlyL.jpg",
    "https://imagizer.imageshack.com/img924/1586/FsgEh8.jpg",
  ];

  // State to track which image index is currently displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous image (wrap around if at the first image)
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  // Go to the next image (wrap around if at the last image)
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

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
            {/* Left button */}
            <button onClick={prevImage} className="carousel-button left-button">
              <FaChevronLeft />
            </button>

            {/* Carousel container */}
            <div className="carousel-container">
              {imageUrls.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Profile Slide ${idx}`}
                  className={`carousel-image ${
                    idx === currentIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>

            {/* Right button */}
            <button
              onClick={nextImage}
              className="carousel-button right-button"
            >
              <FaChevronRight />
            </button>
          </div>
          <p className="profile__blurb">
            Fully committed to the philosophy of life-long learning, I’m a
            full-stack developer with a deep passion for JavaScript, React, and
            all things web development. I give 100% in everything I do and
            strive to turn my ideas into reality, not just meet them. When I’m
            not coding, I enjoy spending time with my family and playing with my
            son.
          </p>
        </div>
        <div className="skills">
          {/* Skills content remains unchanged */}
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
