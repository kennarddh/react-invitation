import styled from 'styled-components'

export const Container = styled.div`
	background-color: #fff8da;

	padding: 10%;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 200px;
`

export const Profile = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	gap: 200px;
`

export const Image = styled.div<{ src: string }>`
	width: 100%;
	height: 100%;

	background: url('${props => props.src}');
	background-size: contain;

	background-repeat: no-repeat;

	z-index: 20;

	position: relative;
`

export const ImageBackground = styled.div`
	background-color: #818c89;

	width: 100%;
	height: 100%;

	position: absolute;

	top: -50px;
	right: -50px;

	z-index: 10;

	padding: 10px;
`

export const ImageBackgroundText = styled.p`
	color: #ffffff;

	font-size: 30px;
`

export const ImageContainer = styled.div`
	position: relative;

	width: 30%;
	height: 350px;
`

export const Info = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;
`

export const Name = styled.h3`
	font-size: 40px;
`

export const Text = styled.p`
	font-size: 20px;
`

export const BoldText = styled(Text)`
	font-weight: bold;
`
