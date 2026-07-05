import { useEffect, useState } from "react";
import {
  getActionMovies,
  getHorrorMovies,
  getPopularMovies,
  getSciFiMovies,
  getTopRatedMovies,
} from "../../services/api";
import MovieCard from "../MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    horror: [],
    action: [],
    comedy: [],
    sciFi: [],
  });

  console.log(movies);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const [popular, topRated, horror, action, comedy, sciFi] =
          await Promise.all([
            getPopularMovies(),
            getTopRatedMovies(),
            getHorrorMovies(),
            getActionMovies(),
            getSciFiMovies(),
          ]);
        setMovies({
          popular,
          topRated,
          horror,
          action,
          comedy,
          sciFi,
        });
      } catch (error) {
        console.error("error while fetching movies:", error);
      }
    };
    fetchAllMovies();
  }, []);
  return (
    <div>
      <div>MovieList</div>
      <div>
        <MovieCard title="Popular Movies" movies={movies.popular.slice(0, 8)} />
      </div>
    </div>
  );
};

export default MovieList;
