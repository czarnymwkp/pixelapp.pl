import { useReducer } from "react";

type Product = {
  name: string;
  color?: string;
  price: number;
  id: number;
};

type CartState = {
  items: Product[];
  total: number;
};

type CartAction =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: number }
  | { type: "RESET" };

export const CartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, action.product],
        total: state.total + action.product.price,
      };
    case "REMOVE": {
      const updateItems = state.items.filter((p) => p.id !== action.id);
      const removedProduct = state.items.find((p) => p.id === action.id);
      return {
        ...state,
        items: updateItems,
        total: removedProduct
          ? state.total - removedProduct.price
          : state.total,
      };
    }
    case "RESET": {
      return { items: [], total: 0 };
    }
    default:
      return state;
  }
};

const initialState = {
  items: [],
  total: 0,
};

export const ShopingCart = () => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);

  return (
    <div className="p-6 m-6 border-2 border-white-600 rounded-xl">
      <h2 className="text-white p-2">Koszyk zakupów</h2>
      <p className="bg-white rounded p-2">Kwota do zapłaty: {cart.total}zł</p>

      <button
        className="bg-white m-2 p-2 rounded"
        onClick={() => {
          dispatch({
            type: "ADD",
            product: { id: 1, name: "Jabłka", price: 10 },
          });
        }}
      >
        Dodaj jabłko (1szt)
      </button>
      <button
        className="bg-white m-2 p-2 rounded"
        onClick={() => {
          dispatch({
            type: "ADD",
            product: { id: 2, name: "Gruszka", price: 3.3 },
          });
        }}
      >
        Dodaj Gruszkę (1szt)
      </button>

      <button
        className="bg-white m-2 p-2 rounded"
        onClick={() => {
          dispatch({
            type: "REMOVE",
            id: 1,
          });
        }}
      >
        Usuń jabłko (3szt)
      </button>

      <button
        className="bg-white m-2 p-2 rounded"
        onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}
      >
        Resestuj koszyk
      </button>

      <ul>
        {cart.items.map((i) => (
          <li>
            {i.name} - {i.price}zł
          </li>
        ))}
      </ul>
    </div>
  );
};
