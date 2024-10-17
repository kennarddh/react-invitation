import { FC } from 'react'

import { Container, Logo } from './Styles'

const Navbar: FC = () => {
	return (
		<Container>
			<Logo src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6xAxj8xaY5rc3Tg4P8lShuO3H2sfNf1E3g&s' />
		</Container>
	)
}

export default Navbar
