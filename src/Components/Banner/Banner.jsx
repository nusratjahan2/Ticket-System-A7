import React from 'react';

const Banner = ({selectedTickets, resolvedTickets, resolveTicket}) => {

    return (
        <div className='flex justify-center align-center my-8'>
            <div
                // className="bg-[url('../assets/img/vector1.png'),url('../assets/img/vector2.png')] card w-1/2 h-48 mx-2 shadow-sm border-4 border-indigo-600 bg-gradient-to-r from-[rgb(99,46,227)] to-[rgb(159,98,242)]"
                // style={{
                //     backgroundImage: "url('../assets/img/vector1.png'), url('../assets/img/vector1.png'), bg-gradient-to-r from-[rgb(99,46,227)] to-[rgb(159,98,242)]",
                    
                // }}
                className="card bg-gradient-to-r from-[rgb(99,46,227)] to-[rgb(159,98,242)] w-1/2 h-48 mx-2 shadow-smr border-4 border-indigo-600"
            >
                <div className="card-body justify-center items-center">
                    <p className='text-3xl'>In-Progress</p>
                    <h2 className="text-5xl">{selectedTickets.length}</h2>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-[rgb(84,207,104)] to-[rgb(0,130,122)] w-1/2 mx-2 shadow-smr border-4 border-indigo-600">
                <div className="card-body justify-center items-center">
                    <p className='text-3xl'>Resolved</p>
                    <h2 className="text-5xl">{resolvedTickets.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
