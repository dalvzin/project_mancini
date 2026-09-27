/*
  Typographic wordmark placeholder for the Famiglia Mancini brand.
  This is an original type-based lockup, NOT a reproduction of the official
  logo. Replace with the official logo asset when available by swapping the
  markup below for an <img src="/logo.svg" .../>.
*/
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`} aria-label="Famiglia Mancini">
      <span
        className="font-serif italic tracking-tight"
        style={{ fontSize: '1.18em', lineHeight: 0.9 }}
      >
        Famiglia
      </span>
      <span
        className="font-sans font-light uppercase"
        style={{ fontSize: '0.42em', letterSpacing: '0.44em', marginTop: '0.15em' }}
      >
        Mancini
      </span>
    </span>
  )
}
