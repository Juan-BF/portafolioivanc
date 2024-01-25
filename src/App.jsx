import './App.css'
import Footer from './component/pages/Footer'
import Navbar from './component/pages/Navbar'
import Galerias from './component/pages/galerias'
import Home from './component/pages/home'

function App() {


  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        <div className='BoxApp'>
        <Galerias/>
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
