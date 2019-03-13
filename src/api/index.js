const BASE_URL = "https://swapi.co/api/";

export const getAll = async api => {
  const response = await fetch(`${BASE_URL}${api}/`);
  const data = await response.json();

  return data;
};
