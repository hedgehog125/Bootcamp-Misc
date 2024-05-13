import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import Root from "./components/root";
import PetDetailsPage from "./pages/detail";
import HomePage from "./pages/home";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import SearchPage from "./pages/search";

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="" element={<HomePage />} />
			<Route path=":type" element={<HomePage />} />
			<Route path=":type/:id" element={<PetDetailsPage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route
				path="/pet-details-not-found"
				element={<PetDetailsNotFound />}
			/>
		</Route>,
	),
	{ basename },
);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
