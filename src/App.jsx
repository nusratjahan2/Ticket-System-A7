
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import ShowAllData from './Components/Tickets/ShowAllData'
import TaskStatus from './Components/Tickets/TaskStatus'

function App() {
  const [selectedTickets, setSelectedTickets] = useState([]);

  const handleAddTicket = (ticketData) => {
    setSelectedTickets([...selectedTickets, ticketData]);
  };


  const ticketPromise = fetch('/ticketData.json')
    .then(res => res.json())

  return (
    <>
      <div className='max-w-[1280px] mx-auto px-2'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className='grid grid-cols-3 gap-2 mt-10'>
          <div className='col-span-2'>
            <Suspense fallback={<p>Tickets are loading...</p>}>
              <ShowAllData ticketPromise={ticketPromise} handleAddTicket={handleAddTicket}></ShowAllData>
            </Suspense>
          </div>

          <div>
            <TaskStatus selectedTickets={selectedTickets}></TaskStatus>
          </div>
        </div>

      </div>
 <Footer></Footer>
    </>
  )
}

export default App
