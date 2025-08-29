import React from "react";
import Success from '../assets/Success Stories.png';

const SuccessStorieSection = () => {
    return (
        <section className="w-[1440px] h-[890px] relative bg-white flex flex-col">
            <div className="flex flex-col w-[634px] h-[162px] absolute justify-center top-[120px] left-[120px] gap-3">
                <span className="w-[242px] h-[30px] text-primary-500 font-semibold text-[20px]">
                    INCREASE PRODUCTIVITY
                </span>
                <p className="w-[634px] h-[120x] text-[40px] font-bold text-secondary-700">
                    Reduce Time in Doing Manual Work Managing Expenses
                </p>
            </div>
            <div className="flex flex-row w-[368px] h-[56px] rounded-[30px] absolute top-[346px] left-[120px] gap-4">
                <button className="w-[169px] h-[52px] bg-primary-500 text-primary-0 border-none rounded-[30px]">
                    With Spend.In
                </button> 
                <button className="w-[169px] h-[52px] bg-secondary-100 text-secondary-300 border-none rounded-[30px]">
                    With Spend.In
                </button> 
            </div>

            <div className="w-[486px] h-[434px] absolute top-[346px] left-[834px] rounded-[12px]">
                <img src={Success} alt="" />
            </div>

            <div className="flex flex-col w-[526px] h-[294px] p-8 text-secondary-700 absolute justify-center top-[450px] left-[120px] rounded-[12px] gap-8">
                <span className="w-[475px] h-[36px] text-secondary-700 font-bold  ">
                    Track Business Expenses until its Milisecond
                </span>
                <div className="w-[526px] h-[54px] text-[18px] flex flex-row gap-4">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#9CD323"/>
                        </svg>
                    </span>
                    <p className="w-[490px] h-[54px] text-[18px]">
                        Analyze your business cost easily with group transaction thorugh tagging feature.
                    </p>
                </div>
                <div className="w-[526px] h-[54px] text-[18px] flex flex-row gap-4">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#9CD323"/>
                        </svg>
                    </span>
                    <p className="w-[490px] h-[54px] text-[18px]">
                        Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.
                    </p>
                </div>
                <div className="w-[526px] h-[54px] text-[18px] flex flex-row gap-4">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#9CD323"/>
                        </svg>
                    </span>
                    <p className="w-[490px] h-[54px] text-[18px]">
                        Arrange your business expenses by date, name, etc.,  with just one click.
                    </p>
                </div>
            </div>

            
        </section>
    );
};

export default SuccessStorieSection;
;