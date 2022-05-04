import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import movies from "../../movies";
import "./movieListName.css"
import {FaStar} from "react-icons/fa";

function MovieListName(props) {
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
              <h4 className="slider-movie-name">{movie.title}</h4>
              <div className="slider-movie-star-release">
                <span><FaStar className="slider-movie-star"/> 8,2</span>
                <span className="slider-movie-release">{movie.release_date?.slice(0,4) || movie.first_air_date?.slice(0,4)}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}

MovieListName.defaultProps = {
  movieTitle: 'Movie'
};

export default MovieListName;