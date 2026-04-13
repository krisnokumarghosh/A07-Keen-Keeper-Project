import React from 'react';
import { NavLink } from 'react-router';

const Navlinks = ({to , children}) => {
    return (
        <NavLink 
        to={to}
        className={({isActive}) => `
        text-[#64748B] btn ${isActive ? "font-semibold bg-[#244D3F] text-white border-0" : ""}
        `}
        >
            {children}
        </NavLink>
    );
};

export default Navlinks;