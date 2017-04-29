import React, { Component } from 'react';
import reactCSS from 'reactcss';
import Nav from './nav';

const styles = reactCSS({
  default: {
    navLink: {
      marginRight: 10,
      color: '#ff77c6',
      fontSize: 13,
    },
  },
});

const Summary = () => (
  <p style={{ color: '#727272', fontSize: 13 }}>
    HTML, CSS, Javascript, React, Redux, NodeJS, Express, D3, Phaser, Passport
  </p>
);

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 style={{ marginBottom: 0, color: '#606060' }}>Di Ye</h2>
        </div>
        <Nav />
        <Summary />
      </div>
    );
  }
}

export default App;
