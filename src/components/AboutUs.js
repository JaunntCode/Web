import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailIcon from "@mui/icons-material/Email";
import img1 from "../assets/logo3.svg";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="aboutus">
      <div className="abt_us">
        <div className="aboutus_head">
          <h1 className="head">About Us</h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            recusandae nulla repellendus dolorum eius tempore quia eos nostrum
            at iure, esse optio laboriosam, nihil laborum aspernatur repellat ad
            incidunt vitae praesentium quam ut modi accusamus officiis deserunt.
            Autem error inventore enim, praesentium nemo aliquid, voluptatibus
            magnam fuga eos cupiditate similique.
          </p>
        </div>
        <div className="about_content">
          <div className="about_desc">
            <h1 className="header_connect">Connect With Us</h1>
            <div className="icons">
              <a href="instagram">
                <InstagramIcon className="icon"
                  style={{
                    fontSize: "4rem",
                    marginRight: "2rem",
                    color: "#012248",
                  }}
                />
              </a>
              <a href="facebook">
                <FacebookRoundedIcon className="icon"
                  style={{
                    fontSize: "4rem",
                    marginRight: "2rem",
                    color: "#012248",
                  }}
                />
              </a>
              <a href="email">
                <EmailIcon className="icon"
                  style={{
                    fontSize: "4rem",
                    marginRight: "2rem",
                    color: "#012248",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="about_logo">
            <img src={img1} alt="" className="aboutus_logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
