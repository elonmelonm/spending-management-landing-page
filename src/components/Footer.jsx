import Logo from "../assets/LogoLight.png";

const Footer = () => {
    return (
        <footer className="p-[120px]">
            <div className="w-[1200px] h-[403px] mx-auto grid grid-cols-1  gap-x-10 gap-y-10">
                {/* Spend.In */}
                <div className="flex flex-col w-[188px] h-[145px] gap-8">
                    <div className="w-[144px] h-8 font-bold mb-2">
                        <img src={Logo} alt="Spend.In" />
                    </div>
                    <p className="w-full h-[81px] text-[18px] text-secondary-400">
                        Data visualization, and expense management for your business.
                    </p>
                </div>

                {/* Product */}
                <div className='flex flex-col w-[147px] h-[278px] gap-8'>
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
                <div className='flex flex-col w-[93px] h-[278px] gap-8'>
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
                <div className='flex flex-col w-[111px] h-[278px] gap-8'>
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
                <div className='flex flex-col w-[90px] h-[278px] gap-8'>
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
                <div className="md:col-span-6 border-t border-primary-200 pt-6 flex flex-col md:flex-row justify-between items-center font-semibold text-[18px] text-secondary-500 gap-4">
                    <div className="flex gap-8">
                        <a href="#">Privacy Policy</a>
                        <span>|</span>
                        <a href="#">Terms & Conditions</a>
                        <span>|</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                    <div className='text-secondary-500 font-medium text-4'>© Pitchlo Lab 2022</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
