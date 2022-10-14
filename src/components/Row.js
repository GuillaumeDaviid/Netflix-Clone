import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Row.scss";

function Row({title, fetchUrl, isPoster}) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return(
    <div className="row">
    <h2 className="row_title">{title}</h2>
    <div className="row__images">
    {movies.map((movie) => <div key={movie.id}>
    <Link to={`/video/${movie?.id}`}>
    {isPoster ? (
    <img data-testid="row-img" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="row__image" alt={movie?.title || movie?.original_title || movie?.name}/>
    )  : (
      <img data-testid="row-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="row__image" alt={movie?.title || movie?.original_title || movie?.name}/>
      )}</Link>
      </div>
    )}
    
    </div>


    </div>
  )
};

export default Row
