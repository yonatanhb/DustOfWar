import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import TeamAndContact from "./components/TeamAndContact";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <TeamAndContact />
      <Footer />
    </Layout>
  );
}

export default App;
