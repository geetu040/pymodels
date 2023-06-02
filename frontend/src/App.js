// REACT UTILITIES
import { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

// PAGES
import { Home } from "./Pages/Home";
import { Model } from "./Pages/Model";

// COMPONENTS
import { Navbar } from "./Components/Navbar";

// MODELS
import CatAndDog from "./Scripts/models/cat_and_dog"
import FaceAnalytics from "./Scripts/models/face_analytics"
import MovieReviews from "./Scripts/models/movie_reviews"
import BookRec from "./Scripts/models/book_rec"
import MovieRec from "./Scripts/models/movie_rec"
import Movie2022Rec from "./Scripts/models/movie_2022_rec"
import DupQues from "./Scripts/models/dup_ques"

// CREATING MODEL INSTANCES
const models = [
	new FaceAnalytics(),
	new BookRec(),
	new DupQues(),
	new CatAndDog(),
	new Movie2022Rec(),
	new MovieReviews(),
	new MovieRec(),
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
				<Model model={model} props={props} />
			</>}/>

		)})}


	</Routes> </BrowserRouter>);
}