import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';

const FriendsProvider = ({children}) => {

    const [timelineFriends , setTimelineFriends] = useState([]);

    const  data = {
        timelineFriends,
        setTimelineFriends,
    }

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;