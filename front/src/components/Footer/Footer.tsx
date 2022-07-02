import { StyledFooter } from "./StyledFooter";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Footer = () => {
	return (
		<StyledFooter>
			<div className="container">
				<div className="left-block">
					<Logo />
					<div className="diveder" />
					<p>Доска объявлений</p>
				</div>
				<div className="right-block">© ООО «Доска диджитал», 2022</div>
			</div>
		</StyledFooter>
	);
};
