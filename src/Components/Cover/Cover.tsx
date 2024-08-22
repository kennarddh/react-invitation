import { FC } from 'react'

import {
	BottomContainer,
	BottomGradient,
	Container,
	Date,
	Name,
	OpenButton,
	Title,
	TopGradient,
} from './Styles'

const Cover: FC = () => {
	return (
		<Container>
			<TopGradient />
			<BottomGradient />
			<Title>The Wedding Of</Title>
			<BottomContainer>
				<Name>Name & Name</Name>
				<Date>19 . 10 . 2024</Date>
				<OpenButton>Open Invitation</OpenButton>
			</BottomContainer>
		</Container>
	)
}

export default Cover
