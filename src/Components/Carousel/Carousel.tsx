import { FC } from 'react'

import { Container, Item, Track } from './Styles'

const elements = [
	'hello world',
	'aaaa',
	'bbbb',
	'cccc',
	'dddd',
	'eeee',
	'ffff',
	'gggg',
	'hhhh',
	'iiii',
	'jjjj',
	'kkkk',
	'llll',
	'mmmm',
	'nnnn',
	'oooo',
	'pppp',
]

const Carousel: FC = () => {
	return (
		<Container>
			{Array.from({ length: 2 }, (_, index) => (
				<Track key={index}>
					{elements.map((item, index) => (
						<Item key={index}>{item}</Item>
					))}
				</Track>
			))}
		</Container>
	)
}

export default Carousel
