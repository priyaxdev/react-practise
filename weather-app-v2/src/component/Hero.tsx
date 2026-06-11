// import React from 'react'
// datetime={data.location.localtime},datetime, bg-slate-900 bg-white
interface prop {
  isDark: boolean;
  city: string;
  temp: string;
  weather: string;
  datetime: string;
  handleclick: () => void;
}

const Hero = ({
  isDark,
  city,
  temp,
  weather,
  datetime,
  handleclick,
  
}: prop) => {
  return (
    <>
      <div
        className={`${isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"} flex justify-center items-center flex-col text-slate-900 mt-5 h-70 w-full`}
      >
        <div
          className={`${isDark ? "text-slate-400" : "text-slate-500"} text-[18px]`}
        >
          {datetime}
        </div>
        <div
          className={`${isDark ? "text-slate-100" : "text-slate-900"} font-semibold text-[28px]`}
        >
          {city}
        </div>
        <div
          className={`${isDark ? "text-slate-100" : "text-slate-900"} font-extrabold text-[44px]`}
        >
          {temp}
        </div>
        <div
          className={`${isDark ? "text-slate-400" : "text-slate-500"} text-[18px]`}
        >
          {weather}
        </div>
        <div className="mt-5">
          <button
            className={`${isDark ? "text-slate-100" : "text-slate-900"} border-slate-500 border-2 p-2 rounded-lg cursor-pointer text-[16px]`}
            onClick={handleclick}
          >
            °C/°F
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
