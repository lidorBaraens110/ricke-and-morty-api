import { useEffect, useState } from "react";

const charactersArr = [
  "Rick Sanchez",
  "Summer Smith",
  "Morty Smith",
  "Beth Smith",
  "Jerry Smith",
];

const CharacterBar = (): JSX.Element => {
  const [characters, setCharacter] = useState([]);

  return <div>hello bar</div>;
};

export default CharacterBar;
