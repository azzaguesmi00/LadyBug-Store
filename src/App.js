import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import GlobalStyles from "./Styles/GlobalStyles";
import FloatingDots from './components/FloatingDots';
import About from './pages/About';
import Services from './pages/Services';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import{ CartProvider } from "./context/cartcontext";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <FloatingDots />
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
