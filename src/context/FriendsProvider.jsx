import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';

const FriendsProvider = ({children}) => {

    const [timelineFriends , setTimelineFriends] = useState([]);
    const [operation , setOperation] = useState([]);

    const  data = {
        timelineFriends,
        setTimelineFriends,
        operation,
        setOperation
    }

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;