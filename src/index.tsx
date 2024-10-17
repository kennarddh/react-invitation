import React from 'react'

import ReactDOM from 'react-dom/client'

import { SectionProvider } from 'Contexts/SectionContext'

import App from './App'
import GlobalStyle from './Styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<SectionProvider>
			<App />
		</SectionProvider>
	</React.StrictMode>,
)
