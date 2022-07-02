import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./app.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
};
