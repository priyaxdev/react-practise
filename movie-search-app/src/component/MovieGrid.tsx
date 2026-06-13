import MovieCard from "./MovieCard";

interface Movie {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID: string;
}

interface prop {
  data: Movie[];
}
const MovieGrid = ({ data }: prop) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-6 py-4">
        {data.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            Title={movie.Title}
            Year={movie.Year}
            Type={movie.Type}
            Poster={movie.Poster}
            
          />
        ))}
      </div>
    </>
  );
};

export default MovieGrid;
