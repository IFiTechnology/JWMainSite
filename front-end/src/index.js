import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutPage from "./Pages/AboutPage/aboutPage";
import EventPage from "./Pages/EventPage/eventPage";
import BlogPage from "./Pages/BlogPage/blogPage";
import GalleryPage from "./Pages/GalleryPage/galleryPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy/privacyPolicy";
import NoPage from "./Pages/NoPage/noPage";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/noPage" element={<NoPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
