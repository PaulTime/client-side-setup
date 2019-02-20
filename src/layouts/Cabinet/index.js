import React from 'react';
import PropTypes from 'prop-types';

export default class CabinetLayout extends React.PureComponent {
  static displayName = 'CabinetLayout';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <section className="cabinet-layout">
        <header>header</header>
        <aside>aside</aside>
        <main>{this.props.children}</main>
      </section>
    );
  }
}
