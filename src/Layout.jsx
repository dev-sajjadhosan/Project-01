import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Layout
