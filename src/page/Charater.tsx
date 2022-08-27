import { useState, useEffect } from "react";
import { getUnpopularCharacterFromEarth } from "../helper";
import { ICharacterResults } from "../model/axiosModel";

const CharacterFromEarth = (): JSX.Element => {
  const [earthCharacter, setEarthCharacter] = useState<ICharacterResults>();

  useEffect(() => {
    const fetchData = async () => {
      setEarthCharacter(await getUnpopularCharacterFromEarth());
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>hello character</h1>
      <ul>{earthCharacter?.name}</ul>
    </div>
  );
};

export default CharacterFromEarth;
