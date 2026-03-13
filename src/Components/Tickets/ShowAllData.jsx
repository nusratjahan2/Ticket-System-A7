import React, { use } from 'react';
import SingleData from './SingleData';

const ShowAllData = ({ticketPromise, handleAddTicket}) => {

    const ticketData = use(ticketPromise)
    
    console.log(ticketData)
    return (
        <div>
            <h3 className='text-2xl font-semibold'>Customer Tickets</h3>
            
            <div className='grid grid-cols-2 gap-2'>
                {
                    ticketData.map(ticket => <SingleData key={ticket.id} ticket={ticket} handleAddTicket={handleAddTicket}></SingleData>)
                }
            </div>
        </div>
    );
};

export default ShowAllData;