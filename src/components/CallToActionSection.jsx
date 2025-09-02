import Success from '../assets/Content (2).png';

const CallToActionSection = () => {
    return (
        <section className="w-full min-h-[300px] md:h-[570px] lg:h-[650px] xl:h-[700px] items-center pt-8 md:pt-[80px] lg:pt-[100px] xl:pt-[120px] px-4 md:px-12 lg:px-20 xl:px-[120px] relative bg-secondary-700 flex flex-col">
            <div className="flex flex-col md:flex-row gap-8 md:gap-11 lg:gap-16 xl:gap-20 w-full items-center justify-between">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full md:w-auto">
                    <div className="flex flex-col w-full md:w-[568px] lg:w-[600px] xl:w-[650px] justify-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
                        <span className="w-full md:w-[242px] h-[30px] text-primary-500 font-semibold text-[14px] md:text-[20px] xl:text-[22px]">
                            DOWNLOAD NOW!
                        </span>
                        <p className="w-full h-[40px] md:h-[120px] lg:h-[140px] xl:h-[162px] text-[20px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold text-primary-0 mt-2 md:mt-0">
                            Start Track Your Business Expenses Today
                        </p>
                        <p className="w-full md:w-[568px] lg:w-[600px] xl:w-[650px] text-[14px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-secondary-400 mt-2">
                            Are you ready to make your business more organized? Download Spend.In now!
                        </p>
                    </div>
                    <div className="flex flex-row w-full md:w-[368px] h-[44px] md:h-[56px] lg:h-[60px] xl:h-[64px] rounded-[30px] gap-2 md:gap-4 mt-4">
                        <button className="w-full md:w-[187px] h-[44px] md:h-[52px] lg:h-[56px] xl:h-[60px] bg-primary-500 text-primary-0 border-none rounded-[30px] text-sm md:text-base lg:text-lg xl:text-xl">
                            Get a Free Demo
                        </button>
                    </div>
                </div>
                <div className="flex items-end w-full md:w-auto justify-center md:justify-end mt-8 md:mt-0 md:hidden xl:block">
                    <img className="w-full max-w-[320px] md:max-w-none md:w-[320px] lg:w-[400px] xl:w-[500px]" src={Success} alt="" />
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;