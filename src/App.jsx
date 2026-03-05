
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
      <div className='container mx-auto px-4'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
