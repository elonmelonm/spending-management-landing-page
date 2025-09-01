import Success from '../assets/Success Stories.png';

const SuccessStorieSection = () => {
    return (
        <section className="w-full min-h-[500px] md:h-[890px] px-4 md:px-[120px] py-12 md:py-[120px] items-center relative bg-white flex flex-col">
            <div className="flex flex-col gap-8 md:gap-16 w-full max-w-[1200px] mx-auto">
                <div className="flex flex-col md:w-[634px] md:h-[162px] w-full justify-center gap-3 mx-auto">
                    <span className="w-full h-[30px] text-primary-500 font-semibold text-[18px] md:text-[20px]">
                        INCREASE PRODUCTIVITY
                    </span>
                    <p className="w-full md:w-[634px] text-[28px] md:text-[40px] font-bold text-secondary-700">
                        Reduce Time in Doing Manual Work Managing Expenses
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-[88px] w-full items-center justify-center">
                    <div className="flex flex-col gap-8 md:gap-12 w-full md:w-auto">
                        <div className="flex flex-row w-full md:w-[368px] h-[56px] rounded-[30px] gap-2 md:gap-4">
                            <button className="flex-1 min-w-[120px] h-[44px] md:w-[169px] md:h-[52px] bg-primary-500 text-primary-0 border-none rounded-[30px] text-sm md:text-base">
                                With Spend.In
                            </button>
                            <button className="flex-1 min-w-[120px] h-[44px] md:w-[169px] md:h-[52px] bg-secondary-100 text-secondary-300 border-none rounded-[30px] text-sm md:text-base">
                                With Spend.In
                            </button>
                        </div>
                        <div className="flex flex-col w-full md:w-[526px] md:h-[294px] p-4 md:p-8 text-secondary-700 justify-center rounded-[12px] gap-4 md:gap-8 bg-secondary-50">
                            <span className="w-full md:w-[475px] h-[36px] text-secondary-700 font-bold text-base md:text-xl">
                                Track Business Expenses until its Milisecond
                            </span>
                            <div className="w-full text-[16px] md:text-[18px] flex flex-row gap-2 md:gap-4 items-start">
                                <span className="flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#9CD323" />
                                    </svg>
                                </span>
                                <p className="w-full">
                                    Analyze your business cost easily with group transaction thorugh tagging feature.
                                </p>
                            </div>
                            <div className="w-full text-[16px] md:text-[18px] flex flex-row gap-2 md:gap-4 items-start">
                                <span className="flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#9CD323" />
                                    </svg>
                                </span>
                                <p className="w-full">
                                    Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.
                                </p>
                            </div>
                            <div className="w-full text-[16px] md:text-[18px] flex flex-row gap-2 md:gap-4 items-start">
                                <span className="flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#9CD323" />
                                    </svg>
                                </span>
                                <p className="w-full">
                                    Arrange your business expenses by date, name, etc.,  with just one click.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[486px] h-[220px] md:h-[434px] rounded-[12px] flex items-center justify-center mt-8 md:mt-0">
                        <img src={Success} alt="" className="w-full h-full object-contain rounded-[12px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStorieSection;
;