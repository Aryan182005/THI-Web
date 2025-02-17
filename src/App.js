import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import ServicePage from "./page/ServicePage";
import CompanyPage from "./page/CompanyPage";
import ContactPage from "./page/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import usePreventInspect from "./components/usePreventInspect";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  usePreventInspect();

  return (
    <>
      <div>
        <ScrollToTop />
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <div className={`${mobileMenuOpen ? 'blur-background' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
