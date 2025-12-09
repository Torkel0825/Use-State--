import {useState} from "react";
import "./styles/custom_specialty/betterBtn.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };
  const handleIncrease1 = () => {
    setCount((prev) => prev * 3);
    console.log(count);
  };

  // const handleDecrease = () => {
  //   setCount((prev) => prev - 1);
  //   console.log(count);
  // };
  // const handleDecrease2 = () => {
  //   setCount((prev) => prev / 3);
  //   console.log(count);
  // };

  return (
    <>
      <button class="reset" onClick={() => setCount(0)}>
        reset
      </button>
      <h1>{count}</h1>
      <div class="btns">
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleIncrease1}>increase *3</button>
        <button onClick={() => setCount((prev) => prev - 1)}>decrease</button>
        <button onClick={() => setCount((prev) => prev / 3)}>
          decrease /3
        </button>
      </div>
    </>
  );
}

export default Counter;
