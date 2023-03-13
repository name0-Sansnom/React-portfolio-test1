import React from "react";
import "./header.css";
import "../../asset/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href="cv.pdf" download className="btn">
        Donwload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};
export default CTA;
