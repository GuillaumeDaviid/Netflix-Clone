const API_KEY = "de10d7e364fa9c7ccfae920c728804b5";

const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending : `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals : `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies : `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies : `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies : `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies : `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries : `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=99`
};

export default requests;
