// import React from 'react'
import logo from "../image/logo.png";
import { Search } from "lucide-react";

interface prop {
  movieInput: string;
  setMovieInput: (name: string) => void;
  fetchMovie: (movie: string) => void;
  handleclick: (type: string) => void;
  type: string;
}
const Navbar = ({
  movieInput,
  setMovieInput,
  fetchMovie,
  handleclick,
  type,
}: prop) => {
  return (
    <>
      <div className="bg-card h-auto w-full">
        <div className="logo flex flex-row w-full p-5 border-border border-2">
          <img src={logo} alt="logo" className="h-10" />
          <p className="text-text text-[24px] font-extrabold m-2">CineSearch</p>
        </div>
        <div className="m-5 flex flex-row">
          <input
            type="text"
            placeholder="Search movie"
            className="bg-surface text-text border-border border-2 focus:border-accent w-[60%] p-1 rounded-lg h-15"
            value={movieInput}
            onChange={(e) => setMovieInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") fetchMovie(movieInput);
            }}
          />
          <button
            className="bg-accent hover:bg-accent-hover m-3 p-2 text-[18px] flex flex-row hover:cursor-pointer rounded-lg"
            onClick={() => fetchMovie(movieInput)}
          >
            <Search /> Search
          </button>
        </div>
        <div className="m-3">
          <button className={`rounded-full p-2 m-1 border-2 ${
              type === ""
                ? "bg-accent-subtle text-accent border-accent"
                : "bg-surface text-text border-border"
            } hover:cursor-pointer`}
            onClick={() => handleclick("")}>
            All
          </button>
          <button
            className={`rounded-full p-2 m-1 border-2 ${
              type === "movie"
                ? "bg-accent-subtle text-accent border-accent"
                : "bg-surface text-text border-border"
            } hover:cursor-pointer`}
            onClick={() => handleclick("movie")}
          >
            Movie
          </button>
          <button
            className={`rounded-full p-2 m-1 border-2 ${
              type === "series"
                ? "bg-accent-subtle text-accent border-accent"
                : "bg-surface text-text border-border"
            } hover:cursor-pointer `}
            onClick={() => handleclick("series")}
          >
            Series
          </button>
          <button
            className={`rounded-full p-2 m-1 border-2 ${
              type === "episode"
                ? "bg-accent-subtle text-accent border-accent"
                : "bg-surface text-text border-border"
            } hover:cursor-pointer`}
            onClick={() => handleclick("episode")}
          >
            Episode
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
