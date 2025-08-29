import React from "react";
import Success from '../assets/Content (2).png';

const CallToActionSection = () => {
    return (
        <section className="w-[1440px] h-[570px] relative bg-secondary-700 flex flex-col">
            <div className="flex flex-col w-[568px] h-[246px] absolute justify-center top-[120px] left-[120px] gap-3">
                <span className="w-[454px] h-[162px] text-primary-500 font-semibold text-[20px]">
                    <span className="w-[242px] h-[30px] text-primary-500 font-semibold text-[20px]">
                        DOWNLOAD NOW!
                    </span>
                    <p className="w-[470px] h-[120px] text-[40px] font-bold text-primary-0">
                        Start Track Your Business Expenses Today
                    </p>
                </span>
                <p className="w-[634px] h-[120x] text-[20px] text-secondary-400">
                    Are you ready to make your business more organized? Download Spend.In now!
                </p>
            </div>
            <div className="flex flex-row w-[368px] h-[56px] rounded-[30px] absolute top-[398px] left-[120px] gap-4">
                <button className="w-[187px] h-[52px] bg-primary-500 text-primary-0 border-none rounded-[30px]">
                    Get a Free Demo
                </button>
            </div>

            <div className="absolute top-[120px] left-[732px] ">
                <img src={Success} alt="" />
            </div>

            
        </section>
    );
};

export default CallToActionSection;
;