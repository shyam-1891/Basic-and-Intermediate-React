import React, { useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "Increment":
      return count + 1;
    case "Decrement":
      return count - 1;
    case "Initialstate":
      return 0;
    default:
      return count;
  }
}

function Reducercheck({ initialVal = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialVal);
  return (
    <>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      {count}
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>

      <button onClick={() => dispatch({ type: "Initialstate" })}>
        Initialstate
      </button>
    </>
  );
}

export default Reducercheck;
