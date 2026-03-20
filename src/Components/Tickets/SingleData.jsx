import React from 'react';
import { ToastContainer, toast } from 'react-toastify'; //toastify


const SingleData = ({ ticket, handleAddTicket }) => {
    const handleCard = () => {
        handleAddTicket(ticket);
    }

    const notify = () => toast("New task added!");// toastify

    // priority condition
    const priorityClass =
        ticket.priority === 'High Priority' ? 'text-red-600' :
            ticket.priority === 'Medium Priority' ? 'text-yellow-600' :
                ticket.priority === 'Low Priority' ? 'text-green-600' :
                    'text-gray-600';


    return (
        <div>
            <div 
            className="card bg-base-100 border-4 border-indigo-500 w-full shadow-sm cursor-pointer hover:shadow-lg transition" 
            onClick={() => {
                handleCard();
                notify();
            }}>
                <div className="card-body min-h-[200px] p-3">
                    <h2 className="card-title">
                        {ticket.title}
                        <div className="badge badge-secondary border-none whitespace-nowrap" style={{
                            backgroundColor: ticket.status === "In Progress" ? "#F8F3B9" : "#B9F8CF"
                        }}>
                            <i className="fa-solid fa-circle" style={{
                                color: ticket.status === "In Progress" ? "#FEBB0C" : "#02A53B"
                            }}></i><span style={{
                                color: ticket.status === "In Progress" ? "#9C7700" : "#0B5E06"
                            }}>{ticket.status}</span>
                        </div>
                    </h2>
                    <p>{ticket.description}</p>

                    <div className='card-actions justify-between'>
                        <div className="flex">
                            <p className="mr-2">#{ticket.id}</p>
                            <p className={priorityClass}><span className='font-semibold'>{ticket.priority}</span></p>
                        </div>

                        <div className="flex">
                            <div className="mr-2">{ticket.customerName}</div>
                            <div className=""><i className="fa-regular fa-calendar mr-1"></i>{ticket.date}</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingleData;
