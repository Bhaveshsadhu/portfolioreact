import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Resume', to: '/resume' },
]

function SiteNav() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
      <div className="container glass rounded-4 px-3 px-lg-4">
        <NavLink className="navbar-brand fw-bold text-decoration-none" to="/">
          <span className="text-primary-emphasis fw-bold">Bhavesh Sadhu</span>
        </NavLink>
        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="btn btn-sm btn-outline d-inline-flex align-items-center gap-2"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
            <span className="d-none d-md-inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {links.map((item) => (
              <li key={item.to} className="nav-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link fw-semibold ${isActive ? 'text-primary' : 'text-white-50'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SiteNav
