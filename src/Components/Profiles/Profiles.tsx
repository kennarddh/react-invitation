import { FC, useContext, useEffect, useRef } from 'react'

import { SectionContext } from 'Contexts/SectionContext'

import Profile from './Profile'
import { Container } from './Styles'

const Profiles: FC = () => {
	const ContainerRef = useRef<HTMLElement>(null)

	const { RegisterSection, UnregisterSection } = useContext(SectionContext)

	useEffect(() => {
		RegisterSection('profile', { ref: ContainerRef, name: 'Profile' })

		return () => UnregisterSection('profile')
	}, [RegisterSection, UnregisterSection])

	return (
		<Container ref={ContainerRef}>
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
				imageSrc='https://api.our-wedding.link/uploads/8f0a4d10-80ce-11ef-9f41-add1e477f246.jpg'
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
				imageSrc='https://api.our-wedding.link/uploads/8f0a4d10-80ce-11ef-9f41-add1e477f246.jpg'
			/>
		</Container>
	)
}

export default Profiles
