import React from 'react'
import HeaderSocial from '../header/HeaderSocial';

// const Footer = () => {
//   return (
//     <footer>
//         <a href="#"className='footer__logo'>Alfa-Toute</a>
//         <ul>
//             <li></li>
//         </ul>
//     </footer>
//   )
// }

// export default Footer

import Nav from '../nav/Nav';
import './footer.css'

function Footer() {
  return (
    <footer>
    
    {/* adding footer__logo */}
     <a href="#"className='footer__logo'>Alfa-Toute</a>

     {/* adding navbar component to be displayed in the footer with a different style */}
     {/* there is a css class i created in the nav component condition named 'footer-nav' i'll use thatt to style the navbar for my footer */}
      <Nav isFooter={true} />

     {/* adding Headersocial(icons) component to be displayed in the footer with a different style */}
      <HeaderSocial footerSocial={true} />

      {/* adding copyright to footer */}
      <div className="footer__copyright">
        <small>&copy; Alfa-Toute Portfolio. Tout droits reserve</small>
      </div>

    </footer>
  )
}

export default Footer;
