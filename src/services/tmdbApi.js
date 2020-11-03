import axiox from "axios";

const API_KEY = "a4cc8d4a15480ac80c7df65d6ff4a5ea";

const apiServices = {
  tmdmApiTrendings: () => {
    return axiox
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((data) => data.data);
  },

  tmdbApiSearchByName: (searchQuery) => {
    return axiox
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      )
      .then((data) => data.data);
  },

  tmdbApiSearchById: (id) => {
    return axiox
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((data) => data.data);
  },

  tmdbApiSearchCastById: (id) => {
    return axiox
      .get(
        `
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
      )
      .then((data) => data.data);
  },

  tmdbApiSearchReviewById: (id) => {
    return axiox
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((data) => data.data);
  },
};

export default apiServices;
