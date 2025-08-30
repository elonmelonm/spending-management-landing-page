import React from "react";
import Invoice from '../assets/Frame 33664.png';
import PayementHistory from '../assets/Frame 33664 (1).png';
import CardPayement from '../assets/Frame 33664 (2).png';

const BenefitsSection = () => {
    return (
        <section className="w-full h-[994px] p-[120px] items-center relative bg-white flex flex-col">
            <div className="flex flex-col gap-16">
                <div className="flex flex-row w-[904px] h-[162px] items-center justify-between">
                    <div className="flex flex-col min-w-[245px] h-[162px] gap-3">
                        <span className="min-w-[183px] h-[30px] text-primary-500 font-semibold text-[20px]">
                            WHY USE SPEND.IN
                        </span>
                        <span className="w-[285px] h-[120px] text-secondary-900 font-bold text-[40px] tracking-[-0.03em]">
                            Easy, Simple, Affordable
                        </span>
                    </div>
                    <p className="w-[496px] h-[90px] text-[20px] text-secondary-400">
                        Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                    </p>
                </div>

                <div className="flex w-[1200px] h-[528px] gap-6">
                    <div className="flex flex-col w-[384px] h-[528px] gap-6">
                        <div className="w-[384px] h-[384px] rounded-[12px] bg-secondary-100">
                            <img src={Invoice} alt="" />
                        </div>
                        <div className="flex flex-col w-[384px] h-[120px] gap-3">
                            <span className="h-[36px] text-[24px] font-semibold text-secondary-900">
                                Automatic Invoice Payment
                            </span>
                            <p className="flex w-full h-[72px] text-secondary-400">
                                No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[384px] h-[528px] gap-6">
                        <div className="w-[384px] h-[384px] rounded-[12px] bg-secondary-100">
                            <img src={PayementHistory} alt="" />
                        </div>
                        <div className="flex flex-col w-[384px] h-[120px] gap-3">
                            <span className="h-[36px] text-[24px] font-semibold text-secondary-900">
                                Clear payment history
                            </span>
                            <p className="flex w-full h-[72px] text-secondary-400">
                                No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[384px] h-[528px] gap-6">
                        <div className="w-[384px] h-[384px] rounded-[12px] bg-secondary-100">
                            <img src={CardPayement} alt="" />
                        </div>
                        <div className="flex flex-col w-[384px] h-[120px] gap-3">
                            <span className="h-[36px] text-[24px] font-semibold text-secondary-900">
                                Use of multi-card payments
                            </span>
                            <p className="flex w-full h-[72px] text-[16px] text-secondary-400">
                                Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!
                            </p>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default BenefitsSection;