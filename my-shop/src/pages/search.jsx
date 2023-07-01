import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Search.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const Search = () => {
  
  //states - input query, movies
  
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popularNow, setPopularNow] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [comedies, setComedies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);

  

  const apiKey = 'caf317d08990d52171ec7e4d894af4da';
  const baseImageUrl = 'https://image.tmdb.org/t/p/';
  const imageSize = 'w500';

  useEffect(() => {
    const fetchData = async () => {
        const requests = [
            axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`),
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`),
            axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`),
            axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=16`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`),
            
          ];

      try {
        const responses = await axios.all(requests);
        setNetflixOriginals(responses[0].data.results.slice(0, 10));
        setTopRated(responses[1].data.results.slice(0, 10));
        setPopularNow(responses[2].data.results.slice(0, 10));
        setAnimation(responses[3].data.results.slice(0, 10));
        setComedies(responses[4].data.results.slice(0, 10));
        setActionMovies(responses[5].data.results.slice(0, 10));
        setDocumentaries(responses[6].data.results.slice(0, 10));
        setHorrorMovies(responses[7].data.results.slice(0, 10));
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <div className="movie-posters">
        <MovieList title="Netflix Originals" movies={netflixOriginals} baseImageUrl={baseImageUrl} imageSize={imageSize} />
        <MovieList title="Top Rated" movies={topRated} baseImageUrl={baseImageUrl} imageSize={imageSize} />
        <MovieList title="Popular Now" movies={popularNow} baseImageUrl={baseImageUrl} imageSize={imageSize} />
        <MovieList title="Animation" movies={animation} baseImageUrl={baseImageUrl} imageSize={imageSize} />
        <MovieList title="Comedies" movies={comedies} baseImageUrl={baseImageUrl} imageSize={imageSize} />
        <MovieList title="Action Movies" movies={actionMovies} baseImageUrl={baseImageUrl} imageSize={imageSize} />
        <MovieList title="Documentaries" movies={documentaries} baseImageUrl={baseImageUrl} imageSize={imageSize} />
        <MovieList title="Horror Movies" movies={horrorMovies} baseImageUrl={baseImageUrl} imageSize={imageSize} />
      </div>

    </>
  )
}

const MovieList = ({ title, movies, baseImageUrl, imageSize }) => {
    return (
      <div class="movie-posters">
        <h5>{title}</h5>
        <ImageList sx={{ width: 1250, height: 250,}} cols={10} rowHeight={200} >
          {movies.map((movie) => (
            <ImageListItem key={movie.id} class='wrapper'>
              <img
                src={`${baseImageUrl}${imageSize}/${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title}
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  };
  

export default Search;