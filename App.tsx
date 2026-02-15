
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AutoInsurance from './pages/AutoInsurance';
import KaskoInsurance from './pages/KaskoInsurance';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto-osiguranje" element={<AutoInsurance />} />
          <Route path="/kasko" element={<KaskoInsurance />} />
          <Route path="/kako-funkcionira" element={<HowItWorks />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
