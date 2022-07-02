import { Link, Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { StyledLayout } from "./StyledLayout";

export const Layout = () => {
	return (
		<StyledLayout>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</StyledLayout>
	);
};
