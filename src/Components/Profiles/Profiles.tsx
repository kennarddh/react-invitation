import { FC } from 'react'

import Profile from './Profile'
import { Container } from './Styles'

const Profiles: FC = () => {
	return (
		<Container>
			<Profile
				imageBackgroundText='The Bride'
				name='Adinda Mawaria'
				childOfText='Putri Bungsu Dari:'
				texts={[
					'Bapak Sanusi S.M dan',
					'Ibu Jubaedah',
					'dari london utara',
					'@adinda',
				]}
				imageSrc='https://api.our-wedding.link/uploads/199a6800-6dc1-11ef-917a-61dad04cf808.jpg'
			/>
			<Profile
				reversed
				imageBackgroundText='The Groom'
				name='John Doe S.Kom'
				childOfText='Putra Pertama Dari:'
				texts={[
					'Bapak Akbar S.Kom dan',
					'Ibu Siti maimunah',
					'dari jakarta, indonesia',
					'@john_doe',
				]}
				imageSrc='https://api.our-wedding.link/uploads/3ef9d1d0-6dc1-11ef-917a-61dad04cf808.jpg'
			/>
		</Container>
	)
}

export default Profiles
