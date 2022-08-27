import { IUnpopularCharacterFromEarth } from "../../model/characterModel";
import "./characterTable.css";

const CharacterTable = (
  earthCharacter: IUnpopularCharacterFromEarth
): JSX.Element => {
  return (
    <table>
      <tbody>
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
      </tbody>
    </table>
  );
};

export default CharacterTable;
