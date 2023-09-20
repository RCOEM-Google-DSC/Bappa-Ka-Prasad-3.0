import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parterns from "./components/partners.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/partners" element={<Parterns />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
