import { getCharacterByPage } from "../api";
import { ICharacterResults } from "../model/axiosModel";

export const getUnpopularCharacterFromEarth = async () => {
  const earthCharacters: ICharacterResults[] = [];
  const charactersFromEarth = await getCharactersFromEarth(1, earthCharacters);
  return charactersFromEarth.reduce((acc, val) => {
    if (acc?.episode?.length > val?.episode?.length) {
      return val;
    }
    return acc;
  }, earthCharacters[0]);
};

const getCharactersFromEarth = async (
  currentPage: number,
  earthCharacters: ICharacterResults[]
) => {
  const { data } = await getCharacterByPage((currentPage + 200).toString());
  const onlyFromEarthOrigin = data.results.filter(
    (character) => character.origin.name === "Earth (C-137)"
  );
  earthCharacters.push(...onlyFromEarthOrigin);
  if (data.info.next) {
    currentPage++;
    await getCharactersFromEarth(currentPage, earthCharacters);
  }
  return earthCharacters;
};
