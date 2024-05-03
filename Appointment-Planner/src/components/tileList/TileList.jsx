import React from "react";
import { Tile } from "../tile/Tile";

export function TileList({ items }) {
	return (
		<div>
			{items.map(({ name, description }, index) => (
				<Tile name={name} description={description} key={index} />
			))}
		</div>
	);
}
