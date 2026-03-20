import React, { use } from 'react';
import SingleData from './SingleData';

const ShowAllData = ({ticketPromise, handleAddTicket, resolvedTickets}) => {

    const ticketData = use(ticketPromise)

      // remove resolved tickets
  const filteredTickets = ticketData.filter(
    ticket => !resolvedTickets.some(rt => rt.id === ticket.id)
  );
    
    console.log(ticketData)
    return (
        <div className='p-4'>
            <h3 className='text-2xl font-semibold mb-3'>Customer Tickets</h3>
            
            <div className='grid grid-cols-2 gap-2'>
                {
                    filteredTickets.map(ticket => <SingleData key={ticket.id} ticket={ticket} handleAddTicket={handleAddTicket}></SingleData>)
                }
            </div>
        </div>
    );
};

export default ShowAllData;