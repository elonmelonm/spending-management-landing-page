import React from "react";
import Logo from '../assets/Logo with Company Name.png';

const Header = () => {
    return (
        <div className="relative w-full h-[100px] items-center px-[120px] bg-secondary-700 border-b">
            <div className="flex h-full justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="" />
                </div>
                <div className="flex w-[596px] h-[27px] gap-10 text-primary-0">
                    <div className="flex w-[101px] h-[27px] items-center gap-1.5">
                        <span className="w-[77px] h-[27px]">Products</span>
                        <span className="w-[18px] h-[18px]">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9401 7.21252L10.0501 12.1025C9.47256 12.68 8.52756 12.68 7.95006 12.1025L3.06006 7.21252" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <span className="w-[62px] h-[27px]">
                        Benefit
                    </span>
                    <span className="w-[108px] h-[27px]">
                        How it Works
                    </span>
                    <span className="w-[58px] h-[27px]">
                        Pricing
                    </span>
                    <div className="flex w-[107px] h-[27px] items-center gap-1.5">
                        <span className="w-[83px] h-[27px]">Company</span>
                        <span className="w-[18px] h-[18px]">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9401 7.21252L10.0501 12.1025C9.47256 12.68 8.52756 12.68 7.95006 12.1025L3.06006 7.21252" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="flex items-center w-[204px] h-[52px] text-primary-0 gap-8">
                    <button className="w-[47px] h-[27px]">
                        Login
                    </button>
                    <button className="w-[125px] h-[52px] bg-primary-500 border-none rounded-[30px]">
                        Get Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;