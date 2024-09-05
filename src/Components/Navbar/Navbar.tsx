import { FC } from 'react'

import { Container, Link, Logo, Nav } from './Styles'

const Navbar: FC = () => {
	return (
		<Container>
			<Logo src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6xAxj8xaY5rc3Tg4P8lShuO3H2sfNf1E3g&s' />
			<Nav>
				<Link href='#couple'>Couple</Link>
				<Link href='#galleries'>Galleries</Link>
				<Link href='#date'>Date</Link>
				<Link href='#location'>Location</Link>
				<Link href='#wishes'>Wishes</Link>
			</Nav>
		</Container>
	)
}

export default Navbar
