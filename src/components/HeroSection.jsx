import Dashboard from '../assets/Dashboard.png';
import Elipse10 from '../assets/Ellipse 10.png';
import Elipse12 from '../assets/Ellipse 12.png';
import Elipse101 from '../assets/Ellipse 10 (1).png';
import Elipse121 from '../assets/Ellipse 12 (1).png';

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center w-full h-[589px] lg:h-[972px] px-7 lg:px-[120px] pb-0 pt-12 lg:pt-[120px] bg-secondary-700 border-b">
            {/* Desktop Ellipses */}
            <img className="absolute bottom-0 right-0 hidden lg:block" src={Elipse10} alt="" />
            <img className="absolute bottom-0 left-0 hidden lg:block" src={Elipse12} alt="" />
            {/* Mobile Ellipses */}
            <img className="absolute bottom-0 right-0 block lg:hidden" src={Elipse101} alt="" />
            <img className="absolute bottom-0 left-0 block lg:hidden" src={Elipse121} alt="" />

            <div className="flex flex-col w-[317px] h-[237px] lg:h-full lg:w-full gap-3 lg:gap-6 lg:justify-center lg:items-center">
                <div className="flex h-[216px] text-primary-0 font-bold text-[36px] lg:text-[72px] leading-[150%] tracking-[-0.03em] lg:text-center">
                    All your business <br /> expenses in one place.
                </div>
                <div className="flex w-[314px] h-[63px] lg:w-full lg:h-[72px] justify-center text-[14px] lg:text-[24px] lg:text-center text-secondary-300 gap-6">
                    <p>
                        Your one-stop finance empower platform. <br />
                        Manage all your business expenses with our supafast app.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-[319px] lg:w-[352px] h-[128px] lg:h-[52px] mt-10 text-primary-0 gap-6">
                <button className="w-[319px] lg:w-[187px] h-[52px] bg-primary-500 border-none rounded-[30px]">
                    Get a Free Demo
                </button>
                <button className="w-[319px] lg:w-[141px] h-[52px] bg-secondary-500 border-none rounded-[30px]">
                    See Pricing
                </button>
            </div>
            <div className="mt-[80px] lg:justify-end lg:items-end w-[319px] h-[226.7px] md:w-[450px] md:h-[200px] lg:w-[850px] lg:h-[502px] xl:w-[1200px] xl:h-[852px]">
                <img src={Dashboard} alt="" />
            </div>
        </section>
    );
};

export default HeroSection;