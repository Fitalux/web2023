import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main.jsx';
import Image from './components/pages/Image.jsx';
import Card from './components/pages/Card.jsx';
import Youtube from './components/pages/Youtube.jsx';
import Unsplash from './components/pages/Unsplash.jsx';
import Movie from './components/pages/Movie.jsx';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Main />} />;
      <Route path="/image" element={<Image />} />;
      <Route path="/card" element={<Card />} />;
      <Route path="/youtube" element={<Youtube />} />;
      <Route path="/unsplash" element={<Unsplash />} />;
      <Route path="/movie" element={<Movie />} />;
   </Routes>
   </BrowserRouter>
  );

}

export default App;