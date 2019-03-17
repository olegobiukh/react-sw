const BASE_URL = "https://swapi.co/api/";

export const getAll = async api => {
  const response = await fetch(`${BASE_URL}${api}/`);
  const data = await response.json();

  return data;
};

export const getOne = async (api, id) => {
  const response = await fetch(`${BASE_URL}${api}/${id}/`);
  const urldata = await response.json();

  return urldata;
};

export const getByUrl = async url => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
