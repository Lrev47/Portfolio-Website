import React from "react"; // Import React (this is only necessary if you're using React 17 or earlier without the new JSX transform)
// import "./App.css";
import "./sass/main.scss";
import CanvasDots from "./components/heroCanvas";
import Hero from "./components/Hero"; // Import the Hero component

function App() {
  return (
    <div>
      <CanvasDots />
      <Hero />
      {/* You can add more components here as your application develops */}
    </div>
  );
}

export default App;
