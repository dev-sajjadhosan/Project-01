import { useState } from 'react'
import { TbMenu4 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const menuArrays = [
  {
    name: 'Trading',
    path: '/trading',
    icon: '',
  },
  {
    name: 'Markets',
    path: '/markets',
    icon: '',
  },
  {
    name: 'Platforms',
    path: '/platforms',
    icon: '',
  },
  {
    name: 'Resources',
    path: '/resources',
    icon: '',
  },
  {
    name: 'Company',
    path: '/company',
    icon: '',
  },
  {
    name: 'Partners',
    path: '/partners',
    icon: '',
  },
]
const langs = [
  {
    name: 'english',
    value: 'en',
  },
  {
    name: 'bangla',
    value: 'bn',
  },
  {
    name: 'hindi',
    value: 'hd',
  },
  {
    name: 'france',
    value: 'en',
  },
  {
    name: 'arabic',
    value: 'en',
  },
]
const Header = () => {
  const [lang, setLang] = useState('english')
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-9">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <TbMenu4 size={21} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Landing Page</a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            {menuArrays.map((li, i) => (
              <li key={i}>
                <Link to={li.path}>
                  {/* {li.icon} */}
                  {li.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="btn btn-sm btn-warning">Register</button>
          <button className="btn btn-sm btn-soft btn-accent">Sign in</button>
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-sm btn-ghost">
              {lang}
            </button>
            <div
              tabIndex={0}
              className="dropdown-content p-1 w-40 mt-5 bg-base-200 rounded-xl"
            >
              <ul className="menu gap-1 items-center w-full">
                {langs.map((ln, i) => (
                  <li
                    className="w-full"
                    key={i}
                    onClick={() => setLang(ln.name)}
                  >
                    <a href="">{ln.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
