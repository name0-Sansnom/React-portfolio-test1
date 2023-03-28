// import React from 'react';
// import './nav.css';
// import { GoHome } from "react-icons/go";
// import { MdPersonOutline} from "react-icons/md";
// import { HiOutlineChartPie } from "react-icons/hi";
// import { MdOutlineDisplaySettings} from "react-icons/md";
// import { AiOutlineContacts} from "react-icons/ai";
// import { useState } from "react";

// const Nav = () => {

//   const navLinks = [
//     {href: "#", icon: <GoHome /> },
//     {href: "#about", icon: <MdPersonOutline />},
//     {href: "#experience", icon: <HiOutlineChartPie /> },
//     {href: "#service", icon: <MdOutlineDisplaySettings />},
//     {href: "#contact", icon: <AiOutlineContacts />}
//   ];

// const
//   [activeNav, setActiveNav] = useState(navLinks[0].href);
// return (
// <nav className='containe'>

//  {navLinks.map((link) => (

//   <a href={link.href}
//   onClick = {() => setActiveNav(link.href)}

//  className={activeNav === link.href ? 'active' : ''}
//   key={link.href}>

//   {link.icon}

//   </a>

//   ))}

// </nav>
// )
// const [activeNav, setActiveNav] = useState("#")
//   return (
//     <nav>
//       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
//       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdPersonOutline /></a>
//       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineChartPie /></a>
//       <a href="#Services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineDisplaySettings /></a>
//       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
//     </nav>
//   )
// }

// export default Nav;

import React from "react";
import "./nav.css";
import { GoHome } from "react-icons/go";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineChartPie } from "react-icons/hi";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { useState } from "react";

const Nav = ({ isFooter }) => {
  const navLinks = [
    { href: "#", text: isFooter ? "Home" : "Dashboard", icon: <GoHome /> },
    {
      href: "#about",
      text: isFooter ? "About Us" : "About",
      icon: <MdPersonOutline />
    },
    {
      href: "#experience",
      text: isFooter ? "Experience" : "Stats",
      icon: <HiOutlineChartPie />
    },
    {
      href: "#services",
      text: isFooter ? "Settings" : "Services",
      icon: <MdOutlineDisplaySettings />
    },
    {
      href: "#contact",
      text: isFooter ? "Contact Us" : "Contact Us",
      icon: <AiOutlineContacts />
    }
  ];

  const [activeNav, setActiveNav] = useState(navLinks[0].href);

  return (
    <nav className={isFooter ? "footer-nav" : "header-nav"}>
      {navLinks.map(link =>
        !isFooter || link.text !== "Dashboard" ? (
          <a
            href={link.href}
            onClick={() => setActiveNav(link.href)}
            className={activeNav === link.href ? "active" : ""}
            key={link.href}
          >
            {isFooter ? link.text : link.icon}
            {!isFooter && <span>{link.text}</span>}
          </a>
        ) : null
      )}
    </nav>
  );
};

export default Nav;
