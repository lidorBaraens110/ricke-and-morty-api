import { getCharacterByPage } from "../api";
import { ICharacterResults } from "../model/axiosModel";

export const getUnpopularCharacterFromEarth = async () => {
  let page = 1;
  const earthCharacters: ICharacterResults[] = [];
  const getCharactersFromEarth = async (currentPage: number) => {
    const { data } = await getCharacterByPage(currentPage.toString());
    const onlyFromEarthOrigin = data.results.filter(
      (character) => character.origin.name === "Earth (C-137)"
    );
    earthCharacters.push(...onlyFromEarthOrigin);
    if (data.info.next) {
      page++;
      await getCharactersFromEarth(page);
    }
    return earthCharacters;
  };
  const unpopularCharacterFromEarth = (
    await getCharactersFromEarth(page)
  ).reduce((acc, val) => {
    if (acc?.episode?.length > val?.episode?.length) {
      return val;
    }
    return acc;
  }, earthCharacters[0]);
  return unpopularCharacterFromEarth;
};
