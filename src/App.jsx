import './App.css'
import Footer from './component/pages/Footer'
import Navbar from './component/pages/Navbar'
import Home from './component/pages/home'
import Galeria from './component/pages/Galeria.jsx'

function App() {


  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        <div className='BoxApp'>
        <Galeria/>
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
