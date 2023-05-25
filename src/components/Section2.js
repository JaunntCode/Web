import React from "react";
import img from "../assets/Nomads Moto.svg";
import "./Section2.css";
function Section2() {
  return (
    <div className="discover">
    <div className="sectiontwo">
      <div className="leftdiscover">
        <h1 className="sheader">Discover local trip <br /> desinations near you.</h1>
        <img src={img} alt="" className="simg"/>
      </div>
      <div className="rightdiscover">
        <div className="rightone">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
        <div className="righttwo">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
        <div className="rightthree">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
        <div className="rightfour">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Section2;
