const BASE_URL = "https://swapi.co/api/";

export const getAll = async ({ api, page = 1, query = "" }) => {
  const urlParams = new URLSearchParams();

  urlParams.set("page", page);
  urlParams.set("search", query);

  const response = await fetch(`${BASE_URL}${api}/?${urlParams.toString()}`);
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
