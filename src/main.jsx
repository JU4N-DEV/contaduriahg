import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import { RouterProvider,createBrowserRouter,Routes,Route,BrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Nav from './components/Nav.jsx'
import Send from './components/Send.jsx'
import { loader } from './modules/getUid.js'
import Storage from './components/Storage.jsx'


/**
 * const createRouter = createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children: [
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/Send/:uididuser',
        element:<Send/>
      },
      {
        path:'/Storage',
        element:<Storage/>
      }
      
    ]
  }
])

 * 
 */




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
