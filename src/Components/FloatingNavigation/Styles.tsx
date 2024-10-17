import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;

	top: 25px;
	right: 25px;

	z-index: 1000;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-direction: column;

	padding: 10px 20px;
`

export const NavButton = styled.button<{ active: boolean }>`
	border-radius: 50%;

	width: 50px;
	height: 50px;

	border: none;

	background-color: ${({ active }) => (active ? '#ff8f8f' : '#c7c7c7')};
	color: white;

	cursor: pointer;
`
