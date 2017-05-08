import React, { PureComponent } from "react";
import reactCSS from "reactcss";
import art_3d from "../../public/images/art-3d.png";
import art_game from "../../public/images/art-game.png";
import "../index.css";

class Artworks extends PureComponent {
	render() {
		return (
			<div style={{ borderBottom: "1px dotted #ffd1ec" }}>
				<p
					style={{
						textAlign: "center",
						fontSize: 25,
						color: "#ffd1ec",
						marginTop: 55
					}}
				>
					Art
				</p>
				<div style={{ textAlign: "center" }}>
					<a href="https://vimeo.com/67862861" target="blank">
						<img className="thumbnail-art" src={art_3d} />
					</a>
					<a href="https://vimeo.com/192746615" target="blank">
						<img className="thumbnail-art" src={art_game} />
					</a>

				</div>
			</div>
		);
	}
}

export default Artworks;
