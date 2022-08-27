import { useState, useEffect } from "react";
import Loader from "../../component/Loader/loader";
import { getUnpopularCharacterFromEarth } from "../../helper";
import { ICharacterResults } from "../../model/axiosModel";
import "./character.css";

const CharacterFromEarth = (): JSX.Element => {
  const [earthCharacter, setEarthCharacter] = useState<ICharacterResults>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setEarthCharacter(await getUnpopularCharacterFromEarth());
      setLoading(true);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>hello character</h1>
      <div className="wrap-table">
        {loading ? (
          earthCharacter ? (
            <ul>{earthCharacter?.name}</ul>
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
