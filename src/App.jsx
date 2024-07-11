import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/servicesprovided/Services'
import SpecialDeals from './components/SpecialDeals'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Services/>
    <SpecialDeals/>
    <Footer/>
    </>
  )
}

export default App
