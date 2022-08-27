import { useEffect, useState } from "react";
import { getCharacterByName } from "../../api";
import { fetchCharacterData } from "../../helper";
import { IBarState } from "../../model/characterModel";
import Loader from "../Loader/Loaderr";
import "./characterbar.css";
const charactersArr = [
  "Rick Sanchez",
  "Summer Smith",
  "Morty Smith",
  "Beth Smith",
  "Jerry Smith",
];

const CharacterBar = (): JSX.Element => {
  const [characters, setCharacter] = useState<IBarState[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const setCharacterData = async () => {
      setCharacter(await fetchCharacterData(charactersArr));
      setLoading(false);
    };
    setCharacterData();
  }, []);

  return (
    <>
      <h1>hello bar</h1>
      <div className="bar-container">
        {loading ? (
          <Loader />
        ) : characters ? (
          <ul className="wrap-bar">
            {characters.map((char, i) => {
              return (
                <li key={i}>
                  <div className="wrap-detail">
                    <p>{char.name}</p>
                    <div
                      className="bar-height"
                      style={{ height: char.episodeLength * 3 }}
                    >
                      <p>{char.episodeLength}</p>
                    </div>
                  </div>
                  <img src={char.img} alt="" height={"auto"} width={"100%"} />
                </li>
              );
            })}
          </ul>
        ) : (
          "no data recive"
        )}
      </div>
    </>
  );
};

export default CharacterBar;
