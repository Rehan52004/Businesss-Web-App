import React from "react";
import { Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.css";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
