import Navbar from "./component/Navbar";
import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./component/Hero";
import Card from "./component/Card";

import {
  Wind,
  Droplets,
  Eye,
  SunDim,
  Thermometer,
  Cloud,
  Gauge,
  Droplet,
} from "lucide-react";
import useWeather from "./Hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [cityInput, setcityInput] = useState<string>("");
  const [celsius, setcelsius] = useState(true);
  const tempconversion = () => {
    setcelsius((prev) => !prev);
  };
  const mode = () => {
    setIsDark((prev) => !prev);
  };
  const { data, loading, error, fetchWeather } = useWeather();
  // if (error) {
  //   console.error("Error:", error.message);
  //   alert(error.message);
  // }
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  }, [error]);
  console.log(data);
  const feweather = () => {
    fetchWeather(cityInput);
    setcityInput("");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      fetchWeather(`${latitude},${longitude}`);
    });
  }, []);
  return (
    <>
      <div
        className={`${isDark ? "bg-slate-950" : "bg-slate-100"} min-h-screen`}
      >
        <Navbar
          handleClick={mode}
          isDark={isDark}
          cityInput={cityInput}
          setcityInput={setcityInput}
          fetchWeather={feweather}
        />
        {showError && (
          <div
            className={`${isDark ? "text-slate-100" : "text-slate-900"} m-2 mt-4 ml-4`}
          >
            ⚠️ {error.message}
          </div>
        )}
        {loading && <div>Loading...</div>}
        {data && (
          <>
            <Hero
              isDark={isDark}
              city={data.location.name}
              datetime={data.location.localtime}
              temp={`${celsius ? data.current.temp_c + "°C" : data.current.temp_f + "°F"}`}
              weather={data.current.condition.text}
              handleclick={tempconversion}
              
            />
            <div
              className={`${isDark ? "text-slate-100" : "text-slate-900"} m-2 mt-4 ml-4`}
            >
              current condition
            </div>
            <div
              className={`${isDark ? "text-slate-100" : "text-slate-900"} m-2 flex flex-row`}
            >
              <Card
                isDark={isDark}
                icon={<Wind />}
                value={`${data.current.wind_kph} kph`}
                valueOf="Wind"
              />
              <Card
                isDark={isDark}
                icon={<Droplets />}
                value={`${data.current.humidity}%`}
                valueOf="Humidity"
              />
              <Card
                isDark={isDark}
                icon={<Eye />}
                value={`${data.current.vis_km} km`}
                valueOf="Visibility"
              />
              <Card
                isDark={isDark}
                icon={<SunDim />}
                value={`${data.current.uv} UV`}
                valueOf="UV Index"
              />
            </div>
            <div
              className={`${isDark ? "text-slate-100" : "text-slate-900"} m-2 mt-4 ml-4`}
            >
              more details
            </div>
            <div
              className={`${isDark ? "text-slate-100" : "text-slate-900"} ml-2 mr-2 flex flex-row`}
            >
              <Card
                isDark={isDark}
                icon={<Thermometer />}
                value={`${celsius ? data.current.feelslike_c + "°C" : data.current.feelslike_f + "°F"}`}
                valueOf="Feels like"
              />
              <Card
                isDark={isDark}
                icon={<Cloud />}
                value={data.current.cloud}
                valueOf="Cloud cover"
              />
              <Card
                isDark={isDark}
                icon={<Gauge />}
                value={data.current.pressure_in}
                valueOf="Pressure"
              />
              <Card
                isDark={isDark}
                icon={<Droplet />}
                value={`${celsius ? data.current.dewpoint_c + "°C" : data.current.dewpoint_f + "°F"}`}
                valueOf="Dew point"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default App;
