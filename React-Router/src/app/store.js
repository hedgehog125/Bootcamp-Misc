import { configureStore } from "@reduxjs/toolkit";

import articlesReducer from "../features/articles/articlesSlice.js";
import authorsReducer from "../features/authors/authorsSlice.js";
import categoriesReducer from "../features/categories/categoriesSlice.js";
import sessionReducer from "../features/session/sessionSlice.js";

export const store = configureStore({
	reducer: {
		articles: articlesReducer,
		categories: categoriesReducer,
		session: sessionReducer,
		authors: authorsReducer,
	},
});
