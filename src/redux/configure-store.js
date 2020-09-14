import { createStore, compose, applyMiddleware } from "redux";
import { createReducer } from "core";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middleware = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
        trace: true,
        traceLimit: 25
      })
      : compose;

  const store = createStore(
    createReducer(),
    composeEnhancers(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  store.injectReducer = (key, reducer) => {
    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
    return store;
  };

  return store;
};
