import axios, { AxiosResponse } from "axios";
import { IFetchCharacters, IFetchLocationById } from "../model/axiosModel";

const characterInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  timeout: 1000,
});
const locationInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/location",
  timeout: 1000,
});
const epsisodeInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/episode",
  timeout: 1000,
});

const getCharacterById = (id: string) => characterInstance.get(`/${id}`);
const getCharacterByName = (name: string) =>
  characterInstance.get<IFetchCharacters>(`/?name=${name}`);
const getCharacterByPage = (page: string) =>
  characterInstance.get<IFetchCharacters>(`/?page=${page}`);
const getLocationById = (id: string) =>
  locationInstance.get<IFetchLocationById>(`/${id}`);
const getEpisodeById = (id: string) => epsisodeInstance.get(`/${id}`);

export {
  getCharacterById,
  getLocationById,
  getEpisodeById,
  getCharacterByPage,
  getCharacterByName,
};
