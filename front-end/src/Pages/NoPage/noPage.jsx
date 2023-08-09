import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";

const noPage = () => {
  return (
    <div className="no-page">
      <Navbar />
      <div className="no-page-content">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
      <Footer />
    </div>
  );
};

export default noPage;
