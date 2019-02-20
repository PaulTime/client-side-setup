import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LayoutRoute from 'layouts/LayoutRoute';
import Cabinet from 'layouts/Cabinet';

export default class Routes extends React.Component {
  static displayName = 'Routes';

  render() {
    return (
      <Switch>
        <LayoutRoute path="/:userId" component={Cabinet}>
          <Route path="/actions" render={() => <div>test sub route actions</div>} />
          <Route path="/groups" render={() => <div>test sub route groups</div>} />
        </LayoutRoute>
      </Switch>
    );
  }
}
