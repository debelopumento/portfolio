import React, { Component } from "react";
import reactCSS from "reactcss";

const styles = reactCSS({
  default: {
    navLink: {
      marginRight: 10,
      color: "#ff77c6",
      fontSize: 13
    }
  }
});

const Summary = () => (
  <p
    style={{
      color: "#727272",
      fontSize: 13,
      marginTop: 25,
      textAlign: "center"
    }}
  >
    HTML, CSS, Javascript, React, Redux, NodeJS, Express, D3, Phaser, Passport
  </p>
);

export default Summary;
