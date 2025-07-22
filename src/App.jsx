import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Contact from './components/home/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;