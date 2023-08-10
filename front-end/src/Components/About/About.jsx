import React from "react";
import aboutF from "../../Assets/about.jpg";
// import aboutB from "../../Assets/aboutB.jpg";

import "./About.css";

const About = () => {
  return (
    <section className="about container section">
      <div className="card">
        <div className="imageDiv"><img src={aboutF} class="card__image" alt="brown couch" /></div>
        <div className="card__content">
          <h3>About Us</h3>
          <p>
            Just worship is an annual worship and praise outreach, organized by
            a team of worship leaders in and outside Nigeria with the sole
            intent of inspiring intimacy with God through worship and praise.
          </p>

          <h3 className="long">Our Mission</h3>
          <p>
            Our mission is to inspire intimacy with GOD through Worship and
            Praise and also reaching out to the unreached.
          </p>
          <div className="aboutBtn">
            <button className="btn">Read More..</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
