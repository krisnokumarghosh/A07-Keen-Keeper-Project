import React from 'react';
import Banner from '../../components/home/Banner';
import SummaryCard from '../../components/home/SummaryCard';
import Friends from '../../components/home/Friends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <SummaryCard></SummaryCard>
            <Friends></Friends>
        </div>
    );
};

export default Homepage;