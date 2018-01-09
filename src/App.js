import React, { Component } from 'react';
import Header from './components/Header/Header';

import Previewer from './containers/Previewer/Previewer';

class App extends Component {
  render() {
    return (
      <div className="db bg-washed-red h-100">
        <Header />
        <Previewer />
      </div>
    );
  }
}

export default App;
