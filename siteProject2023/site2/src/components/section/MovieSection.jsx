function MovieSection (props){
    return (
        <section id="moviesSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
             <div className="movies__inner container">
                <div className="movies__text">
                    <h3>영화 추천</h3>
                    <p>소개한 곡들을 듣다보면 슬그머니 생각나는 영화</p>
                    <a href="/" className="button-black">보러가기</a>
                </div>
                <div className="movies__item">
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="하이스쿨 뮤지컬" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="느와르물" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="웜바디스" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="테일러스위프트그배경영화" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="할리퀸나오는거" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="" />
                    </div>
                    <div>
                        <img src="../../assets/images/movie/movie.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieSection;