import Header from "./component/Header";
import Banner from "./component/Banner";
import MovieList from "./component/MovieList";
import { useState, useEffect } from "react";
import MovieSearch from "./component/MovieSearch";
import Footer from "./component/Footer";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url_1 =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const url_2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const [res1, res2] = await Promise.all([
        fetch(url_1, options),
        fetch(url_2, options),
      ]);
      const [data_1, data_2] = await Promise.all([res1.json(), res2.json()]);
      setMovie(data_1.results);
      setMovieRate(data_2.results);
    };
    fetchMovie();
  }, []);

  return (
    <div className="bg-black pb-10">
      <MovieProvider>
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSearch title={"Search result"} data={movieSearch} />
        ) : (
          <>
            <MovieList title={"HOT MOVIE"} data={movie} />
            <MovieList title={"TOP RATE"} data={movieRate} />
          </>
        )}
        <Footer />
      </MovieProvider>
    </div>
  );
}

export default App;
