import {Swiper, SwiperSlide} from "swiper/react";
import movies from "../../movies";
import 'swiper/css';
import {Navigation} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./movieList.css"

function MovieList(props) {

    return (
        <>
            <Swiper spaceBetween={25} slidesPerView={6}
                    navigation={true}
                // navigation={{"nextEl": '.swiper-button-next',"prevEl": '.swiper-button-prev'}}
                    modules={[Navigation]}
            >
                <span slot="container-start">
                    <div className="movie-title">{props.movieTitle}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </span>
                {movies.slice(0, 10).map(movie => (
                    <SwiperSlide key={movie.id}>
                        <div className="slider-movie-item">
                            <img className="slider-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
MovieList.defaultProps = {
    movieTitle: 'Movie'
};

export default MovieList;