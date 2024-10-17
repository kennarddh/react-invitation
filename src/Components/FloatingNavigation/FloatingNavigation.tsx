import { FC, useContext } from 'react'

import { SectionContext } from 'Contexts/SectionContext'

import { Container, NavButton } from './Styles'

const FloatingNavigation: FC = () => {
	const { RegisteredSections, CurrentSectionID } = useContext(SectionContext)

	return (
		<Container>
			{Object.entries(RegisteredSections).map(
				([id, registeredSection]) => (
					<NavButton
						active={id === CurrentSectionID}
						key={id}
						onClick={() =>
							registeredSection.ref.current?.scrollIntoView({
								behavior: 'smooth',
							})
						}
					>
						{registeredSection.name}
					</NavButton>
				),
			)}
		</Container>
	)
}

export default FloatingNavigation
