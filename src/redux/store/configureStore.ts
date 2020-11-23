import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export const configureStore = () => {
  const loggerMiddleware = createLogger();

  const middleware = [thunk, loggerMiddleware];

  const composedEnhancers = applyMiddleware(...middleware);
  return createStore(
    rootReducer,
    composedEnhancers
  );
};
