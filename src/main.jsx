import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'

import './mapboxcss/mapbox-gl.css';

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
