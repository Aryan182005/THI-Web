import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
