import './App.css';
import { Route, Routes, Scripts } from 'react-router-dom';
import { useState } from 'react';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './page/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    <ScrollToTop />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className={`${mobileMenuOpen ? 'blur-background' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
