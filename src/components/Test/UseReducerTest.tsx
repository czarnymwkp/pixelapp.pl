import { useReducer } from "react";

type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

export const UseReducerTest = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return (state = 0);
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(UseReducerTest, 0);

  return (
    <div>
      <p className="p-2 m-2 bg-white rounded-lg">Licznik: {count}</p>
      <button
        className="pl-6 pr-6 rounded bg-white ml-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="pl-6 pr-6 rounded bg-white ml-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>

      <button
        className="pl-6 pr-6 rounded bg-white ml-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};
