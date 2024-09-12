import { FC, useCallback, useEffect, useState } from 'react'

import Cover from 'Components/Cover/Cover'
import Hero from 'Components/Hero/Hero'
import Navbar from 'Components/Navbar/Navbar'

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
				</>
			)}
		</>
	)
}

export default App
