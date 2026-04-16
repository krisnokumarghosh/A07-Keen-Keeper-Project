import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import callImg from "../../assets/call.png";
import videoImg from "../../assets/video.png";
import textImg from "../../assets/text.png"; 

const Timeline = () => {

    const {timelineFriends , operation} = useContext(FriendsContext);

    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-[48px] font-bold text-[#1F2937]'>Timeline</h1>

            {
                timelineFriends.length === 0 ?
                <div>No friends found</div> :

                <div className='mt-5 space-y-6'>
                    {
                      timelineFriends.slice(0 , 1).map((friend) => {
                       return operation.map((elem , ind) => {
                            return(
                                 <div key={ind} className='bg-white border border-gray-200 flex gap-3 items-center shadow w-full p-4 rounded-md'>
                            
                               
                                    {
                                       
                                         elem === "Call" ? 
                                         <img src={callImg} alt="" /> :
                                         elem === "Video" ? 
                                         <img src={videoImg} alt="" /> :
                                         <img src={textImg} alt="" />
                                            
                                        
                                    }
                                

                                <div>
                                    <p className='text-[#64748B]'><span className='text-[#244D3F] font-semibold'>{elem}</span> with {friend.name}</p>
                                    <p className='text-[#64748B]'>March 29, 2026</p>
                                </div>
                            </div>
                            )
                        })
                      })  
                    }
                </div>
            }
        </div>
    );
};

export default Timeline;