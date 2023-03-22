import React from 'react';
import './nav.css';
import { GoHome } from "react-icons/go";
import { MdPersonOutline} from "react-icons/md";
import { HiOutlineChartPie } from "react-icons/hi";
import { MdOutlineDisplaySettings} from "react-icons/md";
import { AiOutlineContacts} from "react-icons/ai";
import { useState } from "react";


const Nav = () => {
  

  const navLinks = [
    {href: "#", icon: <GoHome /> },
    {href: "#about", icon: <MdPersonOutline />},
    {href: "#experience", icon: <HiOutlineChartPie /> },
    {href: "#service", icon: <MdOutlineDisplaySettings />},
    {href: "#contact", icon: <AiOutlineContacts />}
  ];

const
  [activeNav, setActiveNav] = useState(navLinks[0].href);
return (
<nav>

 {navLinks.map((link) => (

  <a href={link.href} 
  onClick = {() => setActiveNav(link.href)}

 className={activeNav === link.href ? 'active' : ''}
  key={link.href}>

  {link.icon}

  </a>

  ))}

</nav>
)
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
}

export default Nav;