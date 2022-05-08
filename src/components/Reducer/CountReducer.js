import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  // state = {}
  // action = {}

//   multiple state ? 
  return (
    <div>
      <h2> count one is : {count.firstCounter}</h2>
      <h2> count two is : {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "add2", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterOne;
