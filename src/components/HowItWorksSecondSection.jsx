import Content from '../assets/Content (1).png';
import Elipse9 from '../assets/Ellipse 9.png';
import Elipse10 from '../assets/Ellipse 10.png';

const HowItWorksSecondSection = () => {
    return (
        <section className="w-full h-[776px] items-center py-[120px] pl-[120px] pr-[104px] relative bg-secondary-700 flex flex-col">
            <img className="absolute top-0 left-0" src={Elipse9} alt="" />
            <img className="absolute bottom-0 right-0" src={Elipse10} alt="" />
            <div className="flex flex-row gap-[102px] ">
                <div className="w-[588px] h-[536px] rounded-[12px]">
                    <img src={Content} alt="" />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col w-[550px] h-[216px] justify-center gap-6">
                        <div className="w-full h-[102px] flex flex-col justify-center  gap-3">
                            <span className="w-[183px] h-[30px] text-primary-500 font-semibold text-[20px]">
                                HOW IT WORKS
                            </span>
                            <span className="w-full h-[60px] text-primary-0 font-bold text-[40px] tracking-[-0.03em]">
                                Few Easy Steps and Done
                            </span>
                        </div>
                        <div className="w-[491px] h-[90px] text-secondary-400 text-[20px]">
                            In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
                        </div>
                    </div>
                    <div className="flex flex-col w-[576px] h-[288px] p-8 bg-secondary-500 justify-center rounded-[12px] gap-10">
                        <div className="w-[358px] h-[48px] flex flex-row items-center  gap-4">
                            <span>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#7C5CFC" />
                                    <path d="M23.5247 34.72V19.24H20.0927V16.84H26.3327V34.72H23.5247Z" fill="white" />
                                </svg>
                            </span>
                            <p className="w-[294px] h-[30px] text-primary-0 text-[20px]">
                                Register your Spend.In account.
                            </p>
                        </div>
                        <div className="w-[358px] h-[48px] flex flex-row items-center  gap-4">
                            <span>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#7C5CFC" />
                                    <path d="M18.0281 32.72H29.9081V30.32H21.7721L26.0921 25.712C27.2761 24.432 28.1481 23.336 28.7081 22.424C29.2841 21.496 29.5721 20.544 29.5721 19.568C29.5721 18.576 29.3321 17.704 28.8521 16.952C28.3881 16.2 27.7321 15.616 26.8841 15.2C26.0361 14.768 25.0441 14.552 23.9081 14.552C22.9321 14.552 22.0281 14.744 21.1961 15.128C20.3641 15.512 19.6601 16.056 19.0841 16.76C18.5081 17.448 18.1161 18.264 17.9081 19.208L20.4041 19.928C20.6441 19 21.0761 18.296 21.7001 17.816C22.3241 17.32 23.0681 17.072 23.9321 17.072C24.7801 17.072 25.4601 17.312 25.9721 17.792C26.5001 18.272 26.7641 18.936 26.7641 19.784C26.7641 20.312 26.6441 20.816 26.4041 21.296C26.1641 21.776 25.7641 22.336 25.2041 22.976C24.6441 23.6 23.8841 24.424 22.9241 25.448L18.0281 30.68V32.72Z" fill="white" />
                                </svg>

                            </span>
                            <p className="w-[356px] h-[30px] text-primary-0 text-[20px]">
                                Fill in the list of your business expenses.
                            </p>
                        </div>
                        <div className="w-[358px] h-[48px] flex flex-row items-center  gap-4">
                            <span>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="white" />
                                    <path d="M23.696 34.0082C22.736 34.0082 21.832 33.8322 20.984 33.4802C20.152 33.1282 19.432 32.6322 18.824 31.9922C18.232 31.3522 17.808 30.6002 17.552 29.7362L19.952 28.8242C20.272 29.6722 20.76 30.3282 21.416 30.7922C22.072 31.2562 22.832 31.4882 23.696 31.4882C24.4 31.4882 25.008 31.3522 25.52 31.0802C26.048 30.8082 26.456 30.4242 26.744 29.9282C27.048 29.4322 27.2 28.8322 27.2 28.1282C27.2 27.4402 27.048 26.8482 26.744 26.3522C26.456 25.8562 26.048 25.4802 25.52 25.2242C25.008 24.9682 24.4 24.8402 23.696 24.8402C23.408 24.8402 23.112 24.8642 22.808 24.9122C22.52 24.9602 22.264 25.0242 22.04 25.1042L21.416 23.7842L26.12 18.2402H18.512V15.8402H29.288V18.1202L24.68 23.6402L24.608 22.7282C25.68 22.7442 26.624 22.9842 27.44 23.4482C28.256 23.8962 28.888 24.5202 29.336 25.3202C29.8 26.1042 30.032 27.0162 30.032 28.0562C30.032 29.1762 29.76 30.1922 29.216 31.1042C28.672 32.0002 27.92 32.7122 26.96 33.2402C26.016 33.7522 24.928 34.0082 23.696 34.0082Z" fill="#1A202C" />
                                </svg>

                            </span>
                            <p className="w-[272px] h-[30px] text-primary-0 text-[20px]">
                                Done, let’s continue the work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSecondSection;