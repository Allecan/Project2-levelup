import { Link } from "react-router-dom";
import emojiLizzard from "./assets/imgs/emoji-lizzard.png";
import emojiStopwatch from "./assets/imgs/emoji-stopwatch.png";
import emojiUnicorn from "./assets/imgs/emoji-unicorn.png";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col mx-[156px] gap-[220px] min-h-screen">
      <div className="flex flex-col items-center gap-2 mt-10">
        <h2 className="font-normal">Level Up - Pool Oct 2022</h2>
        <h1>Kelvin Cano Project's</h1>
      </div>
      <div className="flex flex-row gap-10 items-center mx-auto">
        <Link to="/counter">
          <div className="card flex flex-col px-[100px] py-[68px] items-center justify-center gap-6">
            <img src={emojiStopwatch} alt="emoji-stopwatch" />
            <h2>Counter</h2>
          </div>
        </Link>
        <Link to="/chameleon">
          <div className="card flex flex-col px-[100px] py-[68px] items-center justify-center gap-6">
            <img src={emojiLizzard} alt="emoji-lizzard" />
            <h2>Chameleon</h2>
          </div>
        </Link>
        <Link to="/pokedex">
          <div className="card flex flex-col px-[100px] py-[68px] items-center justify-center gap-6">
            <img src={emojiUnicorn} alt="emoji-unicorn" />
            <h2>Pokedex</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
