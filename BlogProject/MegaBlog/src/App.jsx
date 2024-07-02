import { useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux';
import authService from "./appWrite/auth"
import { useEffect } from 'react';
import {login,logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';
//project k root me .env file hona chahiye jaise , jhan pe package.json hota hai
//ja v .env file me chnage kerte hai most of the time hume project fir se run krna pdta hai.
function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()


  useEffect(()=>{
      authService.getCurrentUSer()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })
      .finally(()=>{
        setLoading(false)
      })
  },[])
  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
           <Header/>
           <main>
             {/* <Outlet/> */}
           </main>
           <Footer/>
        </div>
    </div>
  ):null
}

export default App
