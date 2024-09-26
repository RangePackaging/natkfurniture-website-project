import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'



function App() {
  

  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
