import React from 'react'
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Main from './components/layout/Main.jsx';
import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import ImageSection from './components/section/ImageSection.jsx';
import CardSection from './components/section/CardSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';

function App() {
  return (
    <>
      <Header attr={["header__wrap", "Neo5", "bg-blue"]}/>
      <Main>
        <SliderSection attr={["slider__wrap", "section", "Neo5"]}/>
        <IntroSection attr={["intro__wrap", "section", "Neo5", "bg-blue"]}/>
        <ImageSection attr={["images__wrap", "section", "Neo5", "center"]}/>
        <CardSection attr={["cards__wrap", "section", "Neo5", "center"]}/>
        <YoutubeSection attr={["youtube__wrap", "section", "Neo5"]} />
        <UnsplashSection attr={["unsplash__wrap", "section", "Neo5"]}/>
        <MovieSection attr={["movies__wrap", "section", "Neo5"]}/>
      </Main>
      <Footer attr={["header__wrap", "Neo5"]}/>
    </>
  );

}

export default App;