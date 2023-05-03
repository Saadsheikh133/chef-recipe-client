/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children, to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive,  }) =>
                isActive
                    ? "active"
                    :  "default"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;