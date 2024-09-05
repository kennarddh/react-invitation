import { styled } from 'styled-components'

export const Container = styled.header`
	height: 100px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	padding: 10px 10%;

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
`

export const Nav = styled.nav`
	height: 10%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	gap: 20px;
`

export const Link = styled.a`
	padding: 10px 20px;

	color: #ffffff;
	text-decoration: none;

	font-size: 18px;

	&:hover {
		border-bottom: 2px solid #ffffff;
		margin-bottom: -2px;
	}
`

export const Logo = styled.img`
	height: 80px;
`
