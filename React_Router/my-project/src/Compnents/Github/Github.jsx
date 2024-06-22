import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/amit-web')
    //      .then((response)=>response.json())
    //      .then((data)=>{
    //         setData(data);
    //      })
    // },[])
const data = useLoaderData();

  return (
    <div className=' text-center text-white  bg-gray-600'>Github followers:{data.followers}

       <img src={data.avatar_url} alt="git picture" />
    </div>
  )
}

export default Github



export const gitHubInfoLoder = async()=>{
   const response = await fetch('https://api.github.com/users/amit-web')

   return response.json()
}