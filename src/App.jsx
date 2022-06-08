import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
