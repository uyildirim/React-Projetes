import Header from "../../components/Header"
import Slider from "../../components/Slider"
import MovieList from "../../components/MovieList"
import MovieListName from "../../components/MovieListName"
import MovieListHorizontal from "../../components/MovieListHorizontal"
import "./home.css"

function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <div className="movie-container">
        <div className="popular-movie">
          <MovieList movieTitle="Popular Movie"/>
          <MovieListHorizontal/>
          <MovieListName/>
        </div>
      </div>
    </div>
  );
}

export default Home;