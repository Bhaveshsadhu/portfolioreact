import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import { Contactus } from "./Components/Contactus";
import { FooterSection } from "./Components/FooterSection";
import { Banner } from "./Components/Banner";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const handleOnScroll = () => {
    setScrollYPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <>
      <input type="checkbox" className="d-none" id="dark-mode" />
      <div className="wrapper">
        <Navbar />
        <div className="container">
          <Hero />
          <Banner />
          <Skills />
          <Projects />
          <About />
          <Contactus />
        </div>
        <FooterSection scrollYPosition={scrollYPosition} />
      </div>
    </>
  );
}

export default App;
