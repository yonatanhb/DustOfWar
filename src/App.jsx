import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="font-sans">
      <Layout>
        <Header />
        <Hero />
        <About />
        <TeamSection />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
