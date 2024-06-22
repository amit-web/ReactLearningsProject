import React,{useState,useContext} from 'react';
import UserContext from '../Context/USerContext';

const Login = () => {
    const [username,setUSername] = useState('')
    const [password,setPassword] = useState('')
    const {setUSer} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUSer({username,password})
    }
  return (
    <div className=' bg-slate-700'>
         <h2>Login</h2>
         <input
          className=' bg-red-700 text-white'
         value={username}
         onChange={(e)=>setUSername(e.target.value)}
         type="text" placeholder='username' />
         {" "}
         <input
         className=' bg-yellow-700 text-white'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
         type="text" placeholder='password' />
         <button onClick={handleSubmit}>Submit</button>
   </div>
  )
}

export default Login