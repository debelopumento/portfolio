import React, { Component } from "react";
import reactCSS from "reactcss";
import githubImg from "../../public/images/GitHub-Mark-Light-64px.png";
import linkedInImg from "../../public/images/linkedIn.png";
const styles = reactCSS({
  default: {
    listItem: {
      listStyleType: "none",
      display: "inline-block",
      listStyleType: "none",
      marginRight: 10,
      color: "white"
    },
    navLink: {
      color: "white",
      fontSize: 14
    },
    icon: {
      width: 20
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
        <img src={githubImg} style={styles.icon} />
      </a>
    </li>

    <li style={styles.listItem}>
      <a
        style={styles.navLink}
        href="https://www.linkedin.com/in/di-ye-51878132"
        target="_blank"
      >
        <img src={linkedInImg} style={styles.icon} />

      </a>
    </li>
  </div>
);
export default Nav;
