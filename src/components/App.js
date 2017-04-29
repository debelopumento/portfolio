import React, { PureComponent } from 'react';
import Nav from './nav';
import Summary from './summary';
import reactCSS from 'reactcss';
import Projects from './projects';

class App extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div>
          <h2 style={{ marginBottom: 0, color: '#606060' }}>Di Ye</h2>
        </div>
        <Nav />
        <Summary />
        <Projects />
      </div>
    );
  }
}

export default App;
