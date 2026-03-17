  import React from 'react';

const TaskStatus = ({ selectedTickets, resolvedTickets, resolveTicket }) => {
    console.log(resolvedTickets)
    return (
        <div className="p-4">
            <h3 className='text-2xl font-semibold'>Task Status</h3>

            {
                selectedTickets.map(ticket => (

                        <div key={ticket.id} className="p-2 rounded my-3 hover:shadow-md transition duration-200">
                            <p className="font-semibold mb-2">{ticket.title}</p>
                           <button className="btn btn-block bg-[#02A53B] text-white" onClick={() => resolveTicket(ticket)}>Completed</button>
                        </div>
                ))
            }

            <h3 className='text-2xl font-semibold'>Resolved Tasks</h3>
            {
                resolvedTickets.map(ticket => (
                    <div key={ticket.id} className="p-3 bg-[#E0E7FF] rounded my-3 hover:shadow-md transition duration-200">
                            <p className="font-semibold mb-2">{ticket.title}</p>
                        </div>
                ))
            }

        </div>
    );
};

export default TaskStatus;