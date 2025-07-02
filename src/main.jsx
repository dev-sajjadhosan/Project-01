import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/Home/Home'
import StandardAccount from './pages/Trading/StandardAccount'
import ProfessionalAccount from './pages/Trading/ProfessionalAccount'
import DemoTrandingAccount from './pages/Trading/DemoTradingAccount'
import AnalyticaltTools from './pages/Resources/AnalyticaltTools'
import EconomicCalendar from './pages/Resources/EconomicCalendar'
import CurrencyConverter from './pages/Resources/CurrencyConverter'
import AboutUs from './pages/Company/AboutUs'
import ContactUs from './pages/Company/ContactUs'
import WhyProject from './pages/Company/WhyProject'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/standard-accounts',
        element: <StandardAccount />,
      },
      {
        path: '/professional-accounts',
        element: <ProfessionalAccount />,
      },
      {
        path: '/demo-trading-account',
        element: <DemoTrandingAccount />,
      },
      // Resources Pages
      {
        path: '/analytical-tools',
        element: <AnalyticaltTools />,
      },
      {
        path: '/economic-calendar',
        element: <EconomicCalendar />,
      },
      {
        path: '/currency-converter',
        element: <CurrencyConverter />,
      },
      // Company
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/why-project',
        element: <WhyProject />,
      },
    ],
  },
  {
    path: '/auth/:typ',
    element: <AuthPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
