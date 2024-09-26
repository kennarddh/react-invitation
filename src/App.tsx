import { FC, useCallback, useEffect, useState } from 'react'

import Cover from 'Components/Cover/Cover'
import Hero from 'Components/Hero/Hero'
import Navbar from 'Components/Navbar/Navbar'
import Profiles from 'Components/Profiles/Profiles'

const App: FC = () => {
	const [IsCoverShowing, SetIsCoverShowing] = useState(true)

	const HideCover = useCallback(() => SetIsCoverShowing(false), [])

	useEffect(() => {
		document.body.style.overflowY = IsCoverShowing ? 'hidden' : 'auto'
	}, [IsCoverShowing])

	return (
		<>
			<Cover isShowing={IsCoverShowing} onHideCover={() => HideCover()} />
			{IsCoverShowing ? null : (
				<>
					<Navbar />
					<Hero />
					<Profiles />
				</>
			)}
		</>
	)
}

export default App
