
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { RouterProvider,createBrowserRouter,Routes,Route,BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Send from './components/Send'
import Storage from './components/Storage'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index path='/' element={<Login/>}/>
          <Route path='/Send' element={<Send/>}/>
          <Route path='/Storage' element={<Storage/>}/>
        </Route>
       </Routes>
      </BrowserRouter>
    </>
 
  
        
    

  )
}

export default App
