const API_KEY = "6b805b89f92e748dc1dfe5ecd56dfb90";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language`),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: [],
      },
      {I
        slug: 'toprated',
        title: 'Em Alta',
        items: [],
      },
      P        slug: 'action',
        title: 'Ação',
        items: [],
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: [],
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: [],
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: [],
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: [],
      }
    ];
  },
};
