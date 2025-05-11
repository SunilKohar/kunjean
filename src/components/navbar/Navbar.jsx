
import logo from '/SainikLogo.png'
import {GiHamburgerMenu} from "react-icons/gi";
import React, { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-[#f6eedb] pl-3 flex flex-space-between">
            <img src={logo} alt="logo" className="max-w-[100px] max-h-[100px]" />
            <ul className="flex lg:flex-row sm:flex-col gap-6 ml-[20%] font-body lg:relative sm:absolute sm:top-[120%] text-[#FF6B00] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg  sm:w-full py-4">
                {menu.map((item,i)=><li key={i} className="px-3 hover:underline py-2 mt-4.25 hover:bg-[#008080] hover:rounded-lg hover:cursor-pointer hover:text-white"><a href={`#${item.name}`}>{item.name}</a></li>)}
            </ul>
            <GiHamburgerMenu className="text-2xl sm:flex lg:hidden" onClick={toggleMenu}/>
            {isOpen && (
                <ul>
                    {menu.map((item,i)=><li key={i} className="px-3 py-2 hover:cursor-context-menu">
                        <a href={`#${item.name}`}>{item.name}</a></li>)}
                </ul>
            )}
        </div>
    )
}

export default Navbar;