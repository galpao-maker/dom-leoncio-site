import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import ReservationPage from './pages/ReservationPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/restaurantes" element={<RestaurantsPage />} />
            <Route path="/cardapios" element={<MenuPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/reservas" element={<ReservationPage />} />
            <Route path="/localizacao" element={<LocationPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
