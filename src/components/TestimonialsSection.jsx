import React from "react";
import Invoice from '../assets/Frame 33664.png';
import PayementHistory from '../assets/Frame 33664 (1).png';
import CardPayement from '../assets/Frame 33664 (2).png';
import Image1 from '../assets/Frame 33700.png';
import Image2 from '../assets/Frame 33700 (1).png';
import Image3 from '../assets/Frame 33700 (2).png';

const TestimonialsSection = () => {
    return (
        <section className="w-[1440px] h-[890px] relative bg-secondary-700 flex flex-col">
            <div className="flex flex-col w-[568px] h-[186px] absolute items-center justify-center top-[120px] left-[436px] gap-6">
                <div className="w-[379px] h-[186px] flex flex-col items-center justify-center  gap-3">
                    <span className="w-[160px] h-[30px] text-primary-500 font-semibold text-[20px]">
                        WHAT THEY SAY
                    </span>
                    <span className="w-[379px] h-[60px] text-primary-0 font-bold text-[40px] tracking-[-0.03em]">
                        Our User Kind Words
                    </span>
                </div>
                <div className="w-[568px] h-[60px] text-secondary-400 text-center">
                    Here are some testimonials from our user after using Spend.In to manage their business  expenses.
                </div>
            </div>

            <div className="flex flex-row w-[1200px] h-[363px] absolute top-[370px] left-[120px] gap-6">
                <div className="flex flex-col w-[384px] p-8 h-[363px] rounded-[12px] bg-secondary-500 gap-8">
                    <span className="w-[320px] h-[27px] text-[18px] font-semibold text-primary-0 pb-4 ">
                        It’s just incredible!
                    </span>
                    <span className="w-[320px] h-[120px] text-[16px] font-medium text-primary-0 pb-[34px] ">
                        It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!
                    </span>

                    <div class="w-[320px] h-0 left-8 top-[229px] opacity-20 border-t border-[#90A3BF]"></div>

                    <div className="flex gap-6 items-center">
                        <span>
                            <img src={Image1} alt="" />
                        </span>
                        <div className="flex flex-col w-[190px] h-[48px] text-[16px] text-primary-0 pb-[34px] ">
                            <span className="w-[122px] h-[27px] text-[16px] font-bold text-primary-0 ">
                                Jimmy Bartney
                            </span>
                            <span className="w-[190px] h-[21px] text-[14px] text-secondary-200 ">
                                Product Manager at Picko Lab
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[384px] p-8 h-[363px] rounded-[12px] bg-secondary-500 gap-8">
                    <span className="w-[320px] h-[27px] text-[18px] font-semibold text-primary-0 pb-4 ">
                        Satisfied User Here!
                    </span>
                    <span className="w-[320px] h-[120px] text-[16px] font-medium text-primary-0 pb-[34px] ">
                        Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!
                    </span>

                    <div class=" w-[320px] h-0 left-8 top-[229px] opacity-20 border-t border-[#90A3BF]"></div>

                    <div className="flex gap-6 items-center">
                        <span>
                            <img src={Image2} alt="" />
                        </span>
                        <div className="flex flex-col w-[190px] h-[48px] text-[16px] text-primary-0 pb-[34px] ">
                            <span className="w-[155px] h-[27px] text-[16px] font-bold text-primary-0 ">
                                Natasha Romanoff
                            </span>
                            <span className="w-[190px] h-[21px] text-[14px] text-secondary-200 ">
                                Black Widow
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[384px] p-8 h-[363px] rounded-[12px] bg-secondary-500 gap-8">
                    <span className="w-[320px] h-[27px] text-[18px] font-semibold text-primary-0 pb-4 ">
                        No doubt, Spend.In is the best!
                    </span>
                    <span className="w-[320px] h-[120px] text-[16px] font-medium text-primary-0 pb-[34px] ">
                        “The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!
                    </span>

                    <div class=" w-[320px] h-0 left-8 top-[229px] opacity-20 border-t border-[#90A3BF]"></div>

                    <div className="flex gap-6 items-center">
                        <span>
                            <img src={Image3} alt="" />
                        </span>
                        <div className="flex flex-col w-[190px] h-[48px] text-[16px] text-primary-0 pb-[34px] ">
                            <span className="w-[122px] h-[27px] text-[16px] font-bold text-primary-0 ">
                                Jimmy Bartney
                            </span>
                            <span className="w-[190px] h-[21px] text-[14px] text-secondary-200 ">
                                Product Manager at Picko Lab
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex flex-row w-[122px] h-[50px]  absolute top-[797px] left-[659px] gap-6">
                <button>
                    <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="50" rx="24" fill="#1A202C"/>
                        <path d="M22.1775 20.4473L17.625 24.9998L22.1775 29.5523" stroke="#C3D4E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30.3749 25H17.7524" stroke="#C3D4E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button> 
                <button className="flex w-[50px] h-[50px] bg-primary-500 justify-center items-center rounded-full ">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8225 4.44727L15.375 8.99977L10.8225 13.5523" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.625 9H15.2475" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                </button> 
            </div>
        </section>
    );
};

export default TestimonialsSection;