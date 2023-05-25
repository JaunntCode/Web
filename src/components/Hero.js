import React from "react";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img1 from "../assets/logo3.svg";
import img2 from "../assets/Group 71.svg";
import img3 from "../assets/Plans Expenses 1.svg";
import img4 from "../assets/My Profile - Experiences 2.svg";
import img5 from "../assets/Place Page - Itinerary 1.svg";
import img6 from "../assets/Add Experience 2 (1) 1.svg";
function Hero() {
  const [text] = useTypewriter({
    // words: [
    //   "Designing to ideate",
    //   "Exploring innovation",
    //   "Engineering to inspire",
    //   "Digitally Serving",
    // ],
    words:["Your one stop collaborative local trip discovery and planning app"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="Hero">
      <div className="top">
        <img src={img1} alt="" className="logo"/>
        <h1 className="headertop">Jauunt</h1>
      </div>
      <div className="bottom">
        <h2>
          {/* Your one stop collaborative local trip <br /> dicovery and planning
          app */}
          <span className="typewriter">{text}</span>
          <Cursor cursorColor="black" />
        </h2>
        
      </div>
      <div className="images">
        <img src={img2} alt="" className="img img1" />
        <img src={img3} alt="" className="img img2" />
        <img src={img4} alt="" className="img img3" />
        <img src={img5} alt="" className="img img4" />
        <img src={img6} alt="" className="img img5" />
      </div>
    </div>
  );
}
export default Hero;
