import React, { useState } from 'react';
import Logo from '../assets/Logo with Company Name.png';
import Elipse9 from '../assets/Ellipse 9.png';
import Elipse13 from '../assets/Ellipse 13.png';
import Elipse91 from '../assets/Ellipse 9 (1).png';
import Elipse131 from '../assets/Ellipse 13 (1).png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="relative w-full h-[60px] lg:h-[100px] items-center px-4 lg:px-[120px] bg-secondary-700 border-b border-[#FFFFFF29]">
            {/* Desktop Ellipses */}
            <img className="absolute top-0 left-0 hidden lg:block z-10" src={Elipse9} alt="" />
            <img className="absolute top-0 right-0 hidden lg:block z-10" src={Elipse13} alt="" />
            {/* Mobile Ellipses */}
            <img className="absolute top-0 left-0 block lg:hidden z-10" src={Elipse91} alt="" />
            <img className="absolute top-0 right-0 block lg:hidden z-10" src={Elipse131} alt="" />
            <div className="flex h-full justify-between items-center">
                <div className="flex items-center gap-2 min-w-[100px]">
                    <img src={Logo} alt="Logo" className="h-8 lg:h-auto" />
                </div>
                {/* Desktop menu */}
                <div className="hidden lg:flex w-[596px] h-[27px] gap-10 text-primary-0">
                    <div className="flex w-[101px] h-[27px] items-center gap-1.5">
                        <span className="w-[77px] h-[27px]">Products</span>
                        <span className="w-[18px] h-[18px]">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9401 7.21252L10.0501 12.1025C9.47256 12.68 8.52756 12.68 7.95006 12.1025L3.06006 7.21252" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <span className="w-[62px] h-[27px]">Benefit</span>
                    <span className="w-[108px] h-[27px]">How it Works</span>
                    <span className="w-[58px] h-[27px]">Pricing</span>
                    <div className="flex w-[107px] h-[27px] items-center gap-1.5">
                        <span className="w-[83px] h-[27px]">Company</span>
                        <span className="w-[18px] h-[18px]">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9401 7.21252L10.0501 12.1025C9.47256 12.68 8.52756 12.68 7.95006 12.1025L3.06006 7.21252" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                {/* Mobile hamburger */}
                <div className="lg:hidden flex items-center z-20">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="7" width="32" height="3" rx="1.5" fill="white" />
                            <rect y="15" width="32" height="3" rx="1.5" fill="white" />
                            <rect y="23" width="32" height="3" rx="1.5" fill="white" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex items-center w-[204px] h-[52px] text-primary-0 gap-8">
                    <button className="w-[47px] h-[27px]">Login</button>
                    <button className="w-[125px] h-[52px] bg-primary-500 border-none rounded-[30px]">Get Demo</button>
                </div>
            </div>
            {/* Mobile menu dropdown */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-secondary-700 border-b border-[#FFFFFF29] z-20 animate-slideDown">
                    <div className="flex flex-col gap-4 p-4 text-primary-0">
                        <button className="text-left">Products</button>
                        <button className="text-left">Benefit</button>
                        <button className="text-left">How it Works</button>
                        <button className="text-left">Pricing</button>
                        <button className="text-left">Company</button>
                        <div className="flex gap-4 mt-2">
                            <button className="w-[47px] h-[27px]">Login</button>
                            <button className="w-[90px] h-[40px] bg-primary-500 border-none rounded-[30px]">Get Demo</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;