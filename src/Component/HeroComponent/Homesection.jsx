import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import bigimg from "../../Static/images/herohomepagebig.png";
import partner1 from '../../Static/images/partner_1.png';
import partner2 from '../../Static/images/partner_2.png';
import partner3 from '../../Static/images/partner_3.png';
import partner4 from '../../Static/images/partner_4.png';
import partner5 from '../../Static/images/partner_5.png';
import partner6 from '../../Static/images/partner_6.png';
const Homesection = () => {
    return (
        <div className="w-full h-auto flex flex-col justify-center pt-10 md:pt-[96px] z-40 ">
            <div className="w-full h-auto min-h-[312px] px-[32px] gap-[32px] ">
                <div className="w-full  min-h-[321px] h-auto gap-[48px]">   
                    <div className="h-auto min-h-[204px]">
                        <div className="w-full flex flex-col justify-center h-auto min-h-[120px] mx-auto  items-center">
                            <div className="flex items-center w-auto max-w-[307px] sm:max-w-[355px] h-auto mb-1 min-h-[30px] sm:min-h-[32px] mx-auto bg-[#F9F5FF] rounded-[16px] border border-[#E9D7FE] py-[4px] pl-[4px] sm:pr-[10px] sm:gap-3">
                                <div className="bg-white w-auto min-w-[87px] sm:min-w-[102px] h-auto min-h-[22px] sm:min-h-[24px] rounded-[16px] border-[1px] border-[#D6BBFB] mx-auto px-2 sm:py-[2px] sm:px-[10px]">
                                    <p className="flex font-medium text-[12px] sm:text-[14px] items-center leading-[18px] sm:leading-[20px] text-[#6941C6]">
                                        New feature
                                    </p>
                                </div>
                                <div className=" flex items-center w-auto max-w-[227px] h-auto sm:gap-1 ">
                                    <p className="font-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#6941C6] px-[1px] sm:px-[0px]">
                                        Check out the team dashboard
                                    </p>
                                    <span className="w-[16px] h-[16px] pt-[1px]"><FaArrowRightLong color="#9E77ED" /></span>
                                </div>
                            </div>
                            <div className="max-w-[310px] sm:max-w-[343px] md:max-w-full h-auto font-inter text-[36px] sm:text-6xl font-semibold leading-[44px] sm:leading-[72px] -tracking-[0.02em] text-center decoration-none">
                                Beautiful analytics to grow smarter
                            </div>
                            <div className="font-inter text-[18px] sm:text-[20px] font-normal leading-[28px] sm:leading-[30px]  decoration-none text-[#475467]">
                                Powerful, self-serve product and growth analytics to help you convert, engage,<br className="hidden sm:flex" />and retain more users. Trusted by over 4,000 startups.
                            </div>
                        </div>
                        <div className="flex mt-3 justify-center sm:flex-row flex-col sm:gap-3 gap-2 min-w-[277px] min-h-[60px]">
                            <div className="inline-flex justify-center items-center cursor-pointer order-2 sm:order-1 min-w-[143px] min-h-[60px] rounded-[8px] border border-[#D0D5DD] py-[10px] sm:py-[16px] px-[28px] gap-[12px] bg-white">
                                <span><FaRegCirclePlay /></span>
                                <p className="font-semibold text-[18px] leading-[28px] text-[#344054]">Demo</p>
                            </div>

                            <div className="inline-flex justify-center items-center cursor-pointer min-w-[100px] sm:max-w-[122px] order-1 sm:order-2 sm:min-h-[60px] rounded-[8px] border border-[#7F56D9] py-[10px] sm:py-[16px] px-[28px] gap-[12px] bg-[#7F56D9]">
                                <p className="font-semibold text-[18px] leading-[28px] text-white">Sign up</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="w-full max-w-[1216px] h-auto flex flex-col mx-auto px-[8px] sm:px-[15px] sm:relative py-6">
                {/* Hero Image */}
                <div className="w-full mx-auto h-auto rounded-[12px] border-[8px] border-[#101828] " style={{
                    boxShadow: "4px -4px 12px rgba(0, 0, 0, 0.1), -4px -4px 12px rgba(0, 0, 0, 0.1), 4px 4px 0 rgba(0, 0, 0, 0)",
                }}>
                    <img className="w-fit h-fit rounded-[12px]" src={bigimg} alt="Hero Image" />
                </div>

                {/* Logos Section */}
                <div className="sm:absolute bottom-0 left-0 w-full bg-white border-b border-[#F2F4F7] flex justify-center items-center  py-6 sm:py-8 md:py-12 z-10">
                    <div className="w-full mx-auto xl:py-8">
                        <p className="font-medium text-[16px] leading-[24px] text-center mb-4 text-[#475467] pb-3">
                            Join 4,000+ companies already growing
                        </p>
                        <div className="flex flex-wrap justify-center sm:flex-row md:flex-row gap-4 xl:gap-8 md:gap-6 items-center">
                            <img className=" max-w-[100px] md:max-w-[150px] lg:max-w-[185px] xl:max-w-[180px] xl:h-[48px] sm:max-w-[100px]" src={partner1} alt="Logo 1" />
                            <img className=" max-w-[100px] md:max-w-[150px] lg:max-w-[185px] xl:max-w-[180px] xl:h-[48px] sm:max-w-[100px]" src={partner2} alt="Logo 2" />
                            <img className=" max-w-[100px] md:max-w-[150px] lg:max-w-[185px] xl:max-w-[180px] xl:h-[48px] sm:max-w-[100px]" src={partner3} alt="Logo 3" />
                            <img className=" max-w-[100px] md:max-w-[150px] lg:max-w-[185px] xl:max-w-[180px] xl:h-[48px] sm:max-w-[100px]" src={partner4} alt="Logo 4" />
                            <img className=" max-w-[100px] md:max-w-[150px] lg:max-w-[185px] xl:max-w-[180px] xl:h-[48px] sm:max-w-[100px]" src={partner5} alt="Logo 5" />
                            <img className=" max-w-[100px] md:max-w-[150px] lg:max-w-[185px] xl:max-w-[180px] xl:h-[48px] sm:max-w-[100px]" src={partner6} alt="Logo 6" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Social Proof Section */}

        </div>
    );
};

export default Homesection;
