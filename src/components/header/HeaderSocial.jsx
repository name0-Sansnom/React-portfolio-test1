import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkdin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com" target="_blank">
        <BsTwitter/>
      </a>
      <a href="https://youtube.com" target="_blank">
        <BsYoutube />
      </a>
    </div>
  );
};
export default HeaderSocial;
