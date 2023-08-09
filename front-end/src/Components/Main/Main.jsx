import React from "react";
import Wgathering from "../../Assets/WGathering.jpg";
import JWUnec from "../../Assets/JWUnec.jpg";
import JWAbuja from "../../Assets/JWAbuja.jpg";
import LiveRecording from "../../Assets/LiveRecording.jpg";
import PstChidi from "../../Assets/PstChidi1.jpg";
import RevGlorious from "../../Assets/RevGlorious.jpg";
import PstEbuka from "../../Assets/PstEbuka.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      {/*====================== Event Section ==============================*/}
      <section className="event">
        <h1 className="sectionTitle">Upcoming Events</h1>
        <div class="events">
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={Wgathering} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Worshipers Gathering</h2>
              <p class="eventCard-body">
                Worshipper gathering is our weekly worship school, every Sunday
                by 4pm where we equip, train and raise, genuine worshippers of
                Jesus Christ.
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={JWUnec} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Just Worship Unec</h2>
              <p class="eventCard-body">
                The Lord is calling us back to campus outreaches as the ministry
                expands to different cities and nations. We are starting the
                campus tour from the University of Nigeria Enugu Campus (UNEC).
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={JWAbuja} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Just Worship Abuja</h2>
              <p class="eventCard-body">
                As the Vision keeps growing Just Worship Team is delighted hold
                her first evening of worship in the city of Abuja.
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
          <div class="eventCard">
            <div class="eventCard-image">
              <img src={LiveRecording} />
            </div>
            <div class="eventCard-text">
              <h2 class="eventCard-title">Worshipers Gathering</h2>
              <p class="eventCard-body">
                Worshipper gathering is our weekly worship school, every Sunday
                by 4pm where we equip, train and raise, genuine worshippers of
                Jesus Christ.
              </p>
            </div>
            <div class="eventCard-date">Every Mon 5PM</div>
          </div>
        </div>
      </section>
      {/*====================== Leadership Section =========================*/}
      <section className="leadership">
        <h1 className="leadersTitle">Our Leadership</h1>

        <div className="leaderCard">
          <div class="profile-card">
            <img class="profile-image" src={PstChidi} alt="Profile Image" />
            <h4 class="profile-name">Pst Chidi Ani</h4>
            <p class="profile-description">Founder/President</p>
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

          <div class="profile-card">
            <img class="profile-image" src={RevGlorious} alt="Profile Image" />
            <h4 class="profile-name">Rev Glorious Ani</h4>
            <p class="profile-description">Worship Leader</p>
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

          {/* <div class="profile-card">
            <img class="profile-image" src={PstEbuka} alt="Profile Image" />
            <h4 class="profile-name">Pst Ebuka</h4>
            <p class="profile-description">Pastor/Worshipper</p>
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
          </div> */}
        </div>
      </section>
      {/*======================= Contact Us Section ========================*/}
      <section className="contactUs">
      <h1 className="sectionTitle">Keep In Touch </h1>
        <div class="contact-card">
        <h2>Send in your Testimonies</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Testimonies"></textarea>
          <button class="submit-button">Send</button>
          {/* <div class="social-media">
            <a href="#">
              {" "}
              <ImWhatsapp className="icon" />{" "}
            </a>
            <a href="#">
              <RiMessengerLine className="icon" />{" "}
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Main;
