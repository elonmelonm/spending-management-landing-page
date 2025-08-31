import Dashboard from '../assets/Dashboard.png';
import Elipse10 from '../assets/Ellipse 10.png';
import Elipse12 from '../assets/Ellipse 12.png';
import Elipse101 from '../assets/Ellipse 10 (1).png';
import Elipse121 from '../assets/Ellipse 12 (1).png';

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center w-full h-[589px] md:h-[972px] px-7 mb:px-[120px] pb-0 pt-12 md:pt-[120px] bg-secondary-700 border-b">
            <img className="absolute bottom-0 right-0 md:block hidden" src={Elipse10} alt="" />
            <img className="absolute bottom-0 left-0 md:block hidden" src={Elipse12} alt="" />

            <img className="absolute bottom-0 right-0 md:hidden block" src={Elipse101} alt="" />
            <img className="absolute bottom-0 left-0 md:hidden block" src={Elipse121} alt="" />
            <div className="flex flex-col w-[317px] h-[237px] md:h-full md:w-full gap-3 md:gap-6 md:justify-center md:items-center">
                <div className="flex h-[216px] md:text-center text-primary-0 font-bold text-[36px] md:text-[72px] leading-[150%] tracking-[-0.03em]">
                    All your business <br /> expenses in one place.
                </div>
                <div className="flex w-[314px] h-[63px] md:w-full md:h-[72px] justify-center text-[14px] md:text-[24px] md:text-center text-secondary-300 gap-6">
                    <p>Your one-stop finance empower platform. <br></br> Manage all your business expenses with our supafast app.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center w-[319px] md:w-[352px] h-[128px] md:h-[52px] mt-10 text-primary-0 gap-6">
                <button className="w-[319px] md:w-[187px] h-[52px] bg-primary-500 border-none rounded-[30px]">
                    Get a Free Demo
                </button>
                <button className="w-[319px] md:w-[141px] h-[52px] bg-secondary-500 border-none rounded-[30px]">
                    See Pricing
                </button>
            </div>
            <div className="md: mt-[80px] md:justify-end md:items-end w-[319px] h-[226.71786499023438px] md:w-[1200px] md:h-[852px]">
                <img src={Dashboard} alt="" />
            </div>
        </section>
    );
};

export default HeroSection;