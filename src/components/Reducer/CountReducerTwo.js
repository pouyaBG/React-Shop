import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2> count one is : {count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          add Five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <h2> count two is : {countTwo}</h2>
      <div>
        <button onClick={() => dispatchTwo({ type: "add", value: 5 })}>
          add Five
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default CounterOne;
