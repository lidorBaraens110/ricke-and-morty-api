import { useState, useEffect } from "react";
import CharacterTable from "../../component/CharacterTable/CharacterTable";
import Loader from "../../component/Loader/loader";
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
    <div className="container">
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
    </div>
  );
};

export default CharacterFromEarth;
