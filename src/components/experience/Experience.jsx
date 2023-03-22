import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Acquired Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__fontennd">
          <h3>Frontend Background</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
             <div>
             <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Boostrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Background</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Node Js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>MongoDb</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Php</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
