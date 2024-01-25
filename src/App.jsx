import './App.css'
import Footer from './component/pages/Footer.jsx'
import Navbar from './component/pages/Navbar.jsx'
import Home from './component/pages/home.jsx'
import Galeria from './component/pages/Galeria.jsx'

function App() {


  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        <div className='BoxApp'>
          <Galeria />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
