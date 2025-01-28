import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import commentReducer from "./comments";
import communitiesReducer from "./communities";
import postReducer from "./posts";
import reducer from "./session";
import votesReducer from "./votes";

const rootReducer = combineReducers({
  session: reducer,
  post: postReducer,
  comments: commentReducer,
  votes: votesReducer,
  communities: communitiesReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
