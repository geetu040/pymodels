// COMPONENTS
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ImgClassifier } from "./components/ImgClassifier";
// REACT UTILITIES
import { useState, useEffect } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
// MODELS
import CatAndDog from "./models/cat_and_dog";


const options = {
	"cat_and_dog": new CatAndDog(),
}

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

		<Routes>
			<Route path="/" element={<>
				<Navbar props={props} />
				<Home props={props} />
			</>}/>
			<Route path="/cat_and_dog" element={<>
				<Navbar props={props} />
				<ImgClassifier props={props} />
			</>}/>
		</Routes>

	</BrowserRouter>);
}