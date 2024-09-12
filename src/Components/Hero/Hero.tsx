import { FC } from 'react'

import {
	BottomContainer,
	ColorOverlay,
	Container,
	Date,
	Description,
	Title,
	TitleContainer,
	TitleLine,
} from './Styles'

const Hero: FC = () => {
	return (
		<Container>
			<ColorOverlay />
			<TitleContainer>
				<Title>Design & Preset</Title>
				<TitleLine />
			</TitleContainer>
			<BottomContainer>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Reprehenderit, et possimus laudantium dolorum nihil
					voluptates soluta nisi blanditiis consequatur debitis dolor
					non, delectus ipsam veniam quos. Id debitis sit laboriosam
					perferendis? Amet, repudiandae eligendi at maiores assumenda
					doloribus dolorem aut quod, quas id velit facere voluptatum
					dolor hic commodi incidunt?
				</Description>
				<Date>9 . 10 . 2024</Date>
			</BottomContainer>
		</Container>
	)
}

export default Hero
