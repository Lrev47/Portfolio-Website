import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="#hero">
        <div className="return-home">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fafafa"
              d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
            ></path>
          </svg>
        </div>
      </a>
      <div className="socials">
        <a
          href="https://github.com/Lrev47"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="socials__github">
            <img
              src="https://imagizer.imageshack.com/img922/6963/LvHgpL.png"
              alt="GitHub"
            />
          </div>
        </a>
        <a
          href="mailto:luis.revilla47@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="socials__email">
            <img
              src="https://imagizer.imageshack.com/img923/3862/sGXlku.png"
              alt="Email"
            />
          </div>
        </a>
      </div>
      <p className="copyright">LUIS REVILLA ©2024</p>
    </footer>
  );
}

export default Footer;
