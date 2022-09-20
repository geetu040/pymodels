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
import BookRec from "./models/book_rec"

// CREATING MODEL INSTANCES
const models = [
	new CatAndDog(),
	new MovieRec(),
	new BookRec(),
]

const options = {}
for (let i in models) {
	options[models[i].name] = models[i];
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

	return (<BrowserRouter> <Routes>

		<Route path="/" element={<>
			<Navbar props={props} />
			<Home props={props} />
		</>}/>

		{models.map((model, i)=>{ return (

			<Route key={i} path={`/${model.name}`} element={<>
				<Navbar props={props} />

				{model.type === "img_classifier" &&
					<ImgClassifier props={props} />
				}
				{model.type === "recommender" &&
					<Recommender props={props} />
				}

			</>}/>

		)})}


	</Routes> </BrowserRouter>);
}