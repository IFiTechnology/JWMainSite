import React, { useState } from "react";
import video from "../../Assets/JWVideo.mp4";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiSpotifyLine } from "react-icons/ri";
import { SiAudiomack } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
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
        {/*social media icons section*/}

        <div className="buttonDiv">
          <div className="social-icons">
            <button className="follow-btn btn" onClick={handleButtonClick}>
              Follow Us
            </button>

            {showIcons && (
              <div className="icons-container">
                <a
                  href="https://web.facebook.com/Justworshipinternational"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="icon" />
                </a>
                <a
                  href="https://instagram.com/justworshipinternational?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram className="icon" />
                </a>
                <a
                  href="https://t.me/justworshipinternational"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane className="icon" />
                </a>
                
              </div>
            )}
          </div>

          <div className="stream-icons">
            <button
              className="stream-btn btn"
              onClick={handleStreamButtonClick}
            >
              Stream
            </button>

            {showStreamIcons && (
              <div className="icons-container">
                <a
                  href="https://open.spotify.com/artist/1qPJZMQy4v1XXtJcrogEiL?si=8_bdsGYYRYWBP4OZZSgvYg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiSpotifyLine className="icon" />
                </a>
                <a
                  href="https://audiomack.com/just-worship-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiAudiomack className="icon" />
                </a>
                <a
                  href="https://music.apple.com/ng/album/yes-you-are-ep/1667963057"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiApplemusic className="icon" />
                </a>

                <a
                  href="https://youtube.com/@JUSTWORSHIPINTERNATIONAL"
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
