import { useLocation } from "react-router-dom";
import { useReducer } from "react";

import slide1 from "../../assets/slider-1.webp";
import slide2 from "../../assets/slider-2.webp";
import slide3 from "../../assets/slider-3.webp";

const images: string[] = [slide1, slide2, slide3];

type State = { index: number };

type Action =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "GOTO"; payload: number };

const sliderReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "NEXT":
      return { index: (state.index + 1) % images.length };
    case "PREV":
      return { index: (state.index - 1 + images.length) % images.length };
    case "GOTO": {
      return { index: action.payload };
    }
    default:
      return state;
  }
};

export const HomePageSlider = () => {
  const location = useLocation();
  const [state, dispatch] = useReducer(sliderReducer, { index: 0 });

  if (location.pathname.startsWith("/offert")) return null;
  return (
    <div className="flex flex-col bg-white mt-10 border border-gray-400 shadow-lg shadow-gray-600/60 backdrop-blur-sm">
      <img src={images[state.index]} alt="slider" />
      <div>
        <button
          className="border p-2 m-2 rounded border-gray-400"
          onClick={() => dispatch({ type: "PREV" })}
        >
          &lt;
        </button>
        <button
          className="border p-2 m-2 rounded border-gray-400"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
