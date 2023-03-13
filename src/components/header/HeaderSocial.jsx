import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkdin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank"></a>
      <a href="https://twitter.com" target="_blank"></a>
      <a href="https://facebook.com" target="_blank"></a>
      <p> </p>
    </div>
  );
};
export default HeaderSocial;
