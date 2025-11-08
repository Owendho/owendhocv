import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  'https://github.com/ReyHey': {
    name: 'GitHub',
  },
  'https://www.linkedin.com/in/behzadshirzad1/': {
    name: 'LinkedIn',
  },
  '/images/projects/ReyResume.pdf': {
    name: 'Resume',
  },
  'https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1&1': {
    name: 'Fact of the day! ',
  }
}

export function Navbar() {
  return (
    // Removed the left negative margin so header aligns with page container
    <header className="mb-6 tracking-tight">
      {/* Stronger header bar: solid dark background, border, shadow and more padding */}
      <div className="w-full lg:sticky lg:top-6 bg-neutral-800 dark:bg-neutral-900 border border-neutral-700/30 shadow-sm rounded-lg p-3">
        <nav
          className="flex flex-row items-center justify-start gap-3 overflow-auto"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-2 pr-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isExternal = path.startsWith('http') || name === 'Resume';
              const baseLinkClass = 'transition-colors duration-150 text-neutral-200 hover:text-white flex items-center relative py-1 px-3 text-sm rounded-md';

              return (
                <Link
                  key={path}
                  href={path}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={baseLinkClass}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
