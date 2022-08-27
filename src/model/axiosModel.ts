export interface IFetchCharacters {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacterResults[];
  url: string;
  created: Date;
}
interface IOriginCharacter {
  name: string;
  url: string;
}
interface ILocationCharacter extends IOriginCharacter {}
export interface ICharacterResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOriginCharacter;
  location: ILocationCharacter;
  image: string;
  episode: string[];
}

export interface IFetchLocationById {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
