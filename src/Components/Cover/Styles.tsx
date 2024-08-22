import { styled } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100dvh;

	z-index: 9999;

	background-image: url('https://api.our-wedding.link/uploads/1f6a65b0-4919-11ed-a728-db1dd50062a7.jpg');
	background-size: cover;
	background-position: 50%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;

	color: white;

	padding: 100px 0;

	position: relative;
`

export const TopGradient = styled.div`
	z-index: -10;
	top: 0;
	position: absolute;

	width: 100%;
	height: 30%;

	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(28, 45, 71, 0.4) 100%
	);
`

export const BottomGradient = styled.div`
	z-index: -10;
	bottom: 0;
	position: absolute;

	width: 100%;
	height: 70%;

	background: linear-gradient(
		rgba(255, 255, 255, 0) 0%,
		rgba(28, 45, 71, 0.4) 100%
	);
`

export const BottomContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
`

export const Title = styled.h2`
	letter-spacing: 10px;
`

export const Name = styled.h1`
	font-weight: normal;
	padding: 10px 20px;
	border-bottom: 1px solid #ffffff;
`

export const Date = styled.p`
	font-size: 20px;
	letter-spacing: 7px;
`

export const OpenButton = styled.button`
	width: 90%;
	font-size: 18px;

	border: none;

	padding: 10px 30px;

	color: white;
	background-color: #797979;

	cursor: pointer;

	&:active,
	&:focus {
		outline: 3px solid #4d4d4d;
	}
`
