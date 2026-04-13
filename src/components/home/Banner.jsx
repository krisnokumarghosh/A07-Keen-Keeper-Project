import React from 'react';

const Banner = () => {
    return (
        <div className='mt-10 md:mt-20'>
           <h1 className='w-60 mx-auto md:w-full font-bold text-[26px] md:text-[45px] text-[#1F2937] text-center'>Friends to keep close in your life</h1> 
           <p className='text-[#64748B] w-75 mx-auto  md:w-full md:text-[17px] text-center mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the relationships that matter most.</p>
           <div className='flex justify-center mt-8'>
            <button className='btn  font-semibold border-0 bg-[#244D3F] text-white'>+ Add a Friend</button>
           </div>
        </div>
    );
};

export default Banner;