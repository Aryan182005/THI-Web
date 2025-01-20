import './App.css';
import { Route, Routes, Scripts } from 'react-router-dom';
import { useState } from 'react';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className={`${mobileMenuOpen ? 'blur-background' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
