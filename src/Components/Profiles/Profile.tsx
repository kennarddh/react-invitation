import { FC } from 'react'

import {
	BoldText,
	Image,
	ImageBackground,
	ImageBackgroundText,
	ImageContainer,
	Info,
	Name,
	Profile as StyledProfile,
	Text,
} from './Styles'

const Profile: FC<{
	imageBackgroundText: string
	imageSrc: string
	name: string
	childOfText: string
	texts: string[]
	reversed?: boolean
}> = props => {
	return (
		<StyledProfile reversed={!!props.reversed}>
			<ImageContainer>
				<ImageBackground>
					<ImageBackgroundText>
						{props.imageBackgroundText}
					</ImageBackgroundText>
				</ImageBackground>
				<Image src={props.imageSrc} />
			</ImageContainer>
			<Info>
				<Name>{props.name}</Name>
				<BoldText>{props.childOfText}</BoldText>
				{props.texts.map(text => (
					<Text key={text}>{text}</Text>
				))}
			</Info>
		</StyledProfile>
	)
}

export default Profile
