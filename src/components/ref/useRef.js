import { useEffect, useRef, useState, usseRef } from "react";

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const previousValue = useRef();
  const [count, setCount] = useState(0);
  const previousCount = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  //   console.log("re-render", inputValue);
  //   console.log("prev-value", previousValue.current);

  useEffect(() => {
    previousValue.current = inputValue; // does not re-render component
    console.log("useEffect", previousValue.current);
  }, [inputValue]);

  useEffect(() => {
    previousCount.current = count; // does not re-render component
  }, [count]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
      <div>
        <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
          generate random
        </button>

        <div> count is : {count}</div>
        <div>previous count is : {previousCount.current}</div>
      </div>
    </div>
  );
};

export default UseRefExample;
