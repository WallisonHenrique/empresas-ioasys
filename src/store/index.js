import { createStore, applyMiddleware } from "redux";
import { StoreReducer } from "./Reducer";
import { asyncActions } from "./AsyncMiddleware";

export const store = createStore(StoreReducer, applyMiddleware(asyncActions));
