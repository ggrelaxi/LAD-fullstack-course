import styled from "styled-components";

export const StyledFooter = styled.footer`
	height: 120px;
	background: #f2f2f2;
	font-family: "Jost", sans-serif;
	font-weight: 400;
	line-height: 16px;
	font-size: 12px;
	color: #424242;

	.container {
		max-width: 1170px;
		width: 100%;
		margin: 0 auto;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left-block {
			width: 25%;
			height: 100%;
			align-items: center;
			display: flex;

			p {
				opacity: 0.6;
			}
		}

		.diveder {
			width: 1px;
			height: 30px;
			background: #424242;
			margin: 0 24px;
			opacity: 0.5;
		}

		.right-block {
			width: 25%;
			height: 100%;
			align-items: center;
			display: flex;
			opacity: 0.6;
		}
	}
`;
