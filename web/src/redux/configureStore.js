import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxImmutableStoreInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, reduxImmutableStoreInvariant()))
  );
}
