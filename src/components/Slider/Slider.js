import "./slider.css"
import movies from "../../movies";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


import {FaStar} from "react-icons/fa";
import {MdMovieFilter} from "react-icons/md";
import {EffectFade, Pagination} from "swiper";

Slider.defaultProps = {
  imageBackround: "https://image.tmdb.org/t/p/original" + movies[0].backdrop_path,
}

function Slider(props) {

  return (
    <Swiper
      modules={[EffectFade, Pagination]} effect="fade"
      pagination={{clickable: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movies.slice(0, 5).map(movie => (
        <SwiperSlide key={movie.id}>
          <div className="slider-item"
               style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
            <div className="slider-bgcolor">
              <div className="slider-container">
                <div className="slider-info">
                  <div className="slider-title">{movie.title ?? movie.name}</div>
                  <div className="slider-review">
                    {movie.first_air_date?.slice(0,4) ?? movie.release_date?.slice(0,4)}
                    <MdMovieFilter/> Crime, Drama <FaStar className="text-yellow-400"/> {movie.vote_average}
                  </div>
                  <div className="slider-overview">{movie.overview}</div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}


    </Swiper>

  );
}

export default Slider;