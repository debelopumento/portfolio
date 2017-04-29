import React, { Component } from 'react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  default: {
    navLink: {
      marginRight: 10,
      color: '#ff77c6',
      fontSize: 13,
    },
  },
});

const Nav = () => (
  <div>
    <span>
      <a
        style={styles.navLink}
        href="https://github.com/debelopumento/"
        target="_blank"
      >
        Github
      </a>
    </span><span style={styles.navLink}>
      <a
        style={styles.navLink}
        href="https://www.linkedin.com/in/di-ye-51878132"
        target="_blank"
      >
        LinkedIn
      </a>
    </span>
  </div>
);
export default Nav;
