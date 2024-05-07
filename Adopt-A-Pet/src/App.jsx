import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Root />}></Route>),
	{ basename }
);

function App() {
	return (
		// replace below with a Router Provider
		<RouterProvider router={router}></RouterProvider>
	);
}

export default App;
