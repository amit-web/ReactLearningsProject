import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <>
       <UserContextProvider>
            <div className='bg-slate-600 w-2/4 h-9 m-auto'>
                <h1 className=' text-yellow-300 '>Welcome React Context API</h1>
            </div>
            <Login/>
            <Profile/>
       </UserContextProvider>

    </>
  )
}

export default App
