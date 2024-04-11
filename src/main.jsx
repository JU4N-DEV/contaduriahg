import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Nav from './components/Nav.jsx'
import Send from './components/Send.jsx'
import { loader } from './modules/getUid.js'

const createRouter = createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children: [
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/Send/:iduser',
        element:<Send/>
      }
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createRouter}/>
  </React.StrictMode>,
)
