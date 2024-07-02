import React from 'react'
import { Container,PostCard} from '../components';
import appwriteService from "../appWrite/config";
import { useState } from 'react';
import { useEffect } from 'react';


export  const AllPosts = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{

    },[])

    appwriteService.getPost([])
    .then((posts)=>{
        if(posts){
           setPosts(posts.documents)
        }
    })
  return (
    <div className='flex flex-wrap'>
         {posts.map((post)=>(
            <div key={post.id} className='p-2 w-1/4'>
                 <PostCard post = {post}/>
            </div>
         ))}
    </div>
  )
}
