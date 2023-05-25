import React from "react";
import image from "../assets/Nomads Road Trip.svg";
import "./GroupPlan.css";
function GroupPlan() {
  return (
    <div className="discovertwo">
    <div className="sectiontwotwo sectiontwo">
      <div className="leftdiscovertwo">
        <h1 className="d-headertwo sheader">Make groups, plan your <br /> trips and split expenses</h1>
        <img src={image} alt="" className="gimg simg"/>
      </div>
      <div className="rightdiscovertwo rightdiscover">
        <div className="rightonetwo rightone">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
        <div className="righttwotwo righttwo">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
        <div className="rightthreetwo rightthree">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
        <div className="rightfourtwo rightfour">
          <h4 className="headerfour">
          Get trip suggestions based on your location
          </h4>
        </div>
      </div>
    </div>
    </div>
  );
}
export default GroupPlan;
