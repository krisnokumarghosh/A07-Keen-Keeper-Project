import React from 'react';

const SummaryCard = () => {
    return (
        <div className='mt-10 md:mt-15 lg:mt-20 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 lg:gap-0 justify-items-center '>
            
            <div className='w-65  bg-[#FFFFFF] shadow rounded-lg text-center py-8 border border-base-100 '>
                <h3 className='text-[32px] font-semibold text-[#244D3F]'>10</h3>
                <p className='text-[#64748B] mt-2'>Total Friends</p>
            </div>
            <div className='w-65 bg-[#FFFFFF] shadow rounded-lg text-center py-8 border border-base-200 '>
                <h3 className='text-[32px] font-semibold text-[#244D3F]'>3</h3>
                <p className='text-[#64748B] mt-2'>On Track</p>
            </div>
            <div className='w-65 bg-[#FFFFFF] shadow rounded-lg text-center py-8 border border-base-200 '>
                <h3 className='text-[32px] font-semibold text-[#244D3F]'>6</h3>
                <p className='text-[#64748B] mt-2'>Need Attention</p>
            </div>
            <div className='w-65 bg-[#FFFFFF] shadow rounded-lg text-center py-8 border border-base-200 '>
                <h3 className='text-[32px] font-semibold text-[#244D3F]'>12</h3>
                <p className='text-[#64748B] mt-2'>Interactions This Month</p>
            </div>

        </div>
    );
};

export default SummaryCard;