import React from 'react';

const ChipInstructorData = ({ data }) => {
    const { designation, email, image, name, number } = data
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mx-5 grid grid-cols-2 py-5">
                <div className='' > <figure ><img className='rounded ' src={image} alt="ChifInstructor" /></figure></div>
                <div className="card-body w-3/7 -ml-8 -mt-7">
                    <h2 className="card-title font-color text-2xl font-bold">{name}</h2>
                    <p className='font-color font-semibold'>{designation}</p>
                    <p className='font-color font-semibold'>{email}</p>
                    <p className='font-color font-semibold'>{number}</p>

                </div>
            </div>
        </div>
    );
};

export default ChipInstructorData;