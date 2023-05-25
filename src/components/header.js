import React from "react";

import './header.css';
function Header(){
   return(
    <div className="header">
        <div className="left">
           <a href="features navbar"><p className="features">Features</p></a>
            <a href="about navbar"><p className="about">About</p></a>
        </div>
        <div className="right">
            <a href="app navbar"><p className="app">App launching soon</p></a>
            <button className="btn">Get Early Access</button>
        </div>
    </div>
   )
}
export default Header;