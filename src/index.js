import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';

import createStore from 'store';
import Routes from 'routes';

import './reset.css';

const { NODE_ENV, PUBLIC_PATH } = process.env;

const history = createBrowserHistory({
  basename: PUBLIC_PATH,
});

const store = createStore({ history });

function render(Component) {
  ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>
  ), document.getElementById('root'));
}

render(Routes);

if (NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes/index', () => {
    const newRoutes = require('./routes/index').default; // eslint-disable-line
    render(newRoutes);
  });
}
