import { AnyAction, applyMiddleware, createStore } from "redux";
import {
  RootStateOrAny,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState as PortfolioData } from "./deployments/aaronsalley";
import { Theme } from "../models/themes";
import { useMemo } from "react";

const initialState = {
  browser: "",
  colorScheme: Theme.light,
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

let store: RootStateOrAny;

const initStore = (initialState: RootStateOrAny) => {
  return createStore(reducer, initialState, composedEnhancer);
};

const initializeStore = (preloadedState: RootStateOrAny) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState: RootStateOrAny) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};

// const store = createStore(reducer, composedEnhancer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
