import React,{useEffect,useState} from 'react'
import  {Container,PostForm} from "../components";
import appwriteService from "../appWrite/config";
import { useNavigate,useParams } from 'react-router-dom';

export const EditPost = () => {
const [post,setPosts] = useState([]);
const {slug} = useParams();
const navigate = useNavigate();


useEffect(()=>{
   if(slug){
    appwriteService.getPost(slug)
    .then((post)=>{
        if(post){
            setPosts(post)
        }
    })
   }else{
    navigate('/')
   }
},[slug,navigate])
  return post? (
    <div>

        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  )
  :null
}
