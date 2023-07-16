import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
