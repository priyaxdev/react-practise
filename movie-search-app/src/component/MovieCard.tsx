// import React from 'react'
import { useState } from "react";
import { Star, Dot, ImageOff } from "lucide-react";

interface prop {
  Poster: string;
  Type: string;
  Year: string;
  Title: string;
}

const MovieCard = ({ Poster, Type, Year, Title }: prop) => {
  const [imgError, setImgError] = useState(false);
  return (
    <>
      <div className=" bg-card border-border h-100 m-2 rounded-lg p-2 hover:border-accent border-2 hover:cursor-pointer hover:-translate-y-1 transition-all duration-150 ">
        <div className="image aspect-[2/3] relative bg-surface flex items-center justify-center">
          {!imgError && Poster !== "N/A" ? (
            <img
              src={Poster}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-muted">
              <ImageOff size={32} />
              <span className="text-xs">No Poster</span>
            </div>
          )}

          {/* {Poster !== "N/A"
            ? <img src={Poster} alt={Title} className="w-full h-full object-cover" />
            : <img src={logo} alt="logo"/>} */}

          <button className="bg-accent text-white rounded-lg absolute top-2 left-2 px-2 py-1">
            {Type}
          </button>
          <button className="absolute top-2 right-2 bg-black text-white rounded-lg px-2 py-1">
            {Year}
          </button>
        </div>
        <div>
          <div className="text-text truncate">{Title}</div>
          <div className="flex flex-row text-muted items-center mt-auto">
            <Star color="#EF9F27" fill="#EF9F27" size={16} /> N/A <Dot />
            {Type}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
