import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail.jsx';
import { HelmetProvider } from 'react-helmet-async'; // Importez HelmetProvider


const basename = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';
function App() {
  return (
    <BrowserRouter basename={basename}>
      <HelmetProvider> {/* Englobez votre application avec HelmetProvider */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </HelmetProvider> {/* Englobez votre application avec HelmetProvider */}
    </BrowserRouter>
  );
}

export default App;

