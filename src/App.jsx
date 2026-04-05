import React, { useEffect } from "react";
import "./styles/progheads.css";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ProgheadsLanding from "./components/ProgheadsLanding";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Bloglist from "./pages/Bloglist";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProgheadsLanding />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/blog" element={<Bloglist />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
