import {
	FC,
	ReactNode,
	RefObject,
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react'

interface ISectionContext {
	RegisteredSections: Record<string, IRegisteredSection>
	RegisterSection: (id: string, registeredSection: IRegisteredSection) => void
	UnregisterSection: (id: string) => void
	CurrentSectionID: string | null
}

interface ISectionContextProvider {
	children: ReactNode
}

export interface IRegisteredSection {
	ref: RefObject<HTMLElement>
	name: string
}

export const SectionContext = createContext<ISectionContext>(
	{} as ISectionContext,
)

export const SectionProvider: FC<ISectionContextProvider> = ({ children }) => {
	const [RegisteredSections, SetRegisteredSections] = useState<
		Record<string, IRegisteredSection>
	>({})

	const [CurrentSectionID, SetCurrentSection] = useState<string | null>(null)

	const RegisterSection = useCallback(
		(id: string, registeredSection: IRegisteredSection) => {
			SetRegisteredSections(prev => ({
				...prev,
				[id]: registeredSection,
			}))
		},
		[],
	)

	const UnregisterSection = useCallback((id: string) => {
		SetRegisteredSections(prev => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { [id]: _, ...rest } = prev

			return rest
		})
	}, [])

	useEffect(() => {
		const handler = () => {
			const registeredSectionRects: Record<string, DOMRect> = {}

			for (const [id, registeredSection] of Object.entries(
				RegisteredSections,
			)) {
				const rect =
					registeredSection.ref.current?.getBoundingClientRect()

				if (!rect) continue

				// eslint-disable-next-line security/detect-object-injection
				registeredSectionRects[id] = rect
			}

			const screenBottomY = scrollY + window.innerHeight

			const screenHeightOccupiedBySections: {
				id: string
				screenHeightOccupiedBySection: number
			}[] = []

			for (const [id, registeredSectionRect] of Object.entries(
				registeredSectionRects,
			)) {
				const bodyRect = document.body.getBoundingClientRect()
				const elementY = registeredSectionRect.y - bodyRect.top
				const elementBottomY = elementY + registeredSectionRect.height

				const elementYOnScreen = Math.max(elementY - scrollY, 0)
				const elementBottomYOnScreen = Math.max(
					Math.min(elementBottomY, screenBottomY) - scrollY,
					0,
				)

				const screenHeightOccupiedBySection =
					elementBottomYOnScreen - elementYOnScreen

				screenHeightOccupiedBySections.push({
					id,
					screenHeightOccupiedBySection,
				})
			}

			let maxScreenHeightOccupiedBySection = -Infinity
			let maxScreenHeightOccupiedBySectionID: string | undefined =
				undefined

			for (const {
				id,
				screenHeightOccupiedBySection,
			} of screenHeightOccupiedBySections) {
				if (
					screenHeightOccupiedBySection >
					maxScreenHeightOccupiedBySection
				) {
					maxScreenHeightOccupiedBySection =
						screenHeightOccupiedBySection
					maxScreenHeightOccupiedBySectionID = id
				}
			}

			const currentSectionID = maxScreenHeightOccupiedBySectionID ?? null

			SetCurrentSection(currentSectionID)
		}

		document.addEventListener('scroll', handler)

		return () => document.removeEventListener('scroll', handler)
	}, [RegisteredSections])

	return (
		<SectionContext.Provider
			value={{
				RegisterSection,
				RegisteredSections,
				UnregisterSection,
				CurrentSectionID,
			}}
		>
			{children}
		</SectionContext.Provider>
	)
}

export default SectionProvider
