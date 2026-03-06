import React from 'react';

const SingleData = ({ ticket }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">
                        {ticket.title}
                        <div className="badge badge-secondary">{ticket.status}</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{ticket.customerName}</div>
                        <div className="badge badge-outline">{ticket.date}</div>
                    </div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{ticket.customerName}</div>
                        <div className="badge badge-outline">{ticket.date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;