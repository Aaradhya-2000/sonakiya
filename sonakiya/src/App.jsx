import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './layout';
import Home from './pages/home';
import Head from './pages/caurosel';
import Fire from './pages/fire';
import Fall from './pages/fall';
import Singage from './pages/singage';
import V from './pages/Personal';
import logo from "../src/images/logo.jpeg";
import Office from "../src/pages/office";
import 'bootstrap/dist/css/bootstrap.min.css';
import './image.css';
import Marine from "../src/pages/marine";
import Other from './pages/other';
import Road from './pages1/road';
import Electrical from './pages1/electrical';
import Respiratory from './pages1/respiratory';
import Industry from './pages1/industrial';
import Solar from './pages1/solar';
import AboutUs from './pages/aboutus';
import TeamSection from './pages/team';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 4000);

    const dotInterval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);

    return () => {
      clearTimeout(loaderTimeout);
      clearInterval(dotInterval);
    };
  }, []);

  if (showLoader) {
    return (
      <div className="loader-container">
        <img src={logo} alt="Logo" className="loader-logo" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='team' element={<TeamSection />} />
          <Route path='head' element={<Head />} />
          <Route path='/fire' element={<Fire />} />
          <Route path='fall' element={<Fall />} />
          <Route path='signage' element={<Singage />} />
          <Route path='personal' element={<V />} />
          <Route path='office' element={<Office />} />
          <Route path='marine' element={<Marine />} />
          <Route path='other' element={<Other />}>
            <Route index element={<Road />} />
            <Route path='road' element={<Road />} />
            <Route path='electric' element={<Electrical />} />
            <Route path='respiratory' element={<Respiratory />} />
            <Route path='industry' element={<Industry />} />
            <Route path='solar' element={<Solar />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
