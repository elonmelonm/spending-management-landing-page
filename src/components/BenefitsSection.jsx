import React from "react";
import Dashboard from '../assets/Dashboard.png';

const HeroSection = () => {
    return (
        <div className="w-[1440px] h-[972px] absolute top-[100px] bg-secondary-700 border-b">
            <div className="w-[1200px] h-[852.857177734375px] absolute top-[604px] left-[120px]">
                <img src={Dashboard} alt="" />
            </div>
            <div className="flex w-[352px] h-[52px] absolute text-primary-0 top-[472px] left-[544px] gap-6">
                <button className="w-[187px] h-[52px] bg-primary-500 border-none rounded-[30px]">
                    Get a Free Demo
                </button> 
                <button className="w-[141px] h-[52px] bg-secondary-500 border-none rounded-[30px]">
                    See Pricing
                </button>                                    
            </div>
            <div className="flex w-[621px] h-[72px] justify-center text-center absolute text-secondary-300 top-[360px] left-[410px] gap-6">
                <p>Your one-stop finance empower platform. <br></br> Manage all your business expenses with our supafast app. 
                </p>                                   
            </div>
            <div className="flex w-[748px] h-[216px] justify-center text-center absolute text-primary-0 top-[120px] left-[346px] gap-6 font-bold text-[72px] leading-[150%] tracking-[-0.03em]">
                All your business expenses in one place.                               
            </div>
        </div>
    );
};

export default HeroSection;