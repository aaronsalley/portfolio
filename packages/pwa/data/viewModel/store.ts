import { AnyAction, applyMiddleware, createStore } from "redux";
import {
  RootStateOrAny,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState } from "./deployments/aaronsalley";

// TODO: dynamically import the right inital state
// const initialState = async (): Promise<RootStateOrAny> => {
//   let state;
//   const packageJson = await import("../../package.json");
//   if (packageJson.homepage.includes("disruptv")) {
//     state = await import("../viewModel/deployments/disruptv");
//   } else {
//     state = await import("../viewModel/deployments/aaronsalley");
//   }

//   console.log(state.initialState);
//   return state.initialState;
// };

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
