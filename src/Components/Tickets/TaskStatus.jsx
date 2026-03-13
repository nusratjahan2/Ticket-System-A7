import React from 'react';

const TaskStatus = ({ selectedTickets }) => {
    return (
        <div className="">
            <h3 className='text-2xl font-semibold'>Task Status</h3>

            {
                selectedTickets.map(ticket => {
                        <div key={ticket.id} className="p-2 border rounded mt-2">
                            <p>{ticket.title}</p>
                            <p className="text-sm">{ticket.customerName}</p>
                        </div>

                })
            }

            <h3 className='text-2xl font-semibold'>Resolved Tasks</h3>

        </div>
    );
};

export default TaskStatus;