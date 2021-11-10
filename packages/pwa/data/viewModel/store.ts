import { AnyAction, applyMiddleware, createStore } from "redux";
import {
  RootStateOrAny,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState as PortfolioData } from "./deployments/disruptv";

const initialState = {
  browser: "",
  colorScheme: "light",
  ...PortfolioData,
};

const reducer = (state = initialState, action: AnyAction): RootStateOrAny => {
  switch (action.type) {
    case "LOAD_STATE":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_COLOR_SCHEME":
      return {
        ...state,
        colorScheme: action.payload,
      };
    case "SET_BROWSER":
      return {
        ...state,
        browser: action.payload,
      };
    default:
      return state;
  }
};

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk as ThunkMiddleware<unknown, AnyAction>)
);

const store = createStore(reducer, composedEnhancer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
