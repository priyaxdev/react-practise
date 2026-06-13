import Navbar from "./component/Navbar";
import useMovieSearch from "./Hooks/useMovieSearch";
import MovieGrid from "./component/MovieGrid";
import { useState } from "react";
import { Loader2 } from "lucide-react";

function App() {
  const [movieInput, setMovieInput] = useState<string>("");
  const { data, loading, error, fetchMovie } = useMovieSearch();
  const [type, setType] = useState("");
  const [lastSearch, setLastSearch] = useState("");

  const feMovie = () => {
    fetchMovie(movieInput, type);
    setLastSearch(movieInput); // ← save karo
    setMovieInput("");
  };

  const handleclick = (selectedType: string) => {
    setType(selectedType);
    if (lastSearch) fetchMovie(lastSearch, selectedType); // ← lastSearch use karo
  };

  console.log(data);
  return (
    <>
      <div className="bg-bg min-h-screen">
        <Navbar
          movieInput={movieInput}
          setMovieInput={setMovieInput}
          fetchMovie={feMovie}
          handleclick={handleclick}
          type={type}
        />
        {loading ? (
          <div className="flex justify-center items-center mt-20">
            <Loader2 className="animate-spin" size={40} color="#E24B4A" />
          </div>
        ) : error ? (
          <div className="text-accent text-center mt-20">{error}</div>
        ) : !data || !data.Search ? (
          <div className="text-muted text-center mt-20">
            Search for a movie to get started
          </div>
        ) : (
          <MovieGrid data={data.Search} />
        )}
      </div>
    </>
  );
}

export default App;
