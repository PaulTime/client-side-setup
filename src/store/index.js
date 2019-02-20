import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'actions';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export default ({ preloadedState = {}, history }) => {
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument({ history }),
      ),
    ),
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../actions/index', () => {
      const nextReducer = require('../actions/index').default; // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
