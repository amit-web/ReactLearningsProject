import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './Compnents/Layout.jsx';
import Home from './Compnents/Home/Home.jsx';
import About from './Compnents/About/About.jsx';
import Contact from './Compnents/Contact/Contact.jsx';
import { User } from './Compnents/User/User.jsx';
import Github, { gitHubInfoLoder } from './Compnents/Github/Github.jsx';


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       //Nesting Element:---
//       {
//         path:'/home',
//         element:<Home/>,
//       },
//       {
//         path:'/about',
//         element:<About/>,
//       },
//       {
//         path:'/contact',
//         element:<Contact/>,
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      path='github'
      element={<Github/>}
      loader ={gitHubInfoLoder}
      />

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
