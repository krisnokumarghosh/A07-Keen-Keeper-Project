import React from 'react';

const FriendsCard = ({friend}) => {

    const {
        picture,
        name,
        days_since_contact,
        tags,
        status

    } = friend

    return (
        <div className='w-65 bg-[#FFFFFF] border border-base-200 mt-4 shadow rounded-lg py-6'>
            <img className='mx-auto' src={picture} alt="friends photo" />
            <h4 className='text-[20px] text-center mt-3 font-semibold text-[#1F2937]'>{name}</h4>
            <p className='text-[12px] text-center mt-2 text-[#64748B]'>{days_since_contact}d ago</p>
            <div className='flex gap-3 justify-center mt-2'>
                {
                    tags.map((tag, ind) => {
                        return(
                           <span 
                           key={ind}
                           className="badge font-semibold text-[12px] rounded-full bg-[#CBFADB] text-[#244D3F]">{tag}</span> 
                        )
                    })
                }
            </div>

            <div className='flex justify-center mt-3 '>
                <span className={`badge rounded-full
                    ${status === "Overdue" ? 
                        "bg-[#EF4444] text-white" :
                        status === "On-Track" ? 
                        "bg-[#244D3F] text-white" :
                        "bg-[#EFAD44] text-white"
                    }
                    `}>{status}</span>
            </div>

        </div>
    );
};

export default FriendsCard;