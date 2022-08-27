export interface ICharacters {
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
interface IOrigin {
  name: string;
  url: string;
}
interface ILocation extends IOrigin {}
export interface ICharacterResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
}
