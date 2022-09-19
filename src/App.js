// COMPONENTS
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ImgClassifier } from "./components/pages/ImgClassifier"
import { Recommender } from "./components/pages/Recommender";

// REACT UTILITIES
import { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

// MODELS
import CatAndDog from "./models/cat_and_dog";
import MovieRec from "./models/movie_rec";

// CREATING MODEL INSTANCES
const options = {
	"cat_and_dog": new CatAndDog(),
	"movie_rec": new MovieRec(),
}

// MAIN APP
export default function App() {
	const theme_colors = [
		"blue", "red", "yellow", "purple",
		"green", "slate", "teal", "lime"
	];
	const isPortrait = (window.innerHeight > window.innerWidth);
	const document_title = "PyModels.AI";

	const [c, set_c] = useState("blue")
	
	const props = {
		// constants
		theme_colors,
		isPortrait,
		document_title,
		options,
		// states
		c, set_c,
	}

	return (<BrowserRouter>

		{/* <Navbar props={props} /> */}
		<Routes>
			<Route path="/" element={<>
				<Navbar props={props} />
				<Home props={props} />
			</>}/>
			<Route path="/cat_and_dog" element={<>
				<Navbar props={props} />
				<ImgClassifier props={props} />
			</>}/>
			<Route path="/movie_rec" element={<>
				<Navbar props={props} />
				<Recommender props={props} />
			</>}/>
		</Routes>

	</BrowserRouter>);
}