import React, { useState } from "react";
import video from "../../Assets/JWVideo.mp4";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiSpotifyLine } from "react-icons/ri";
import { SiAudiomack } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showStreamIcons, setShowStreamIcons] = useState(false);

  const handleButtonClick = () => {
    setShowIcons(!showIcons);
  };

  const handleStreamButtonClick = () => {
    setShowStreamIcons(!showStreamIcons);
  };

  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <h1 className="homeTitle">
            Inspiring intimacy <br /> with GOD through Worship <br /> and Praise
          </h1>
          <p className="smallText">
            Amongst the thousand let your voice be heard.
          </p>
        </div>
        <div className="buttonDiv">
          <div className="social-icons">
            <button className="follow-btn btn" onClick={handleButtonClick}>
              Follow Us
            </button>

            {showIcons && (
              <div className="icons-container">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="icon" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram className="icon" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane className="icon" />
                </a>
                {/* Add more social media icons */}
              </div>
            )}
          </div>

          <div className="stream-icons">
            <button className="stream-btn btn" onClick={handleStreamButtonClick}>
              Stream
            </button>

            {showStreamIcons && (
              <div className="icons-container">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiSpotifyLine className="icon" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiAudiomack className="icon" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiApplemusic className="icon" />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiYoutubemusic className="icon" />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube className="icon" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
