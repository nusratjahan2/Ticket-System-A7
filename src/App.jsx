
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import ShowAllData from './Components/Tickets/ShowAllData'
import TaskStatus from './Components/Tickets/TaskStatus'
import { ToastContainer, toast } from 'react-toastify'; //toastify

function App() {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const notify = () => toast("Wow so easy!");// toastify

  // add selected tickets to Task status
  const handleAddTicket = (ticketData) => {
    setSelectedTickets([...selectedTickets, ticketData]);
  };

  // when click "Complete" button
  const resolveTicket = (ticketData) => {
    setSelectedTickets(prev => prev.filter(t => t.id !== ticketData.id));
    setResolvedTickets(prev => [...prev, ticketData]);
  }


  const ticketPromise = fetch('/ticketData.json')
    .then(res => res.json())

  return (
    <>
      <div className='max-w-[1280px] mx-auto px-2'>
        <Navbar></Navbar>
        <Banner selectedTickets={selectedTickets} resolvedTickets={resolvedTickets} resolveTicket={resolveTicket}></Banner>

        <button onClick={notify}>Notify!</button>
        <ToastContainer />

        <div className='grid grid-cols-3 gap-2 mt-10'>
          <div className='col-span-2'>
            <Suspense fallback={<p>Tickets are loading...</p>}>
              <ShowAllData ticketPromise={ticketPromise} handleAddTicket={handleAddTicket} resolvedTickets={resolvedTickets}></ShowAllData>
            </Suspense>
          </div>

          <div>
            <TaskStatus selectedTickets={selectedTickets} resolvedTickets={resolvedTickets} resolveTicket={resolveTicket}></TaskStatus>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

export default App
