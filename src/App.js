import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from './components/hero/HeroSection';
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


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
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
