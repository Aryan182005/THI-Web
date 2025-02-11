import './App.css';
import { Route, Routes,} from 'react-router-dom';
import { useState, } from 'react';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './page/About';
import ScrollToTop from './components/ScrollToTop';
import ServicePage from './page/ServicePage';
import CompanyPage from './page/CompanyPage';
import ContactPage from './page/ContactPage';
import usePreventInspect from './components/usePreventInspect';

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
