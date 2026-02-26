import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navItems = [
        {
            name: 'Real Time',
            basePath: '/real-time',
            subItems: [
                { label: 'Add a Vendor', path: '/real-time-add-new-vendor' },
                { label: 'Delete/Edit Vendors', path: '/real-time-show-all-vendors' }
            ]
        },
        {
            name: 'Delay',
            basePath: '/delay',
            subItems: [
                { label: 'Add a Vendor', path: '/delay-add-new-vendor' },
                { label: 'Delete/Edit Vendors', path: '/delay-show-all-vendors' }
            ]
        },
        {
            name:"Show All Vendors",
            basePath:"/show-all-vendors",
            subItems:[
                {label:"Real Time Vendors", path:"/real-time"},
                {label:"Delay Vendors", path:"/delay"}
            ]
        }

    ];

    return (
        <>

            <div className='navBox'>

                <nav className="navbar">

                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.name} className="nav-item-container">
                                {/* The Main Menu Label */}
                                <span className="nav-item-label">{item.name} ▼</span>

                                {/* The Dropdown Menu */}
                                <ul className="dropdown-menu">
                                    {item.subItems.map((sub) => (
                                        <li key={sub.path}>
                                            <NavLink
                                                to={sub.path}
                                                className={({ isActive }) => (isActive ? "dropdown-link active" : "dropdown-link")}
                                            >
                                                {sub.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;