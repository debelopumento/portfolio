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
          style={{
            borderBottom: "0.5px dotted #ffd1ec",
            paddingBottom: 15,
            backgroundColor: "#e85568"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 15,
                fontSize: 20,
                color: "white",
                display: "block"
              }}
            >
              Di Ye
            </h3>
            <img className="thumbnail" src={img} />

            <h5 style={{ display: "block" }}>
              <a style={{ color: "white" }} href="mailto:imdiye@gmail.com">
                glamorousPull@gmail.com
              </a>
            </h5>

          </div>
          <Nav />
          <h5 style={{ color: "white" }}>
            Full stack engineer passionate about creating, learning and building things, 3D graphic artist, game designer, strategic thinker.
          </h5>
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
