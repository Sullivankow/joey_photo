import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

/**
 * Hook useInView
 * Retourne true quand l'élément référencé est visible dans la fenêtre.
 * Utilise IntersectionObserver et respecte la préférence 'prefers-reduced-motion'.
 */
export default function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respecter la préférence reduce-motion des utilisateurs
    const mq = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (mq?.matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target) // unobserve pour one-shot
          }
        }
      },
      options ?? { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, JSON.stringify(options)])

  return inView
}
