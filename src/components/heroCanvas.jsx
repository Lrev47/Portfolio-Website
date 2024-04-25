import React, { useRef, useEffect } from "react";

function CanvasDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = document.body.scrollWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colorDot = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ];

    let mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    function updateMousePosition(event) {
      mousePosition.x = event.pageX;
      mousePosition.y = event.pageY;
    }
    window.addEventListener("mousemove", updateMousePosition);

    const dots = {
      nb: determineNbDots(window.innerWidth),
      distance: 70,
      d_radius: 300,
      array: [],
    };

    function determineNbDots(width) {
      if (width > 1600) return 600;
      if (width > 1300) return 575;
      if (width > 1100) return 500;
      if (width > 800) return 300;
      if (width > 600) return 200;
      return 100;
    }

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 1.5;
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype.update = function () {
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      this.x += this.vx;
      this.y += this.vy;
    };

    Dot.prototype.create = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.colour;
      ctx.fill();
    };

    function drawLines() {
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = "rgb(81, 162, 233)";
      for (let i = 0; i < dots.array.length; i++) {
        for (let j = i + 1; j < dots.array.length; j++) {
          const dot1 = dots.array[i];
          const dot2 = dots.array[j];
          const dx = dot1.x - dot2.x;
          const dy = dot1.y - dot2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < dots.distance) {
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }
    }

    function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (dots.array.length === 0) {
        for (let i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot());
        }
      }
      dots.array.forEach((dot) => {
        dot.update();
        dot.create();
      });
      drawLines();
    }

    const draw = setInterval(createDots, 1000 / 30);

    return () => {
      clearInterval(draw);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvasDots;
