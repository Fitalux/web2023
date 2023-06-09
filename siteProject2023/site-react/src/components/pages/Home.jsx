import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection';
import IntroSection from '../section/IntroSection';
import ImageSection from '../section/ImageSection';
import CardSection from '../section/CardSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={["slider__wrap", "section", "Neo5"]}/>
        <IntroSection attr={["intro__wrap", "section", "Neo5", "bg-blue"]}/>
        <ImageSection attr={["images__wrap", "section", "Neo5", "center"]}/>
        <CardSection attr={["cards__wrap", "section", "Neo5", "center"]}/>
        <YoutubeSection attr={["youtube__wrap", "section", "Neo5"]} />
        <UnsplashSection attr={["unsplash__wrap", "section", "Neo5"]}/>
        <MovieSection attr={["movies__wrap", "section", "Neo5"]}/>
      </Main>
    </>
  );
}

export default Home;