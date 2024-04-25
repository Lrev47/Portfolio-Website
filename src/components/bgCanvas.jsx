import React, { useRef, useEffect } from "react";

function CanvasDotsBg() {
  const canvasRef = useRef(null);
  const speedFactor = 0.3;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "rgb(81, 162, 233)";

    let dots = {
      nb: determineDots(window.innerWidth),
      array: [],
    };

    function determineDots(width) {
      if (width > 1600) return 100;
      if (width > 1300) return 75;
      if (width > 1100) return 50;
      return 30; // Adjusted for smaller screens
    }

    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (-0.5 + Math.random()) * speedFactor;
        this.vy = (-0.5 + Math.random()) * speedFactor;
        this.radius = Math.random() * 1.5;
        this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`; // Random colors for each dot
      }

      create() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        // Reflect dots off canvas edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
      }
    }

    // Initialize dots
    for (let i = 0; i < dots.nb; i++) {
      const dot = new Dot();
      dots.array.push(dot);
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.array.forEach((dot) => {
        dot.move();
        dot.create();
      });
      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <div className="main-bg">
      <div className="canvas">
        <canvas ref={canvasRef} className="canvas-2"></canvas>
      </div>
    </div>
  );
}

export default CanvasDotsBg;
