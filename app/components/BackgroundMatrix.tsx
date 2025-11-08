// Background overlay for the new CSS pattern in app/og/css/background.css
// The CSS defines `.container` with layered gradients and pseudo-elements.
// We simply render a fixed, full-viewport div with that class behind content.

interface BackgroundMatrixProps {
  className?: string;
}

export default function BackgroundMatrix({ className }: BackgroundMatrixProps) {
  return (
    <div className={`site-bg ${className ?? ''}`.trim()} aria-hidden="true" />
  )
}
