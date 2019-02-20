import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'actions';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) // eslint-disable-line no-underscore-dangle
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
    module.hot.accept('actions', () => {
      const nextReducer = require('actions').default; // eslint-disable-line

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
