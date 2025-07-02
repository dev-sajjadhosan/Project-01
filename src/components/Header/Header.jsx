import { useState } from 'react'
import { TbMenu4 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const menuArrays = [
  {
    name: 'Trading',
    icon: '',
    child: [
      {
        name: 'Standard accounts',
        path: '/standard-accounts',
      },
      {
        name: 'Professional accounts',
        path: '/professional-accounts',
      },
      {
        name: 'Demo trading account',
        path: 'demo-trading-account',
      },
    ],
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
    icon: '',
    child: [
      {
        name: 'Analytical tools',
        path: '/analytical-tools',
      },
      {
        name: 'Economic calendar',
        path: '/economic-calendar',
      },
      {
        name: 'Trading calculator',
        path: '',
      },
      {
        name: 'Currency converter',
        path: '/currency-converter',
      },
    ],
  },
  {
    name: 'Company',
    icon: '',
    child: [
      {
        name: 'About us',
        path: '/about-us',
      },
      {
        name: 'Why Project',
        path: '/why-project',
      },
      {
        name: 'Contact us',
        path: '/contact-us',
      },
    ],
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
            <ul className="menu menu-horizontal px-1">
              {menuArrays.map((li, i) => (
                <li key={i}>
                  <details>
                    <summary>{li.name}</summary>
                    <ul className="w-xs p-5 bg-base-300">
                      {li?.child?.map((cd, j) => (
                        <li key={j}>
                          <Link to={cd?.path}>{cd?.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Project 01</a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            {menuArrays.map((li, i) => (
              <li key={i}>
                <details>
                  <summary>{li.name}</summary>
                  <ul className="w-xs p-5 bg-base-300">
                    {li?.child?.map((cd, j) => (
                      <li key={j}>
                        <Link to={cd?.path}>{cd?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to="/auth/register" className="btn btn-sm btn-warning">
            Register
          </Link>
          <Link to="/auth/login" className="btn btn-sm btn-soft btn-accent">
            Sign in
          </Link>
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-sm btn-outline">
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
