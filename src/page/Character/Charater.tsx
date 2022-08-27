import { useState, useEffect } from "react";
import Loader from "../../component/Loader/loader";
import { getUnpopularCharacterFromEarth } from "../../helper";
import { ICharacterResults } from "../../model/axiosModel";
import "./character.css";

const CharacterFromEarth = (): JSX.Element => {
  const [earthCharacter, setEarthCharacter] = useState<ICharacterResults>();

  useEffect(() => {
    const fetchData = async () => {
      setEarthCharacter(await getUnpopularCharacterFromEarth());
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>hello character</h1>
      <div className="wrap-table">
        {earthCharacter ? <ul>{earthCharacter?.name}</ul> : <Loader />}
      </div>
    </div>
  );
};

export default CharacterFromEarth;
