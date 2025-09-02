import Elipse9 from '../assets/Ellipse 9.png';
import Elipse10 from '../assets/Ellipse 10.png';
import Image1 from '../assets/Frame 33700.png';
import Image2 from '../assets/Frame 33700 (1).png';
import Image3 from '../assets/Frame 33700 (2).png';

const TestimonialsSection = () => {
    return (
        <section className="w-full min-h-[500px] xl:h-[967px] px-4 md:px-12 lg:px-20 xl:px-[120px] py-12 md:py-16 lg:py-20 xl:py-[120px] items-center relative bg-secondary-700 flex flex-col gap-8 md:gap-16 xl:gap-20 overflow-hidden">
            <img className="absolute top-0 left-0 hidden md:block w-[80px] md:w-[120px] lg:w-[160px] xl:w-[200px]" src={Elipse9} alt="" />
            <img className="absolute bottom-0 right-0 hidden md:block w-[80px] md:w-[120px] lg:w-[160px] xl:w-[200px]" src={Elipse10} alt="" />
            <div className="flex flex-col w-full md:w-[568px] xl:w-[700px] items-center justify-center gap-4 md:gap-6 xl:gap-8 mx-auto">
                <div className="w-full md:w-[459px] xl:w-[600px] flex flex-col items-center justify-center gap-2 md:gap-3 xl:gap-4 mx-auto">
                    <span className="w-full h-[30px] text-center text-primary-500 font-semibold text-[18px] md:text-[20px] xl:text-[22px]">
                        WHAT THEY SAY
                    </span>
                    <span className="w-full h-[60px] text-center text-primary-0 font-bold text-[28px] md:text-[40px] xl:text-[44px] tracking-[-0.03em]">
                        Our User Kind Words
                    </span>
                </div>
                <div className="w-full md:w-[568px] xl:w-[700px] text-secondary-400 text-center text-sm md:text-base xl:text-lg">
                    Here are some testimonials from our user after using Spend.In to manage their business expenses.
                </div>
            </div>
            <div className="flex flex-col xl:flex-row w-full xl:w-[1200px]  gap-4 md:gap-6 xl:gap-8 items-center justify-center mx-auto">
                {/* Card 1 */}
                <div className="flex flex-col w-full md:w-[384px] xl:w-[420px] p-4 md:p-8 xl:p-10 h-full md:h-[363px] xl:h-[400px] rounded-[12px] bg-secondary-500 gap-4 md:gap-8 xl:gap-10">
                    <span className="w-full md:w-[320px] xl:w-[350px] h-[27px] text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-primary-0 pb-2 md:pb-4 xl:pb-6">
                        It’s just incredible!
                    </span>
                    <span className="w-full md:w-[320px] xl:w-[350px] h-[120px] text-[14px] md:text-[16px] xl:text-[18px] font-medium text-primary-0 pb-4 md:pb-[34px] xl:pb-10">
                        It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!
                    </span>
                    <div className="w-full h-0 opacity-20 border-t border-[#90A3BF]"></div>
                    <div className="flex gap-4 md:gap-6 xl:gap-8 items-center">
                        <span>
                            <img src={Image1} alt="" className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14" />
                        </span>
                        <div className="flex flex-col w-full md:w-[190px] xl:w-[220px] h-[48px] text-[14px] md:text-[16px] xl:text-[18px] text-primary-0 pb-2 md:pb-[34px] xl:pb-10">
                            <span className="w-full md:w-[122px] xl:w-[150px] h-[27px] text-[14px] md:text-[16px] xl:text-[18px] font-bold text-primary-0 ">
                                Jimmy Bartney
                            </span>
                            <span className="w-full md:w-[190px] xl:w-[220px] h-[21px] text-[12px] md:text-[14px] xl:text-[16px] text-secondary-200 ">
                                Product Manager at Picko Lab
                            </span>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col w-full md:w-[384px] xl:w-[420px] p-4 md:p-8 xl:p-10 h-full md:h-[363px] xl:h-[400px] rounded-[12px] bg-secondary-500 gap-4 md:gap-8 xl:gap-10">
                    <span className="w-full md:w-[320px] xl:w-[350px] h-[27px] text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-primary-0 pb-2 md:pb-4 xl:pb-6">
                        Satisfied User Here!
                    </span>
                    <span className="w-full md:w-[320px] xl:w-[350px] h-[120px] text-[14px] md:text-[16px] xl:text-[18px] font-medium text-primary-0 pb-4 md:pb-[34px] xl:pb-10">
                        Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!
                    </span>
                    <div className="w-full h-0 opacity-20 border-t border-[#90A3BF]"></div>
                    <div className="flex gap-4 md:gap-6 xl:gap-8 items-center">
                        <span>
                            <img src={Image2} alt="" className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14" />
                        </span>
                        <div className="flex flex-col w-full md:w-[190px] xl:w-[220px] h-[48px] text-[14px] md:text-[16px] xl:text-[18px] text-primary-0 pb-2 md:pb-[34px] xl:pb-10">
                            <span className="w-full md:w-[155px] xl:w-[180px] h-[27px] text-[14px] md:text-[16px] xl:text-[18px] font-bold text-primary-0 ">
                                Natasha Romanoff
                            </span>
                            <span className="w-full md:w-[190px] xl:w-[220px] h-[21px] text-[12px] md:text-[14px] xl:text-[16px] text-secondary-200 ">
                                Black Widow
                            </span>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col w-full md:w-[384px] xl:w-[420px] p-4 md:p-8 xl:p-10 h-full md:h-[363px] xl:h-[400px] rounded-[12px] bg-secondary-500 gap-4 md:gap-8 xl:gap-10">
                    <span className="w-full md:w-[320px] xl:w-[350px] h-[27px] text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-primary-0 pb-2 md:pb-4 xl:pb-6">
                        No doubt, Spend.In is the best!
                    </span>
                    <span className="w-full md:w-[320px] xl:w-[350px] h-[120px] text-[14px] md:text-[16px] xl:text-[18px] font-medium text-primary-0 pb-4 md:pb-[34px] xl:pb-10">
                        “The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!
                    </span>
                    <div className="w-full h-0 opacity-20 border-t border-[#90A3BF]"></div>
                    <div className="flex gap-4 md:gap-6 xl:gap-8 items-center">
                        <span>
                            <img src={Image3} alt="" className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14" />
                        </span>
                        <div className="flex flex-col w-full md:w-[190px] xl:w-[220px] h-[48px] text-[14px] md:text-[16px] xl:text-[18px] text-primary-0 pb-2 md:pb-[34px] xl:pb-10">
                            <span className="w-full md:w-[122px] xl:w-[150px] h-[27px] text-[14px] md:text-[16px] xl:text-[18px] font-bold text-primary-0 ">
                                Jimmy Bartney
                            </span>
                            <span className="w-full md:w-[190px] xl:w-[220px] h-[21px] text-[12px] md:text-[14px] xl:text-[16px] text-secondary-200 ">
                                Product Manager at Picko Lab
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-row w-full hidden xl:flex md:w-[122px] h-[50px] gap-4 md:gap-6 xl:gap-8 items-center justify-center mt-4 md:mt-0">
                <button className="w-[50px] h-[50px] flex items-center justify-center">
                    <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="50" rx="24" fill="#1A202C" />
                        <path d="M22.1775 20.4473L17.625 24.9998L22.1775 29.5523" stroke="#C3D4E9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30.3749 25H17.7524" stroke="#C3D4E9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="flex w-[50px] h-[50px] bg-primary-500 justify-center items-center rounded-full ">
                    <svg width="48" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8225 4.44727L15.375 8.99977L10.8225 13.5523" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.625 9H15.2475" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default TestimonialsSection;