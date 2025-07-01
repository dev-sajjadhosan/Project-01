import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import AuthPage from './pages/AuthPage/AuthPage'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
