import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

/**
 *  LayoutRoute
 *  Usage:
 *
 *  import { Route } from 'react-router-dom'
 *
 *  import LayoutRoute 'components/LayoutRoute'
 *  import YourLayoutComponent 'components/YourLayoutComponent'
 *  import BlockComponent 'components/BlockComponent'
 *
 *  <LayoutRoute
 *    path="/page-name"
 *    component={YourLayoutComponent}
 *  >
 *    <Route
 *      path="/sub-page#1-name"
 *      component={BlockComponent}
 *    />
 *  </LayoutRoute>
 * */
export default class LayoutRoute extends React.Component {
  static displayName = 'LayoutRoute';

  static propTypes = {
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  };

  static defaultProps = {
    component: React.Fragment,
    path: '/',
  };

  render() {
    const {
      children, component: Component, path, ...rest
    } = this.props;

    return (
      <Route
        path={path}
        render={() => (
          <Component>
            <Switch>
              {React.Children.map(children, child =>
                React.cloneElement(child, {
                  path: `${path}${child.props.path}`,
                }))}
            </Switch>
          </Component>
        )}
        {...rest}
      />
    );
  }
}
