import { useState } from "react";
import "../css/counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col mx-[156px] gap-[96px] min-h-screen">
      <div className="flex flex-col items-center gap-4 mt-[20%]">
        <h2>Counter</h2>
        <h1 className="text-[119.66px]">{count}</h1>
      </div>
      <div className="flex flex-row gap-[72px] justify-center items-center">
        <button
          onClick={() => setCount((count) => count - 1)}
          className="w-[200px] h-[72px]"
        >
          <h2>Decrease</h2>
        </button>
        <button
          onClick={() => setCount(0)}
          className="w-[144px] h-[72px] reset-button"
        >
          <h2>Reset</h2>
        </button>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-[200px] h-[72px]"
        >
          <h2>Increase</h2>
        </button>
      </div>
    </div>
  );
}

export default Counter;
