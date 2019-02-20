import React from 'react';

import TestHeader from 'components/Test';

import asset from 'assets/images/600x600.png';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <TestHeader />
        test section
        <img src={asset} alt="test asset" />
      </section>
    );
  }
}
