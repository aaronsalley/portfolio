import axios, { AxiosResponse } from 'axios';
import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction as ReduxThunkAction, ThunkDispatch } from 'redux-thunk';

type ThunkAction<ReturnType = void> = ReduxThunkAction<
  ReturnType,
  any,
  unknown,
  Action<string>
>;
