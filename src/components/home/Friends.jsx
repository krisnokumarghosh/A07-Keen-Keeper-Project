import React from 'react';
import useFriends from '../../hooks/useFriends';
import FriendsCard from '../ui/FriendsCard';
import { RotateLoader } from 'react-spinners';

const Friends = () => {

    const {friends , loading} = useFriends();

    return (
        <div className='container mx-auto mt-20'>
            <h2 className='font-semibold text-[24px] mb-3 ml-14 text-[#1F2937]'>Your Friends</h2>

            {
                loading ? 
                <div className="flex justify-center items-center">
                    <RotateLoader color="#244D3F"></RotateLoader>
                </div> :

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center'>
                    {
                      friends.map((friend , ind) => {
                        return(
                            <FriendsCard
                            key={ind}
                            friend={friend}
                            ></FriendsCard>
                        )
                      })  
                    }
                </div>
            }

        </div>
    );
};

export default Friends;