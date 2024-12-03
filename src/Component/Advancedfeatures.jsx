import featuresbig from "../Static/images/featuresbig_img.png";
import featureicon_1 from "../Static/images/Featureicon_1.png";
import featureicon_2 from "../Static/images/Featureicon_2.png";
import featureicon_3 from "../Static/images/Featureicon_3.png";
import iphone12 from "../Static/images/iPhone_12_Pro_mockup.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Advancedfeatures=()=>{
    return (
        <div className="w-full max-w-[1440px] py-10 sm:py-[96px] bg-white">
            <div className="w-full flex flex-col gap-[32px] items-center justify-center">
                <div className="flex flex-col gap-2 justify-center items-center px-4">
                    <div className="w-[83px] h-[28px] rounded-[16px] border py-[4px] px-[12px] bg-[#F9F5FF] border-[#E9D7FE]">
                        <p className="font-medium text-[14px] leading-[20px] text-center text-[#6941C6]">Features</p>
                    </div>
                     <p className="font-semibold text-[30px] sm:text-[36px] leading-[38px] sm:leading-[44px] -tracking-[2%] text-center">Cutting-edge features for advanced analytics</p>
                     <p className="max-w-[768px] font-normal text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] text-center text-[#475467]"> 
                     Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                     </p>
                </div>
                <div className="hidden sm:flex">
                    <img src={featuresbig}/>
                </div>
                <div className="max-w-[284px] sm:hidden mx-auto">
                    <img src={iphone12}/>
                </div>
            </div>
            <div className="w-full h-auto min-h-[178px] flex flex-col md:flex-row gap-[32px] justify-center items-center py-3 px-4">
                    <div className="max-w-[220px] sm:max-w-[290px] md:max-w-[330px] h-auto min-h-[110px] flex flex-col justify-center items-center gap-2 ">
                        <img className="w-[48px] h-[48px] rounded-[10px]" src={featureicon_1}/>
                        <div className="flex flex-col items-center gap-2 ">
                           <p className="font-semibold text-[20px] leading-[30px] text-center text-[#101828]">
                           Share team inboxes
                           </p>
                           <p className="font-normal text-[16px] leading-[24px] text-center text-[#475467]">
                           Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                           </p>
                           <div className="flex flex-row gap-2 justify-center items-center cursor-pointer"><p className="font-semibold text-[16px] leading-[24px] text-[#6941C6]">Learn More</p><span className="pt-1"><FaArrowRightLong color="#6941C6"/></span></div>
                        </div>


                    </div>
                    <div className="max-w-[220px] sm:max-w-[290px] md:max-w-[384px] h-auto min-h-[110px] flex flex-col justify-center items-center gap-2 ">
                        <img className="w-[48px] h-[48px] rounded-[10px]" src={featureicon_2}/>
                        <div className="flex flex-col items-center gap-2 ">
                           <p className="font-semibold text-[20px] leading-[30px] text-center text-[#101828]">
                           Share team inboxes
                           </p>
                           <p className="font-normal text-[16px] leading-[24px] text-center text-[#475467]">
                           Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                           </p>
                           <div className="flex flex-row gap-2 justify-center items-center cursor-pointer"><p className="font-semibold text-[16px] leading-[24px] text-[#6941C6]">Learn More</p><span className="pt-1"><FaArrowRightLong color="#6941C6"/></span></div>
                        </div>


                    </div>
                    <div className="max-w-[220px] sm:max-w-[290px] md:max-w-[330px] lg:max-w-[384px] h-auto min-h-[110px] flex flex-col justify-center items-center gap-2 ">
                        <img className="w-[48px] h-[48px] rounded-[10px]" src={featureicon_3}/>
                        <div className="flex flex-col items-center gap-2 ">
                           <p className="font-semibold text-[20px] leading-[30px] text-center text-[#101828]">
                           Share team inboxes
                           </p>
                           <p className="font-normal text-[16px] leading-[24px] text-center text-[#475467]">
                           Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                           </p>
                           <div className="flex flex-row gap-2 justify-center items-center cursor-pointer"><p className="font-semibold text-[16px] leading-[24px] text-[#6941C6]">Learn More</p><span className="pt-1"><FaArrowRightLong color="#6941C6"/></span></div>
                        </div>

                    </div>
                </div>
       </div>
    )
}

export default Advancedfeatures;