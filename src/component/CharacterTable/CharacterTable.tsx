import { IUnpopularCharacterFromEarth } from "../../model/characterModel";
import "./character.css";

const CharacterTable = (
  earthCharacter: IUnpopularCharacterFromEarth
): JSX.Element => {
  return (
    <table>
      <tr>
        <td>Character Name</td>
        <td>{earthCharacter.characterName}</td>
      </tr>
      <tr>
        <td>Origin Name</td>
        <td>{earthCharacter.originName}</td>
      </tr>
      <tr>
        <td>Origin Dimenssion</td>
        <td>{earthCharacter.originDimenssion}</td>
      </tr>
      <tr>
        <td>Poplurity</td>
        <td>{earthCharacter.poplurity}</td>
      </tr>
    </table>
  );
};

export default CharacterTable;
