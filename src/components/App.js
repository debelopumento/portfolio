import React, { PureComponent } from 'react';
import Nav from './nav';
import Summary from './summary';
import reactCSS from 'reactcss';
import Projects from './projects';

const WIDTH = document.documentElement.clientWidth;

class App extends PureComponent {
  render() {
    return (
      <div style={{ width: WIDTH > 414 ? '80%' : '96%', margin: 'auto' }}>
        <div>
          <h2 style={{ marginBottom: 0, color: '#606060', display: 'inline' }}>
            Di Ye
          </h2>
          <h6 style={{ marginLeft: 25, display: 'inline', color: '#aaa' }}>
            +1 (408)-477-0586
          </h6>
          <h6 style={{ marginLeft: 10, display: 'inline' }}>
            <a style={{ color: '#aaa' }} href="mailto:imdiye@gmail.com">
              imdiye@gmail.com
            </a>
          </h6>
        </div>
        <Nav />
        <Summary />
        <Projects />
      </div>
    );
  }
}

export default App;
