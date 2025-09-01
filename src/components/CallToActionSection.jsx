import Success from '../assets/Content (2).png';

const CallToActionSection = () => {
    return (
        <section className="w-full min-h-[300px] md:h-[570px] items-center pt-8 md:pt-[120px] px-4 md:px-[120px] relative bg-secondary-700 flex flex-col">
            <div className="flex flex-col md:flex-row gap-8 md:gap-11 w-full items-center justify-between">
                <div className="flex flex-col gap-6 md:gap-8 w-full md:w-auto">
                    <div className="flex flex-col w-full md:w-[568px] md:h-[246px] justify-center gap-2 md:gap-3">
                        <span className="w-full md:w-[550px] h-[40px] md:h-[162px] text-primary-500 font-semibold text-[18px] md:text-[20px]">
                            <span className="w-full md:w-[242px] h-[30px] text-primary-500 font-semibold text-[18px] md:text-[20px]">
                                DOWNLOAD NOW!
                            </span>
                            <p className="w-full h-[40px] md:h-[120px] text-[24px] md:text-[40px] font-bold text-primary-0 mt-2 md:mt-0">
                                Start Track Your Business Expenses Today
                            </p>
                        </span>
                        <p className="w-full md:w-[568px] text-[16px] md:text-[20px] text-secondary-400 mt-2">
                            Are you ready to make your business more organized? Download Spend.In now!
                        </p>
                    </div>
                    <div className="flex flex-row w-full md:w-[368px] h-[44px] md:h-[56px] rounded-[30px] gap-2 md:gap-4 mt-4">
                        <button className="w-full md:w-[187px] h-[44px] md:h-[52px] bg-primary-500 text-primary-0 border-none rounded-[30px] text-sm md:text-base">
                            Get a Free Demo
                        </button>
                    </div>
                </div>
                <div className="flex items-end w-full md:w-auto justify-center md:justify-end mt-8 md:mt-0">
                    <img className="w-full max-w-[320px] md:max-w-none md:w-auto" src={Success} alt="" />
                </div>
            </div>






        </section>
    );
};

export default CallToActionSection;
;