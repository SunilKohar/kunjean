import React from 'react';
import logo from '/SainikLogo.png'

const Navbar = () => {
    const menu=[{
        name:"Home",
        index:1,
    },
        {
            name:"About Us",
            index:2
        },
        {
            name:"Amenities",
            index:3
        },
        {
            name:"Fees",
            index:4
        },
        {
            name:"Contact Us",
            index:5
        }
    ]
    return (
        <div className="bg-[#f6eedb] pl-3">
            <img src={logo} alt="logo" className="max-w-[100px] max-h-[100px]" />
        </div>
    )
}

export default Navbar;