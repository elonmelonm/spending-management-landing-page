import Logo from "../assets/LogoLight.png";

const Footer = () => {
    return (
        <footer className="px-4 py-8 md:px-12 md:py-16 lg:px-20 lg:py-20 xl:px-[120px] xl:py-[120px] bg-white">
            <div className="w-full lg:w-[900px]  xl:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-10 lg:gap-x-12 xl:gap-x-16 gap-y-8 md:gap-y-10">
                {/* Spend.In */}
                <div className="flex flex-col w-full lg:w-[188px] gap-4 md:gap-8 items-center lg:items-start">
                    <div className="w-[144px] h-8 font-bold mb-2 mx-auto lg:mx-0">
                        <img src={Logo} alt="Spend.In" />
                    </div>
                    <p className="w-full text-[16px] md:text-[18px] xl:text-[20px] text-secondary-400 text-center lg:text-left">
                        Data visualization, and expense management for your business.
                    </p>
                </div>

                {/* Product */}
                <div className='flex flex-col w-full lg:w-[147px] gap-4 md:gap-8 md:items-center lg:items-start'>
                    <h3 className="text-5 font-medium mb-3 text-secondary-500">Product</h3>
                    <ul className="flex flex-col text-4 text-secondary-400 gap-6">
                        <li>Digital Invoice</li>
                        <li>Insights</li>
                        <li>Reimbursements</li>
                        <li>Virtual Assistant</li>
                        <li>Artificial Intelligence</li>
                    </ul>
                </div>

                {/* Company */}
                <div className='flex flex-col w-full lg:w-[93px] gap-4 md:gap-8 md:items-center lg:items-start'>
                    <h3 className="text-5 font-medium mb-3 text-secondary-500">Company</h3>
                    <ul className="flex flex-col text-4 text-secondary-400 gap-6">
                        <li>About Us</li>
                        <li>Newsletters</li>
                        <li>Our Partners</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className='flex flex-col w-full lg:w-[111px] gap-4 md:gap-8 md:items-center lg:items-start'>
                    <h3 className="text-5 font-medium mb-3 text-secondary-500">Resources</h3>
                    <ul className="flex flex-col text-4 text-secondary-400 gap-6">
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Events</li>
                        <li>Ebook & Guide</li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className='flex flex-col w-full lg:w-[90px] gap-4 md:gap-8 md:items-center lg:items-start'>
                    <h3 className="text-5 font-medium mb-3 text-secondary-500">Follow Us</h3>
                    <ul className="flex flex-col text-4 text-secondary-400 gap-6">
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                    </ul>
                </div>

                {/* Footer Links */}
                <div className="col-span-1 md:col-span-3 lg:col-span-5 border-t border-primary-200 pt-6 flex flex-col lg:flex-row justify-between md:items-center font-semibold text-[16px] md:text-[18px] xl:text-[20px] text-secondary-500 gap-4">
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center">
                        <a href="#">Privacy Policy</a>
                        <span className="hidden lg:inline">|</span>
                        <a href="#">Terms & Conditions</a>
                        <span className="hidden lg:inline">|</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                    <div className='text-secondary-500 font-medium text-4 text-center'>© Pitchlo Lab 2022</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
