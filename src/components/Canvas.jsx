import React, { useEffect, useRef } from "react";
import canvasDots from "./heroCanvas.jsx";
import canvasDotsBg from "./bgCanvas.jsx";

function CanvasComponent() {
  const canvasRef = useRef(null);
  const canvasBgRef = useRef(null);

  useEffect(() => {
    const heroCanvasCleanup = canvasDots(canvasRef.current);
    const bgCanvasCleanup = canvasDotsBg(canvasBgRef.current);

    return () => {
      heroCanvasCleanup();
      bgCanvasCleanup();
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <canvas ref={canvasBgRef} className="bg-canvas"></canvas>
    </div>
  );
}

export default CanvasComponent;
