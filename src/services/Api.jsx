import axios from "axios";
const API_KEY = "971b2ef273ae22e8f151e27d46ce7887";
const BASE_URL = "https://api.themoviedb.org";
export function GetTrending() {
  return axios
    .get(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&include_adult=false`
    )
    .then((trend) => {
      return trend;
    });
}
export function GetMovieDetails(movie_id) {
  return axios
    .get(
      `${BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}&include_adult=false`
    )
    .then((response) => response.data);
}

export function GetSearchMovies(searchMovie) {
  return axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&query=${searchMovie}&page=1`
  );
}

export function GetMovieCredits(movie_id) {
  return axios
    .get(
      `${BASE_URL}/3/movie/${movie_id}/credits?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    )
    .then((response) => {
      return response.data.cast;
    });
}
export function GetMovieReviews(movieId) {
  return axios
    .get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    )
    .then((response) => response.data.results);
}
