
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import ShowAllData from './Components/Tickets/ShowAllData'
import TaskStatus from './Components/Tickets/TaskStatus'

function App() {
  const ticketPromise = fetch('/ticketData.json')
    .then(res => res.json())

  return (
    <>
      <div className='container mx-auto px-4'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className='grid grid-cols-2 gap-2'> 
          <Suspense fallback={<p>Tickets are loading...</p>}>
            <ShowAllData ticketPromise={ticketPromise}></ShowAllData>
          </Suspense>

          <TaskStatus></TaskStatus>
        </div>

        <Footer></Footer>
      </div>

    </>
  )
}

export default App
