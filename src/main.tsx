import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Partners from "./components/partners.tsx";
import FooterSection from "./components/footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/partners" element={<Partners />} />
			</Routes>
			<FooterSection />
		</BrowserRouter>
	</React.StrictMode>
);
