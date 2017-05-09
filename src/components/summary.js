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
  <div
    style={{
      margin: 25,
      borderBottom: "0.5px dotted #be8aa7",
      paddingBottom: 35
    }}
  >
    <p
      style={{
        textAlign: "center",
        fontSize: 25,
        color: "#825870",
        marginTop: 55
      }}
    >
      Skills
    </p>
    <p
      style={{
        color: "#825870",
        fontSize: 18,
        marginTop: 25,
        margin: 0,
        textAlign: "center"
      }}
    >
      HTML, CSS, JavaScript, React, Redux, NodeJS, Express, MongoDB, Mongoose, D3, Phaser, Passport, jQuery
    </p>
  </div>
);

export default Summary;
