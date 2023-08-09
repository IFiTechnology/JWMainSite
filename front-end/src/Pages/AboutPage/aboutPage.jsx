import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import hero from "../../Assets/aboutUsHero.jpg";
import About from "../../Components/About/About";
import PstChidiPic from "../../Assets/pstChidiPic1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./aboutPage.css";

const aboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <div className="abouthero">
          <img src={hero} alt="About Hero" />
          {/* <div className="aboutHero-description">
            <h1>Just Worship International Music Outreach</h1>
            
          </div> 
          */}
        </div>
        <section className="about-section">
          <h2 className="sectionTitleW">Who We Are</h2>
          <About />
        </section>
        <section className="section founder-profile-section">
          <div className="section container">
            <h2 className="sectionTitleW">Meet Our President</h2>
            <div className="pstcard">
              <div className="pstDetail">
                <div className="pstChidiDetail">
                  <p>
                    Just Worship Internation Music Outreach was founded by{" "}
                    <strong>Pastor Chidi David Ani</strong>, a visionary leader.
                  </p>
                  <strong className="pstChidi">CHIDI DAVID ANI</strong>
                  <p>
                    Chidi David Ani is a Singer-Songwriter and Presiding Pastor
                    & Leader of Just Worship Music outreach International, He is
                    an anointed Minister of God with a call to draw men and
                    women into a place of intimacy with God through Worship and
                    Praise. <br />
                    Chidi David Ani is happily married to <strong>Rev Glorious Ani</strong> and
                    they are both passionately pursing there God’s given
                    assignment
                  </p>
                </div>
                <div class="social-media">
                  <a href="#">
                    {" "}
                    <FaFacebookF className="icon" />{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <AiFillInstagram className="icon" />{" "}
                  </a>
                </div>
              </div>
              <img src={PstChidiPic} alt="Pastor Chidi's Picture" />
            </div>
          </div>
        </section>
        <section className="section key-scripture-section">
          <div className="section container">
            <h2 className="sectionTitle">Key Scripture</h2>
            <p>
              One of our key scriptures is{" "}
              <em>
                "John 12:32: And I, if I be lifted up from the earth, will draw
                all men unto me..."
              </em>
            </p>
          </div>
        </section>
        {/* <section className="section mission-vision-section">
          <div className="section container">
            <h2 className="sectionTitleW">Mission & Vision</h2>
            <p>
              Igniting the fire of revival and raising a generation of Genuine
              Worshippers.
            </p>
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  );
};

export default aboutPage;
