import React, { use } from 'react';
import SingleData from './SingleData';

const ShowAllData = ({ticketPromise}) => {

    const ticketData = use(ticketPromise)
    console.log(ticketData)
    return (
        <div>
            <h3>Customer Tickets</h3>
            <p>{ticketData.length}</p>
            <div className='grid grid-cols-2 gap-2'>
                {
                    ticketData.map(ticket => <SingleData ticket={ticket}></SingleData>)
                }
            </div>
        </div>
    );
};

export default ShowAllData;