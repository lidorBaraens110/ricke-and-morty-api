import { useState, useEffect } from "react";
import CharacterTable from "../CharacterTable/CharacterTable";
import Loader from "../Loader/Loaderr";
import { getUnpopularCharacterFromEarth } from "../../helper";
import { IUnpopularCharacterFromEarth } from "../../model/characterModel";
import "./character.css";

const CharacterFromEarth = (): JSX.Element => {
  const [earthCharacter, setEarthCharacter] =
    useState<IUnpopularCharacterFromEarth>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setEarthCharacter(await getUnpopularCharacterFromEarth());
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>hello character</h1>
      <div className="wrap-table">
        {!loading ? (
          earthCharacter ? (
            <CharacterTable {...earthCharacter} />
          ) : (
            "fetch data failed"
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default CharacterFromEarth;
