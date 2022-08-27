import CharacterBar from "./component/CharacterBar/CharacterBar";
import CharacterFromEarth from "./component/Character/Charater";
import "./app.css";
function App() {
  return (
    <div className="container">
      <CharacterFromEarth />
      <CharacterBar />
    </div>
  );
}

export default App;
