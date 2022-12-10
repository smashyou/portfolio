import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const App = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <Header setActiveNav={setActiveNav} />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <About setActiveNav={setActiveNav} />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact setActiveNav={setActiveNav} />
      <Footer setActiveNav={setActiveNav} />
    </>
  );
};

export default App;
