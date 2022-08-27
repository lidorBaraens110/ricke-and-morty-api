import { getCharacterByPage } from "../api";
import { ICharacterResults, IFetchLocationById } from "../model/axiosModel";
import axios from "axios";
import { IUnpopularCharacterFromEarth } from "../model/characterModel";

export const getUnpopularCharacterFromEarth =
  async (): Promise<IUnpopularCharacterFromEarth> => {
    const earthCharacters: ICharacterResults[] = [];
    const charactersFromEarth = await getCharactersFromEarth(
      1,
      earthCharacters
    );
    const unpopularCharacterFromEarth = charactersFromEarth?.reduce(
      (acc, val) => {
        if (acc?.episode?.length > val?.episode?.length) {
          return val;
        }
        return acc;
      },
      earthCharacters[0]
    );
    let dimension;
    if (unpopularCharacterFromEarth?.origin?.url) {
      const { data } = await axios.get<IFetchLocationById>(
        unpopularCharacterFromEarth?.origin?.url
      );
      dimension = data?.dimension;
    }
    return {
      characterName: unpopularCharacterFromEarth?.name,
      originName: unpopularCharacterFromEarth?.origin.name,
      originDimenssion: dimension,
      poplurity: unpopularCharacterFromEarth?.episode.length,
    };
  };

const getCharactersFromEarth = async (
  currentPage: number,
  earthCharacters: ICharacterResults[]
): Promise<ICharacterResults[] | undefined> => {
  try {
    const { data } = await getCharacterByPage(currentPage.toString());
    const onlyFromEarthOrigin = data?.results?.filter(
      (character) => character.origin.name === "Earth (C-137)"
    );
    earthCharacters.push(...onlyFromEarthOrigin);
    if (data.info.next) {
      currentPage++;
      await getCharactersFromEarth(currentPage, earthCharacters);
    }
    return earthCharacters;
  } catch (err) {
    console.log(err);
  }
};
