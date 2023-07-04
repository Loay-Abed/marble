import React from "react";
import "../componets/styles/About.css";
import AboutImg from "../componets/Imags/aboutImg.jpeg";

export default function About() {
  return (
    <div className="AboutContainar" id="OURVISION">
      <div className="AboutParg">
        <h1>OUR VISION</h1>
        <div className="pargraph">
          <span>
            By maintaining our core values of service, quality, and innovation
            we have developed into a leading regional supplier of handmade
            appetizers to the hospitality industry. We will continue to stay
            true to those values as we develop into a national and international
            supplier of gourmet foods to professional chefs.
          </span>
        </div>
      </div>
      <div className="AboutImg">
        <img src={AboutImg} />
      </div>
    </div>
  );
}
