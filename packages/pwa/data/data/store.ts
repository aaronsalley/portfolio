import { AnyAction, applyMiddleware, createStore } from "redux";
import { RootStateOrAny } from "react-redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import initialState from "../models/state";

const reducer = (state = initialState, action: AnyAction): RootStateOrAny => {
  switch (action.type) {
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

export default store;
