import { useState } from "react";
import emojiLizzard from "./assets/imgs/emoji-lizzard.png";
import emojiStopwatch from "./assets/imgs/emoji-stopwatch.png";
import emojiUnicorn from "./assets/imgs/emoji-unicorn.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col mx-[156px]">
      <div className="flex flex-col items-center gap-2 mt-10">
        <p>Level Up - Pool Oct 2022</p>
        <h1>Proyetos de Kelvin Cano</h1>
      </div>
      <div className="flex flex-row gap-6 items-center mx-auto">
        <div className="card flex flex-col px-[100px] py-[68px] items-center justify-center gap-6">
          <img src={emojiStopwatch} alt="emoji-stopwatch" />
          <h2>Counter</h2>
        </div>
        <div className="card flex flex-col px-[100px] py-[68px] items-center justify-center gap-6">
          <img src={emojiLizzard} alt="emoji-lizzard" />
          <h2>Camaleon</h2>
        </div>
        <div className="card flex flex-col px-[100px] py-[68px] items-center justify-center gap-6">
          <img src={emojiUnicorn} alt="emoji-unicorn" />
          <h2>Pokedex</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
