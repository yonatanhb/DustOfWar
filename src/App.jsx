import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="font-sans">
      <Layout>
        <Header />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
