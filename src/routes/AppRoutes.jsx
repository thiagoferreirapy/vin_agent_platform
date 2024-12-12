import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Favorites from '../pages/Favorites';
// import Property from '../pages/Property';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/property" element={<Property />} /> */}
    </Routes>
  );
};
