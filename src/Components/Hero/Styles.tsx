import { styled } from 'styled-components'

export const Container = styled.section`
	width: 100%;
	height: 100dvh;

	z-index: -20;

	position: relative;

	background-image: url('https://api.our-wedding.link/uploads/9f5a7b30-34dc-11ed-873a-87ac5a1966db.jpg');
	background-size: cover;
	background-position: 50%;

	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	flex-direction: column;
`

export const ColorOverlay = styled.div`
	z-index: -10;
	top: 0;
	position: absolute;

	width: 100%;
	height: 100%;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.2),
		transparent 40%,
		rgba(0, 0, 0, 0.5)
	);
`

export const BottomContainer = styled.div`
	padding: 20px 0 40px 40px;

	display: flex;
	justify-content: space-between;
`

export const Date = styled.h3`
	color: white;

	rotate: 90deg;
	font-size: 120%;
	font-weight: normal;
	letter-spacing: 3px;
`

export const Description = styled.p`
	color: white;

	width: 50%;
`

export const Title = styled.h1`
	color: white;

	font-size: 50px;

	font-family: 'Libre Baskerville', system-ui;
`

export const TitleContainer = styled.div`
	width: 100%;

	padding: 20px 0 0 40px;

	white-space: nowrap;

	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	gap: 20px;
`

export const TitleLine = styled.div`
	flex-grow: 1;
	height: 1px;

	background-color: #ffffff;
`
