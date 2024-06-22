import { useState } from 'react'
import './App.css'
import Header from './Compnents/Header/Header'
import Home from './Compnents/Home/Home'
import Footer from './Compnents/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App
