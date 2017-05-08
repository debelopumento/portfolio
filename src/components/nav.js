import React, { Component } from "react";
import reactCSS from "reactcss";

const styles = reactCSS({
  default: {
    listItem: {
      listStyleType: "none",
      display: "inline-block",
      listStyleType: "none",
      marginRight: 10,
      color: "#d4c5a8"
    },
    navLink: {
      color: "#feb5e0",
      fontSize: 14
    }
  }
});

const Nav = () => (
  <div style={{ textAlign: "center" }}>
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
