const config = {
  people: {
    name: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    height: {
      title: "height",
      isSortable: true
    },
    birth_year: {
      title: "birth year"
    }
  },
  films: {
    title: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    episode_id: {
      title: "episode",
      isSortable: true
    },
    opening_crawl: {
      title: "opening crawl"
    },
    release_date: {
      title: "release",
      isSortable: true
    }
  },
  planets: {
    name: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    diameter: {
      title: "diameter",
      isSortable: true
    },
    terrain: {
      title: "terrain"
    }
  },
  species: {
    name: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    average_lifespan: {
      title: "average lifespan",
      isSortable: true
    },
    skin_colors: {
      title: "terrain"
    }
  },
  starships: {
    name: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    cost_in_credits: {
      title: "cost (credits)",
      isSortable: true
    },
    model: {
      title: "model"
    }
  },
  vehicles: {
    name: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    cost_in_credits: {
      title: "cost (credits)",
      isSortable: true
    },
    model: {
      title: "model"
    }
  }
};

const dataDisplayNot = ["created", "edited", "url", "homeworld"];
const dataDisplayOut = [
  "characters",
  "pilots",
  "residents",
  "people",
  "films",
  "planets",
  "species",
  "starships",
  "vehicles"
];

export { config, dataDisplayNot, dataDisplayOut };
