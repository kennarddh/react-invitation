import { keyframes, styled } from 'styled-components'

const SlideKeyframe = keyframes`
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
`

export const Container = styled.div`
	width: 100%;
	height: 100px;

	overflow: hidden;

	display: flex;
	flex-shrink: 0;
	gap: 20px;
`

export const Track = styled.div`
	height: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;

	animation: ${SlideKeyframe} 10s linear infinite;
`

export const Item = styled.div`
	width: 100px;
	height: 100%;

	border: 1px solid black;
`
