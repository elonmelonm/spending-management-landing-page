import Dashboard from '../assets/Dashboard.png';
import Elipse10 from '../assets/Ellipse 10.png';
import Elipse12 from '../assets/Ellipse 12.png';

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center w-full h-[972px] px-[120px] pb-0 pt-[120px] bg-secondary-700 border-b">
            <img className="absolute bottom-0 right-0" src={Elipse10} alt="" />
            <img className="absolute bottom-0 left-0" src={Elipse12} alt="" />
            <div className="flex flex-col w-full gap-6 justify-center items-center">
                <div className="flex h-[216px] text-center text-primary-0 font-bold text-[72px] leading-[150%] tracking-[-0.03em]">
                    All your business <br /> expenses in one place.
                </div>
                <div className="flex w-full h-[72px] justify-center text-[24px] text-center text-secondary-300 gap-6">
                    <p>Your one-stop finance empower platform. <br></br> Manage all your business expenses with our supafast app.
                    </p>
                </div>
            </div>
            <div className="flex w-[352px] h-[52px] mt-10 text-primary-0 gap-6">
                <button className="w-[187px] h-[52px] bg-primary-500 border-none rounded-[30px]">
                    Get a Free Demo
                </button>
                <button className="w-[141px] h-[52px] bg-secondary-500 border-none rounded-[30px]">
                    See Pricing
                </button>
            </div>
            <div className="mt-[80px] justify-end items-end w-[1200px] h-[852">
                <img src={Dashboard} alt="" />
            </div>
        </section>
    );
};

export default HeroSection;