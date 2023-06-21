function SliderSection (props){
    return (
        <section id="sliderSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
        <div className="slider__inner">
            <h2 className="blind">이미지 슬라이드</h2>
            <div className="slider__img">
                <div className="slider  s1 container">
                    <div className="text">
                        <h3>MUSIC<br />Recommend</h3>
                        <p>요즘 들을 거 없나? 싶을 때 취향을 강타할 MUSIC</p>
                        <a href="/" className="more button-black">더 보 기</a>
                    </div>
                    <div className="img" aria-label="hidden">
                        <img src="../../assets/images/slider/sliderIcon03.png" alt="별" />
                        <img src="../../assets/images/slider/sliderIcon08.png" alt="Like" />
                        <img src="../../assets/images/slider/sliderIcon11.png" alt="슬레이트" />
                    </div>
                    <div className="circle" aria-label="hidden">
                        <span className="circle c1"></span>
                        <span className="circle c2"></span>
                        <span className="circle c3"></span>
                        <span className="circle c4"></span>
                        <span className="circle c5"></span>
                    </div>
                </div>
               {/* <div className="slider  s2  container">
                    <h3>MUSIC<br />Recommend</h3>
                    <p>요즘 들을 거 없나? 싶을 때 취향을 강타할 MUSIC</p>
                    <a href="/">더 보 기</a>
                </div>
                <div className="slider  s3  container">
                    <h3>MUSIC<br />Recommend</h3>
                    <p>요즘 들을 거 없나? 싶을 때 취향을 강타할 MUSIC</p>
                    <a href="/">더 보 기</a>
                </div> */}
            </div>
            <div className="slider__btn">
                <a href="/" className="left"><span className="ir">이전</span></a>
                <a href="/" className="right"><span className="ir">다음</span></a>
            </div>
            <div className="slider__dot">
                <a href="/" className="dot active "><span className="ir">이미지 1</span></a>
                <a href="/" className="dot"><span className="ir">이미지 2</span></a>
                <a href="/" className="dot"><span className="ir">이미지 3</span></a>
            </div>
        </div>
        </section>
    );
}

export default SliderSection;