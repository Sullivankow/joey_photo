import { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo.png'
import { CONTACT_PHONE, CONTACT_DISPLAY } from '../config'

type PopUpProps = {
	readonly phone?: string // numéro ou `tel:+33123456789`
	readonly title?: string
	readonly message?: string
	readonly showOnLoad?: boolean
}

export default function PopUp({
	// ignore passed `phone` prop and use central config to ensure consistency
	title = "Une offre spéciale",
	message = "Une photo offerte pour chaque séance, profitez-en vite!!!",
	showOnLoad = true
}: PopUpProps) {
	const [visible, setVisible] = useState(false)
	const [revealed, setRevealed] = useState(false)
	const closeBtnRef = useRef<HTMLButtonElement | null>(null)

	useEffect(() => {
		if (showOnLoad) {
			// ouvrir la popup au chargement
			setVisible(true)
		}
	}, [showOnLoad])

	useEffect(() => {
		// focus accesible sur le bouton fermer quand la modale s'ouvre
		if (visible) closeBtnRef.current?.focus()
	}, [visible])

	if (!visible) return null

	// Always use centralized contact info so popup and footer match
	const usedPhone = CONTACT_PHONE
	const telHref = usedPhone.startsWith('tel:') ? usedPhone : `tel:${usedPhone}`
	const displayPhone = CONTACT_DISPLAY

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center min-h-screen"
			role="dialog"
			aria-modal="true"
			aria-label={title}
		>
			{/* overlay */}
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={() => setVisible(false)}
			/>

			{/* modal */}
			<div className="relative z-10 mx-4 max-w-xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 max-h-[90vh] overflow-auto">
				<button
					ref={closeBtnRef}
					onClick={() => setVisible(false)}
					aria-label="Fermer"
					className="absolute right-3 top-3 z-50 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm ring-1 ring-slate-200 transition transform hover:scale-105 hover:bg-[#F6F5F3] focus:outline-none focus:ring-2 focus:ring-[#D4C09E]/30"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>

				<div className="p-8 text-center">
					<img src={logo} alt="Logo" className="mx-auto mb-4 h-24 w-auto" />
					<h3 className="mb-2 text-2xl font-playfair italic text-[#213547]">{title}</h3>
					<p className="mb-6 text-lg italic text-[#213547]">{message}</p>

					{revealed ? (
						<a
							href={telHref}
							className="inline-flex items-center gap-2 rounded-lg border border-[#D4C09E] px-6 py-3 text-sm font-semibold text-[#213547] bg-white transition hover:bg-[#FAF9F7]"
							aria-label={`Appeler ${displayPhone}`}
						>
							{displayPhone}
						</a>
					) : (
						<button
							type="button"
							onClick={() => setRevealed(true)}
							className="inline-flex items-center gap-2 rounded-lg bg-[#D4C09E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#BFA776] active:bg-[#A98F63]"
							aria-label="Voir le numéro du photographe"
						>
							En profiter
						</button>
					)}

					<p className="mt-4 text-sm text-[#213547]">Offre limitée — contactez vite le photographe.</p>
				</div>
			</div>
		</div>
	)
}
