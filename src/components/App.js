import React, { PureComponent } from "react";
import Nav from "./nav";
import Summary from "./summary";
import reactCSS from "reactcss";
import Projects from "./projects";
import Artworks from "./artworks";
import Activities from "./activities";
import img from "../../public/images/profilePic.jpeg";
import "../index.css";

class App extends PureComponent {
  render() {
    return (
      <div>
        <div
          style={{ borderBottom: "0.5px dotted #ffd1ec", paddingBottom: 15 }}
        >
          <div style={{ textAlign: "center" }}>
            <h3 style={{ marginBottom: 0, color: "#606060", display: "block" }}>
              Di Ye
            </h3>
            <img
              style={{
                width: 70,
                opacity: 0.8,
                border: "1px, #ffa089, solid",
                borderRadius: 55,
                display: "block",
                margin: "auto",
                padding: 5
              }}
              src={img}
            />
            <h5 style={{ display: "inline", color: "#aaa" }}>
              +1 (408)-477-0586
            </h5>
            <h5 style={{ marginLeft: 10, display: "inline" }}>
              <a style={{ color: "#aaa" }} href="mailto:imdiye@gmail.com">
                imdiye@gmail.com
              </a>
            </h5>
          </div>
          <Nav />
          <Summary />
        </div>
        <div className="main">
          <Projects />
          <Artworks />
          <Activities />
        </div>
      </div>
    );
  }
}

export default App;
