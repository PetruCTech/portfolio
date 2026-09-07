import React from "react";

import { images, links } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

// Footer
const Footer = () => {
  return (
    <>
      <h2 className="head-text">Let&apos;s build something intelligent together.</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href={`mailto:${links.contact_links.email}`} className="p-text">
            {links.contact_links.email}
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="LinkedIn" />
          <a
            href={links.contact_links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            linkedin.com/in/petru-c
          </a>
        </div>
      </div>

      <div className="app__footer-thankyou app__flex">
        <p className="bold-text">
          Open to senior AI/ML and full-stack roles, SaaS platforms, and
          intelligent automation projects.
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
