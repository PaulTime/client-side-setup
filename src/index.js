import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';

import createStore from 'store';
import App from 'components/App';

import './reset.css';

const { NODE_ENV, PUBLIC_PATH } = process.env

const history = createBrowserHistory({
  basename: PUBLIC_PATH,
});

ReactDOM.render((
  <Provider store={createStore({ history })}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));

if (NODE_ENV === 'development' && module.hot) module.hot.accept();
