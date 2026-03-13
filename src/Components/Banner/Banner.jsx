import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center align-center my-8'>
            <div className="card bg-base-100 w-1/2 h-48 mx-2 shadow-sm border-4 border-indigo-600">
                <div className="card-body justify-center items-center">
                    <p className='text-3xl'>In-Progress</p>
                    <h2 className="text-5xl">0</h2>
                </div>
            </div>

            <div className="card bg-base-100 w-1/2 mx-2 shadow-smr border-4 border-indigo-600">
                <div className="card-body justify-center items-center">
                    <p className='text-3xl'>Resolved</p>
                    <h2 className="text-5xl">0</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
