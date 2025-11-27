

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair italic text-[#213547]">C o n t a c t</h2>
          <p className="mt-6 text-lg italic text-[#D4C09E]">Contactez-moi pour réserver une séance ou poser vos questions</p>
        </header>

        <form
          action="#"
          method="POST"
          className="bg-gray-50 rounded-xl border border-slate-100 p-6 shadow-sm"
          aria-label="Formulaire de contact"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-[#213547]">
                Prénom
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-transparent bg-white px-3 py-2 text-sm text-[#213547] placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4C09E]/40"
                placeholder="Votre prénom"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-[#213547]">
                Nom
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-transparent bg-white px-3 py-2 text-sm text-[#213547] placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4C09E]/40"
                placeholder="Votre nom"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-[#213547]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-transparent bg-white px-3 py-2 text-sm text-[#213547] placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4C09E]/40"
                placeholder="nom@example.com"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-semibold text-[#213547]">
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-transparent bg-white px-3 py-2 text-sm text-[#213547] placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4C09E]/40"
                placeholder="06 00 00 00 00"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-[#213547]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-transparent bg-white px-3 py-2 text-sm text-[#213547] placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4C09E]/40"
                placeholder="Décrivez votre projet, la date souhaitée, etc."
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="submit"
              aria-label="Envoyer le message"
              className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BFA776] active:bg-[#A98F63] md:px-8 md:py-3 md:text-base"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}