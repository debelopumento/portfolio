import React, { PureComponent } from 'react';
import Nav from './nav';
import Summary from './summary';
import projectDisplay from './projectDisplay';
import reactCSS from 'reactcss';

const styles = reactCSS({
  default: {
    sectionTitle: {
      color: '#ff77c6',
    },
  },
});

class Projects extends PureComponent {
  render() {
    return (
      <div>
        <p style={styles.sectionTitle}>
          Projects
        </p>
        {projectDisplay}
      </div>
    );
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
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
