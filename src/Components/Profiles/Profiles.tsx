import { FC } from 'react'

import {
	BoldText,
	Container,
	Image,
	ImageBackground,
	ImageBackgroundText,
	ImageContainer,
	Info,
	Name,
	Profile,
	Text,
} from './Styles'

const Profiles: FC = () => {
	return (
		<Container>
			<Profile>
				<ImageContainer>
					<ImageBackground>
						<ImageBackgroundText>The Bride</ImageBackgroundText>
					</ImageBackground>
					<Image src='https://api.our-wedding.link/uploads/199a6800-6dc1-11ef-917a-61dad04cf808.jpg' />
				</ImageContainer>
				<Info>
					<Name>Adinda Mawaria</Name>
					<BoldText>Putri Bungsu Dari:</BoldText>
					<Text>Bapak Sanusi S.M dan</Text>
					<Text>Ibu Jubaedah</Text>
					<Text>dari london utara</Text>
					<Text>@adinda</Text>
				</Info>
			</Profile>
			<Profile>
				<Info>
					<Name>John Doe S.Kom</Name>
					<BoldText>Putra Pertama Dari:</BoldText>
					<Text>Bapak Akbar S.Kom dan</Text>
					<Text>Ibu Siti maimunah</Text>
					<Text>dari jakarta, indonesia</Text>
					<Text>@john_doe</Text>
				</Info>
				<ImageContainer>
					<ImageBackground>
						<ImageBackgroundText>The Groom</ImageBackgroundText>
					</ImageBackground>
					<Image src='https://api.our-wedding.link/uploads/3ef9d1d0-6dc1-11ef-917a-61dad04cf808.jpg' />
				</ImageContainer>
			</Profile>
		</Container>
	)
}

export default Profiles
