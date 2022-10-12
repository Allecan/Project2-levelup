import { useState } from "react";
import "../css/chamaleon.css";
import { colors } from "../js/colors";

function Chameleon() {
  const [color, setColor] = useState("");

  function changeBG() {
    let rand = Math.floor(Math.random() * (142 - 0 + 1) + 0);
    let colorRand = colors[rand];
    document.getElementById("currentColor").innerHTML = colorRand;

    document.body.style.backgroundColor = colorRand;
    let colorRGB = window
      .getComputedStyle(document.body, null)
      .getPropertyValue("background-color");
    let a = colorRGB.substring(3).slice(0, -1);
    console.log(a);
    let colorRGBA = `rgba${a}, 0.2)`;
    document.getElementById("currentColor").style.color = colorRand;
    document.body.style.backgroundColor = colorRGBA;
  }
  return (
    <div className="flex flex-col mx-[156px] gap-[96px] min-h-screen justify-center items-center">
      <a href="/" className="fixed left-16 top-16">
        <h3 id="navhome">
          <span className="text-[#F18522]">← </span>Return to home
        </h3>
      </a>
      <div className="flex flex-col items-center gap-4">
        <h2>Current color</h2>
        <h1 className="text-[119.66px] " id="currentColor">
          White
        </h1>
      </div>
      <button
        onClick={() => {
          changeBG();
        }}
        className="w-[200px] h-[72px] bg-white"
      >
        <h2>Click Me</h2>
      </button>
    </div>
  );
}

export default Chameleon;
