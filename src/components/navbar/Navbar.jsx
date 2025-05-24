import logo from "/SainikLogo.png"
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
        <div>
            <div className="bg-[#f6eedb] pl-3 flex justify-between items-center">
                {/* Left Side: Logo + Menu in a Row */}
                <div className="flex items-center gap-8 flex-[4]">
                    {/* Logo */}
                    <img src={logo} alt="logo" className="max-w-[100px] max-h-[100px]" />

                    {/* Menu */}
                    <ul className="hidden lg:flex gap-6 font-body text-[#FF6B00] text-md">
                        {menu.map((item, i) => (
                            <li key={i} className="px-3 py-2 hover:underline  hover:bg-[#008080] hover:rounded-lg hover:cursor-pointer hover:text-black">
                                <a href={`#${item.name}`}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Parent container should be relative */}
                <div className="relative pr-4"> {/* Padding right here */}
                    {/* Hamburger Icon */}
                    <GiHamburgerMenu
                        className="text-2xl sm:flex lg:hidden hover:cursor-pointer"
                        onClick={toggleMenu}
                    />

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <ul className="absolute right-4 top-full mt-2 bg-white z-50 flex flex-col gap-2 text-[#FF6B00] text-md py-3 px-4 shadow-md rounded-md min-w-[150px]">
                            {menu.map((item, i) => (
                                <li
                                    key={i}
                                    className="hover:bg-[#008080] hover:text-black hover:rounded hover:underline px-2 py-1 cursor-pointer"
                                >
                                    <a href={`#${item.name}`}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
