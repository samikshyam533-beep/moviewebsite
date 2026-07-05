import { useEffect, useState } from "react";
import {
  getActionMovies,
  getHorrorMovies,
  getPopularMovies,
  getSciFiMovies,
  getTopRatedMovies,
} from "../services/api";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    horror: [],
    action: [],
    sciFi: [],
  });

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const [popular, topRated, horror, action, sciFi] = await Promise.all([
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
          sciFi,
        });
      } catch (error) {
        console.error("Error while fetching movies:", error);
      }
    };

    fetchAllMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <h1 className="mb-10 text-center text-4xl font-bold text-white">
          🎬 Movie Collection
        </h1>

        <div className="space-y-12">
          <MovieCard
            title="Popular Movies"
            movies={movies.popular.slice(0, 8)}
          />
          <MovieCard title="topRated" movies={movies.topRated.slice(0, 8)} />
          <MovieCard title="Horror" movies={movies.horror.slice(0, 8)} />
          <MovieCard title="Action" movies={movies.action.slice(0, 8)} />
          <MovieCard title="SciFI" movies={movies.sciFi.slice(0, 8)} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
