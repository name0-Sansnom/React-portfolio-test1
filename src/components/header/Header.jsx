import React from "react";
import "../../index.css";
import black from "../../asset/black.png";
import CTA from "./CTA";
import "./header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello It's me</h5>
        <h1>Nameless</h1>

        <h5 className="tex-light">FullStack Dev. (almost)</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={black} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          scroll down --&gt;
        </a>
      </div>
    </header>
  );
};
export default Header;
