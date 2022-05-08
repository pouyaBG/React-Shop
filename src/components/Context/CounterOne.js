import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountActions();

  return (
    <div>
      <h2> count is : {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "decrement", value: 4 })}>
        decrement
      </button>
    </div>
  );
};

export default CounterOne;
