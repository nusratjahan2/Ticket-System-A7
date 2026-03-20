import React from 'react';
import { toast } from 'react-toastify'; //toastify

const TaskStatus = ({ selectedTickets, resolvedTickets, resolveTicket }) => {
    console.log(resolvedTickets)

    const notify = () => toast("Task resolved!");// toastify

    return (
        <div className="p-4">
            <h3 className='text-2xl font-semibold'>Task Status</h3>

            {
                selectedTickets.length === 0 ? (
                    <p className="text-gray-500 my-2">Select a ticket to add to Task Status</p>
                ) : (
                    selectedTickets.map(ticket => (

                        <div key={ticket.id} className="p-2 rounded my-3 hover:shadow-md transition duration-200">
                            <p className="font-semibold mb-2">{ticket.title}</p>
                            <button className="btn btn-block bg-[#02A53B] text-white"
                             onClick={() => {resolveTicket(ticket);
                                 notify();
                             }
                            }
                            >Completed</button>
                        </div>
                    ))
                )

            }

            <h3 className='text-2xl font-semibold'>Resolved Tasks</h3>
            {
                resolvedTickets.length === 0 ? (
                    <p className="text-gray-500 my-2">No resolved tasks yet.</p>
                ) : (
                    resolvedTickets.map(ticket => (
                        <div key={ticket.id} className="p-3 bg-[#E0E7FF] rounded my-3 hover:shadow-md transition duration-200">
                            <p className="font-semibold mb-2">{ticket.title}</p>
                        </div>
                    ))
                )

            }

        </div>
    );
};

export default TaskStatus;