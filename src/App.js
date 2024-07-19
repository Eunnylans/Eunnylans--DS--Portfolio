import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from './components/hero/HeroSection';
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTopIcon from "./components/ScrollToTopIcon/ScrollToTopIcon";


function App() {
  return (
    <main className="main">
      <Header />
      <HeroSection />
      <Home />
      <Portfolio />
      <Skills />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopIcon />
    </main>
  );
}

export default App;
