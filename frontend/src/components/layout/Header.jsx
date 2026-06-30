import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-black/80 backdrop-blur-md fixed w-full z-50">
      <h1 className="text-3xl font-bold text-red-600">
        Movie<span className="text-white">Hub</span>
      </h1>

      <ul className="hidden md:flex gap-8 text-white">
        <Link to="/" className="hover:text-red-500 cursor-pointer">
          Home
        </Link>
        <Link to="/movies" className="hover:text-red-500 cursor-pointer">
          Movies
        </Link>
        <Link to="#" className="hover:text-red-500 cursor-pointer">
          TV Shows
        </Link>
        <Link to="#" className="hover:text-red-500 cursor-pointer">
          Trending
        </Link>
      </ul>

      <Link
        to="/signin"
        className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default Header;
