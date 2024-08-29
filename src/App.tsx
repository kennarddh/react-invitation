import { FC, useCallback, useEffect, useState } from 'react'

import Cover from 'Components/Cover/Cover'

const App: FC = () => {
	const [IsCoverShowing, SetIsCoverShowing] = useState(true)

	const HideCover = useCallback(() => SetIsCoverShowing(false), [])

	useEffect(() => {
		document.body.style.overflowY = IsCoverShowing ? 'hidden' : 'auto'
	}, [IsCoverShowing])

	return (
		<>
			<Cover isShowing={IsCoverShowing} onHideCover={() => HideCover()} />
			<button>x</button>
			<p>hi</p>
		</>
	)
}

export default App
