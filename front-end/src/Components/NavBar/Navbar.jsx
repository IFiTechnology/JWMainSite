import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import JWLogo from "../../Assets/JWLogoW.png";
import JWLogoScroll from "../../Assets/JWLogo.png";
import "./NavBar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 100; // Adjust the threshold value as needed

      if (scrollTop > threshold) {
        setIsNavbarOpaque(true);
      } else {
        setIsNavbarOpaque(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`navBarSection ${isNavbarOpaque ? "opaque" : ""}`}>
      <header className={`header flex ${isNavbarOpaque ? "opaque" : ""}`}>
      <div className="logoDiv">
    <Link to="/home" className="logo">
      <img src={isNavbarOpaque ? JWLogo : JWLogoScroll } alt="Logo" />
    </Link>
  </div>

        {/* <===================== Function that retuns false for the value of isMobile once any of the navLinks is clicked ========================>  */}
        <div
          className={isMobile ? "nav-bar-mobile" : "navBar"}
          onClick={() => setIsMobile(false)}
        >
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/home" className={`navLink ${isNavbarOpaque ? "opaque" : ""}`}>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className={`navLink ${isNavbarOpaque ? "opaque" : ""}`}>
                About
              </Link>
            </li>
            <li
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
              className="navItem dropdown"
            >
              <Link to="/event" className={`navLink ${isNavbarOpaque ? "opaque" : ""}`}>
                Event
              </Link>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/">Campus Tour</Link>
                  <Link to="/">Worship Meeting</Link>
                  <Link to="/">Retreat</Link>
                  <Link to="/">Live Recording</Link>
                </div>
              )}
            </li>
            <li className="navItem">
              <Link to="/blog" className={`navLink ${isNavbarOpaque ? "opaque" : ""}`}>
                Blog
              </Link>
            </li>
            <li className="navItem">
              <Link to="/gallery" className={`navLink ${isNavbarOpaque ? "opaque" : ""}`}>
                Gallery
              </Link>
            </li>

            <button className="btn">
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=K7QKASNHPRRCN"
                target="_blank"
                rel="noreferrer"
              >
                PARTNER
              </a>
            </button>
          </ul>
        </div>
        {/* <===================Toggle icons====================. */}
        <div
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <AiFillCloseCircle className="icon" />
          ) : (
            <VscThreeBars className="icon" />
          )}
        </div>
      </header>
    </section>
  );
};

export default Navbar;
