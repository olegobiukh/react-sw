import { get } from "./_helper";

export const getAll = ({ category = "", page = 1, search = "" }) => {
  const urlParams = new URLSearchParams();
  urlParams.set("page", page);
  urlParams.set("search", search);
  console.log(urlParams.toString());
  return get(`/${category}/?${urlParams.toString()}`);
};

export const getById = ({ category = "people", id }) => {
  // console.log(id);
  if (category) {
    return get(`/${category}/${id}`);
    // return get(`/people/${id}`);
  }
};
