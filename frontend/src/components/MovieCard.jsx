const MovieCard = ({ title, movies }) => {
  return (
    <div className="px-6 py-8">
      {/* Section Title */}
      <h1 className="mb-6 text-3xl font-bold text-white">{title}</h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Poster */}
            <div className="overflow-hidden">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                alt={movie.title}
                className="h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Movie Info */}
            <div className="p-4">
              <h2 className="truncate text-lg font-semibold text-white">
                {movie.title}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                {movie.release_date || "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
