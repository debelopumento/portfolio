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
      color: "white",
      fontSize: 13,
      marginTop: 25,
      margin: 15,
      textAlign: "center"
    }}
  >
    HTML, CSS, JavaScript, React, Redux, NodeJS, Express, MongoDB, Mongoose, D3, Phaser, Passport, jQuery
  </p>
);

export default Summary;
