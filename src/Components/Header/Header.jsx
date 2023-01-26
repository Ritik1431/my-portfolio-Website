import "./Header.css";
import React from "react";
import CTA from "./CTA";
import Ritik from "../../Assets/Ritik.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ritik</h1>
        <h5 className="text-light">Data Scientist</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={Ritik} alt="" className="image" />
        </div>
        <a href="#contact" className="scrool_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
