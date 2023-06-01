function YoutubeSection (props){
    return (
        <section id="youtubeSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>유튜브 추천</h3>
                    <p>재즈 맛집 추천해드립니다.</p>
                    <a href="/" className="button-blue">보러가기</a>
                </div>
                <div className="youtube__item">
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image01" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image02" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image03" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image04" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image05" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image06" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image07" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image08" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image09" />
                    </div>
                    <div>
                        <img src="../../assets/images/youtube/youtube.jpg" alt="image10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;