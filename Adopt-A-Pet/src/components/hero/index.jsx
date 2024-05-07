import React from "react";

function Hero({ image, displayText }) {
	const type = "";

	return (
		<div
			className="hero-container"
			style={{
				backgroundImage: `linear-gradient(black, black), url("${
					image || "pets-hero.png"
				}")
          `,
				backgroundBlendMode: "saturation",
				backgroundSize: "cover",
				backgroundColor: "#0000008f",
			}}
		>
			<h2>{displayText || getHeroTitle(type)}</h2>
		</div>
	);
}
export default Hero;

function getHeroTitle(type) {
	switch (type) {
		case "dog":
			return "Dogs";
		case "cat":
			return "Cats";
		case "rabbit":
			return "Rabbits";
		case "bird":
			return "Birds";
		default:
			return "Find your perfect pet";
	}
}
