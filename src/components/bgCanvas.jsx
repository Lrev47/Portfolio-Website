import React, { useRef, useEffect } from "react";

function CanvasDotsBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const colorDot = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ];
    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "rgb(81, 162, 233)";

    let mousePosition = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100,
    };

    let dots = {
      nb: determineDots(window.innerWidth),
      distance: 0,
      d_radius: 0,
      array: [],
    };

    function determineDots(width) {
      if (width > 1600) return 100;
      if (width > 1300) return 75;
      if (width > 1100) return 50;
      return 1;
    }

    // Initialize and animate dots
    function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.array = [];
      for (let i = 0; i < dots.nb; i++) {
        const dot = new Dot();
        dots.array.push(dot);
        dot.create();
      }
    }

    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 1.5;
        this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
      }

      create() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.colour;
        ctx.fill();
      }
    }

    const draw = setInterval(createDots, 1000 / 30);

    // Cleanup on component unmount
    return () => clearInterval(draw);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return <canvas ref={canvasRef} className="canvas-2"></canvas>;
}

export default CanvasDotsBg;
