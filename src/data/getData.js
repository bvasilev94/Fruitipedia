import { del, get, post, put } from "./api.js";

const endpoints = {
  catalog: "/data/fruits?sortBy=_createdOn%20desc",
  byID: "/data/fruits/",
  serachByName:`/data/fruits?where=`
};

export async function getAllFruits() {
  return get(endpoints.catalog);
}

export async function getById(id) {
  return get(endpoints.byID + id);
}

export async function addFruit(data) {
  return post(endpoints.catalog, data);
}

export async function updateFruit(id, data) {
  return put(endpoints.byID + id, data);
}

export async function deleteFruit(id) {
  return del(endpoints.byID + id);
}

export async function searchFruit(query) {
  const searchParam = `name LIKE "${query}"`;
  return get(endpoints.serachByName + encodeURIComponent(searchParam))
}