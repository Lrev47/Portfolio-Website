import React, { useRef, useEffect } from "react";

function CanvasDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "rgb(81, 162, 233)";

    let mousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    window.onmousemove = function (parameter) {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY;
    };

    const colorDot = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ];

    function determineDots(width) {
      if (width > 1600) return { nb: 600, distance: 70, d_radius: 300 };
      if (width > 1300) return { nb: 575, distance: 60, d_radius: 280 };
      if (width > 1100) return { nb: 500, distance: 55, d_radius: 250 };
      if (width > 800) return { nb: 300, distance: 0, d_radius: 0 };
      if (width > 600) return { nb: 200, distance: 0, d_radius: 0 };
      return { nb: 100, distance: 0, d_radius: 0 };
    }

    let dots = determineDots(window.innerWidth);

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 1.5;
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype.create = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      const dotDistance = Math.sqrt(
        (this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2
      );
      const distanceRatio = dotDistance / (window.innerWidth / 1.7);
      ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
      ctx.fill();
    };

    function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.array = Array.from({ length: dots.nb }, () => new Dot());
      dots.array.forEach((dot) => dot.create());
    }

    const draw = setInterval(createDots, 1000 / 30);

    return () => {
      clearInterval(draw);
      window.onmousemove = null;
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
}

export default CanvasDots;
