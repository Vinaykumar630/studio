import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomizationProvider } from './components/context/CustomizationContext';
import LandingPage from './pages/LandingPage';
import CustomizationPage from './pages/CustomizationPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <CustomizationProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customize" element={<CustomizationPage />} />
      </Routes>
      <Footer />
    </Router>
  </CustomizationProvider>
);

export default App;
