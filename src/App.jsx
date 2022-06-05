import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Experience />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
