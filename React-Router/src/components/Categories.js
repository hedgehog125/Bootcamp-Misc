import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { selectCategories } from "../features/categories/categoriesSlice.js";

export default function Categories() {
	const categories = useSelector(selectCategories);

	return (
		<main>
			<h1>Categories</h1>
			<ul>
				{Object.keys(categories).map((slug) => (
					<li key={slug}>
						<Link to={`${slug}`}>{slug}</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</main>
	);
}
