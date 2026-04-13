import React from 'react';
import { NavLink } from 'react-router';

const Navlinks = ({to , children , className}) => {
    return (
        <NavLink 
        to={to}
        className={({isActive}) => `
        text-[#244D3F] btn btn-outline rounded-md border border-[#244D3F] ${className}  ${isActive ? "font-semibold bg-[#244D3F] text-white border-0" : ""}
        `}
        >
            {children}
        </NavLink>
    );
};

export default Navlinks;