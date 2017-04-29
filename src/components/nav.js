import React, { Component } from 'react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  default: {
    listItem: {
      listStyleType: 'none',
      display: 'inline-block',
      listStyleType: 'none',
      marginRight: 10,
      color: '#ff77c6',
    },
    navLink: {
      color: '#ff77c6',
      fontSize: 13,
    },
  },
});

const Nav = () => (
  <div>
    <li style={styles.listItem}>
      <a
        style={styles.navLink}
        href="https://github.com/debelopumento/"
        target="_blank"
      >
        Github
      </a>
    </li>
    <li style={styles.listItem}>
      |
    </li>
    <li style={styles.listItem}>
      <a
        style={styles.navLink}
        href="https://www.linkedin.com/in/di-ye-51878132"
        target="_blank"
      >
        LinkedIn
      </a>
    </li>
  </div>
);
export default Nav;
