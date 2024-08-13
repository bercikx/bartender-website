import { useState } from 'react';
import { navigation } from "../constants/index.js";

//import {instaIcon, messIcon, fbIcon, downArrowIcon, downArrowBlackIcon, hamburgerIcon, logo} from '../assets/icons';
import instaIcon from '../assets/icons/social-media/instaIcon.svg';
import messIcon from '../assets/icons/social-media/chatIcon.svg';
import fbIcon from '../assets/icons/social-media/fbIcon.svg';

import arrOrangeShortIconD from '../assets/icons/arrows/arrOrangeShortIconD.svg';
import arrBlackShortIconD from '../assets/icons/arrows/arrBlackShortIconD.svg';

import hamburgerIcon from '../assets/icons/hamburgerIcon.svg';
import brandLogo from '../assets/graphics/brandLogo.svg';
import {Popover} from "@headlessui/react";

const basicAnim = 'transition-transform duration-300 hover:scale-[1.10] ease-in-out';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Container for Navigation */}
            <div className={`h-[14vh] w-[100vw] px-[1.875rem] flex justify-center bg-white font-medium sticky top-0 z-10`}>
                {/* Inner-container */}
                <div className={`w-[100vw] mx-auto flex items-center justify-between px-[2.5rem]`}>
                    {/* Logotype */}
                    <a className={`block w-[12rem] ${basicAnim}`} href='#'>
                        <img src={brandLogo} className="xl:w-[125px] lg:w-[110px]" />
                    </a>

                    {/* Hamburger Icon for Mobile */}
                    <div className={`lg:hidden flex items-center justify-between absolute top-8 right-[4.25rem]`}>
                        <button onClick={toggleMenu} className='w-8 h-8 flex items-center justify-center'>
                            <img src={hamburgerIcon} className='w-6 h-6 '/>
                        </button>
                    </div>

                    {/* Menu for Desktop and Mobile */}
                    <div className={`flex flex-col lg:flex-row items-center justify-center 
                            ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
                        <nav className="flex flex-col xl:mr-14 lg:mr-10 md:flex-row lg:items-center">
                            {navigation.map((item) => (
                                <a key={item.id} href={item.url}
                                   className={`flex items-center hover:text-oragneMain transition ease-in 
                                        ${item.id == 0 ? 'mr-0' : 'mx-6'} ${item.id == 1 ? 'mx-6' : 'mx-6'} 
                                        xl:text-[16px] first:text-oragneMain last:mx-0 ${basicAnim} hover:scale-[1.05]
                                        lg:text-[14px]`}>
                                    {item.title}
                                    {(item.id == 0 || item.id == 1) && (
                                        <img
                                            src={item.id == 0 ? arrOrangeShortIconD : arrBlackShortIconD}
                                            className="ml-3 h-4 w-4"
                                        />
                                )}
                                </a>
                        ))}
                    </nav>
                    <div className="flex items-center justify-center">
                        {/* Navigation separator */}
                        <div className="w-[1.25px] h-14 bg-greySecond"/>
                    </div>

                        <div className='xl:ml-16 lg:ml-10 flex items-center justify-center'>
                            <a href='#'><img src={instaIcon} className={`xl:w-6 lg:w-[1.10rem]  ${basicAnim} hover:scale-[1.20]`} /></a>
                            <a href='#' className='mx-10'><img src={messIcon} className={`xl:w-6 lg:w-[1.10rem] ${basicAnim} hover:scale-[1.20]`} /></a>
                            <a href='#'><img src={fbIcon} className={`xl:w-6 lg:w-[1.10rem] ${basicAnim} hover:scale-[1.20]`} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;


