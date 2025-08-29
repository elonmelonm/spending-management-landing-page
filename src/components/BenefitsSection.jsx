import React from "react";
import Invoice from '../assets/Frame 33664.png';
import PayementHistory from '../assets/Frame 33664 (1).png';
import CardPayement from '../assets/Frame 33664 (2).png';

const BenefitsSection = () => {
    return (
        <section className="w-[1440px] h-[994px] relative bg-white flex flex-col">
            <div className="flex w-[1200px] h-[528px] absolute top-[346px] left-[120px] gap-6">
                <div className="flex flex-col w-[384px] h-[528px] gap-6">
                    <div className="w-[384px] h-[384px] rounded-[12px] bg-secondary-100">
                        <img src={Invoice} alt="" />
                    </div>
                    <div className="flex flex-col w-[384px] h-[120px] gap-3">
                        <span className="w-[300px] h-[36px] text-[24px] font-semibold text-secondary-900">
                            Automatic Invoice Payment
                        </span>
                        <p className="flex w-[384px] h-[72px] text-secondary-400">
                            No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-[384px] h-[528px] gap-6">
                    <div className="w-[384px] h-[384px] rounded-[12px] bg-secondary-100">
                        <img src={PayementHistory} alt="" />
                    </div>
                    <div className="flex flex-col w-[384px] h-[120px] gap-3">
                        <span className="w-[300px] h-[36px] text-[24px] font-semibold text-secondary-900">
                            Clear payment history
                        </span>
                        <p className="flex w-[384px] h-[72px] text-secondary-400">
                            No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-[384px] h-[528px] gap-6">
                    <div className="w-[384px] h-[384px] rounded-[12px] bg-secondary-100">
                        <img src={CardPayement} alt="" />
                    </div>
                    <div className="flex flex-col w-[384px] h-[120px] gap-3">
                        <span className="w-[300px] h-[36px] text-[24px] font-semibold text-secondary-900">
                            Automatic Invoice Payment
                        </span>
                        <p className="flex w-[384px] h-[72px] text-secondary-400">
                            No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex absolute w-[904px] h-[162px] top-[120px] left-[120px] gap-[163px]">
                <div className="flex flex-col w-[245px] h-[162px] gap-3">
                    <span className="w-[183px] h-[30px] text-primary-500 font-semibold text-[20px]">
                        WHY USE SPEND.IN
                    </span>
                    <span className="w-[245px] text-secondary-900 font-bold text-[40px] tracking-[-0.03em]">
                        Easy, Simple, Affordable
                    </span>
                </div>
                <p className="pt-[57px] pb-[15px] text-[20px] text-secondary-400">
                    Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                </p>
            </div>
        </section>
    );
};

export default BenefitsSection;