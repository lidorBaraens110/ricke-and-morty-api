import { useEffect, useState } from "react";
import { getCharacterByName } from "../../api";

const charactersArr = [
  "Rick Sanchez",
  "Summer Smith",
  "Morty Smith",
  "Beth Smith",
  "Jerry Smith",
];

const CharacterBar = (): JSX.Element => {
  const [characters, setCharacter] = useState<
    {
      name: string;
      episodeLength: any;
    }[]
  >([]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      const characterOrdered = await Promise.all(
        charactersArr.map(async (name) => {
          const { data } = await getCharacterByName(name);
          return {
            name,
            episodeLength: [
              ...new Set(
                data?.results?.reduce((acc: string[], val) => {
                  acc.push(...val.episode);
                  return acc;
                }, [])
              ),
            ].length,
          };
        })
      );
      setCharacter(characterOrdered);
    };
    fetchCharacterData();
  }, []);

  return (
    <div className="wrap-bar">
      <div>hello bar</div>

      {characters?.map((char, i) => {
        return (
          <div key={i}>
            {char.name} {char.episodeLength}
          </div>
        );
      })}
    </div>
  );
};

export default CharacterBar;
