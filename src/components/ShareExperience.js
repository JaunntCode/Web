import React from "react";
import img5 from "../assets/Group 32951.svg";
import "./ShareExperience.css";
function ShareExperience() {
  return (
    <div className="discover">
    <div className="sectiontwo">
      <div className="leftdiscover">
        
        <img src={img5} alt="" className=" simg"/>
        <h1 className="d-header sheader">Share your experience <br /> and see other’s <br /> experiences.</h1>
      </div>
      <div className="rightdiscover">
        <div className="rightone">
          <h1 className="headerfour">
          Get trip suggestions based on your location
          </h1>
        </div>
        <div className="righttwo">
          <h1 className="headerfour">
          Get trip suggestions based on your location
          </h1>
        </div>
        <div className="rightthree">
          <h1 className="headerfour" >
          Get trip suggestions based on your location.
          </h1>
        </div>
        <div className="rightfour">
          <h1 className="headerfour">
          Get trip suggestions based on your location
          </h1>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ShareExperience;
