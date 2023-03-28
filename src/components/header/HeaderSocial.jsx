import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const HeaderSocial = ({ footerSocial }) => {

  const socialIcons = [
    {href: "https://linkdin.com", icons: <BsLinkedin /> },
    {href: "https://github.com", icons:  <BsGithub />} ,
    {href: "https://twitter.com", icons: <BsTwitter /> }, 
    {href: "https://youtube.com", icons: <BsYoutube /> } 
  ];

  return (
    <div className={footerSocial ? "footer-socials" : "header__socials"}>

    { socialIcons.map((icon) => (
      <a href={icon.href} target="_blank" rel="noopener noreferrer"> {icon.icons}</a>
    ) )}
    </div>
  );
};
export default HeaderSocial;
