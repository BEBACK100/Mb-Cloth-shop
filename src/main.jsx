import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contuct from './Components/Contuct/Contuct.jsx'
import Product from './Components/Product/Product.jsx'
import Errorpage from './Components/ErrorPage/Errorpage.jsx'
import ProductDetails from './Components/Product/ProductDetails.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"contact",
        element:<Contuct></Contuct>
      },
      {
        path:"product",
        element:<Product></Product>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/photos')
        
      },
      {
        path:"productdetails/:productId",
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/photos/${params.productId}`)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
