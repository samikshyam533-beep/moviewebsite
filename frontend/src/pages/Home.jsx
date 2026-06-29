import React from "react";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500",
  },
  {
    id: 3,
    title: "The Batman",
    image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500",
  },
  {
    id: 4,
    title: "John Wick",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=500",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-black/80 backdrop-blur-md fixed w-full z-50">
        <h1 className="text-3xl font-bold text-red-600">
          Movie<span className="text-white">Hub</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Movies</li>
          <li className="hover:text-red-500 cursor-pointer">TV Shows</li>
          <li className="hover:text-red-500 cursor-pointer">Trending</li>
        </ul>

        <button className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700">
          Sign In
        </button>
      </nav>

      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
        }}
      >
        <div className="bg-black/70 w-full h-full flex items-center">
          <div className="max-w-3xl px-8 lg:px-20">
            <h1 className="text-6xl font-extrabold leading-tight">
              Unlimited Movies,
              <br />
              TV Shows & More
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Watch the latest blockbuster movies anytime, anywhere.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700">
                ▶ Watch Now
              </button>

              <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Browse Movies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Movies</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>

                <div className="flex justify-between mt-4">
                  <span className="text-yellow-400">⭐ 8.9</span>

                  <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-950 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Browse by Category
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            "Action",
            "Comedy",
            "Drama",
            "Sci-Fi",
            "Horror",
            "Adventure",
            "Animation",
            "Romance",
          ].map((genre) => (
            <button
              key={genre}
              className="bg-gray-800 px-6 py-3 rounded-full hover:bg-red-600 transition"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">
          Start Watching Your Favorite Movies Today
        </h2>

        <p className="text-gray-400 mt-4">
          Join thousands of movie lovers around the world.
        </p>

        <button className="mt-8 bg-red-600 px-10 py-4 rounded-lg text-lg hover:bg-red-700">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © {new Date().getFullYear()} MovieHub. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
