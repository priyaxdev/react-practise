// import React from 'react';
// focus:border-blue-500 border-slate-500 border-2 border-slate-500 border-t-2 border-b-2
import { SunMoon, Search, Cloud } from "lucide-react";
interface prop {
  handleClick: () => void;
  isDark: boolean;
  cityInput: string;
  setcityInput: (name: string) => void;
  fetchWeather: (city: string) => void;
}

const Navbar = ({
  handleClick,
  isDark,
  cityInput,
  setcityInput,
  fetchWeather,
}: prop) => {
  return (
    <>
      <nav
        className={`flex flex-row items-center w-full h-24 ${isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"} p-10`}
      >
        <a className="text-[20px] font-extrabold flex justify-center items-center">
          <Cloud />
          WEATHER APP
        </a>
        <div className="flex flex-row items-center ml-auto justify-center border-slate-600">
          <div className="rounded-[15%]  p-1 flex items-center justify-center">
            <div className="focus-within:border-blue-500 border-2 border-slate-500 rounded-l-lg">
              <input
                type="text"
                placeholder="Enter city"
                aria-label="Enter city"
                value={cityInput}
                onChange={(e) => setcityInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") fetchWeather(cityInput);
                }}
                className={`${isDark ? "bg-slate-800" : "bg-slate-50"} p-2 outline-none border-r-0`}
              />
              <button
                className={`${isDark ? "bg-slate-800" : "bg-slate-50"}
             p-2 hover:border-slate-400 cursor-pointer outline-none`}
                onClick={() => setcityInput("")}
              >
                ✕
              </button>
            </div>

            <button
              className="border-slate-500 border-2 p-1 hover:border-slate-400 cursor-pointer rounded-r-lg"
              type="submit"
              onClick={() => fetchWeather(cityInput)}
            >
              <Search size={32} />
            </button>
          </div>
          <button
            className="ml-6 border-slate-500 border-2 p-2 rounded-[50%] hover:border-slate-400 cursor-pointer"
            onClick={handleClick}
          >
            <SunMoon size={32} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
