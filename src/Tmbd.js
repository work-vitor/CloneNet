const API_KEY = 'b3ff85c8a649f50146da143472dc019e'
const API_BASE = 'https://api.themoviedb.org/3/'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        tittle: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-br&api-key=${API_KEY}`
        ),
      },
      {
        slug: "treeding",
        tittle: "Recomendados para você",
        items: await basicFetch(
          `/treeding/all/week?language=pt-br&api-key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        tittle: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-br&api-key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        tittle: "Ação",
        items: await basicFetch(
          `/discover/moive?with_generes=28&language=pt-br&api-key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        tittle: "Comédia",
        items: await basicFetch(
          `/discover/moive?with_generes=35&language=pt-br&api-key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        tittle: "Terror",
        items: await basicFetch(
          `/discover/moive?with_generes=27&language=pt-br&api-key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        tittle: "Romance",
        items: await basicFetch(
          `/discover/moive?with_generes=10749&language=pt-br&api-key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        tittle: "Documentário",
        items: await basicFetch(
          `/discover/moive?with_generes=99&language=pt-br&api-key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-br&api-key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-br&api-key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
