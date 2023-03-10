import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

import './Banner.css'
const Banner = () => {
    return (
        <div className='container'>
            <div className='outer'>
                <div className="details">
                    {/* <h2 className='font-bold text-5xl text-slate-200'>f</h2> * */}
                    <TypeWriterEffect

                        textStyle={{
                            color: '#ADDFFF',
                            fontWeight: 600,
                            fontSize: '60px',
                        }}

                        cursorColor="#3F3D56"

                        multiText={[
                            'Welcome to',
                            ' chittagong polytechnic institute ',
                            'Department of',
                            'Computer Technology'
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={50}
                        multiTextLoop
                    />



                </div>
            </div>
        </div>

    );
};

export default Banner;