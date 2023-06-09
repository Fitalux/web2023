import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Card from './components/pages/Card';
import Home from './components/pages/Home';
import Image from './components/pages/Image';
import Movie from './components/pages/Movie';
import Youtube from './components/pages/Youtube';
import Unsplash from './components/pages/Unsplash';
import Footer from './components/layout/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header attr={["header__wrap", "Neo5", "bg-blue"]}/>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/image" element={<Image />} />;
        <Route path="/card" element={<Card />} />;
        <Route path="/movie" element={<Movie />} />;
        <Route path="/youtube" element={<Youtube />} />;
        <Route path="/unsplash" element={<Unsplash />} />;
      </Routes>
      <Footer attr={["footer__wrap", "Neo5", "bg-blue"]}/>
    </BrowserRouter>
   );
}

export default App;