import { FaChevronDown } from "react-icons/fa";
import logo from "../../Static/images/Logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    console.log(isOpen);
    return (
        <div className="border-b border-[#F2F4F7] ">
            <div className=" inline-flex items-center w-full h-auto sm:h-[80px] py-3">
                <div className="inline-flex w-full  h-[40px] sm:flex justify-between items-center lg:px-20 md:p-8 sm:p-4 hidden">
                    <div className="inline-flex max-w-[50%] max-h-[40px] gap-10 items-center">
                        <div className="inline-flex w-[142px] h-[32px]">
                            <div className="w-[142px] h-[32px] ">
                                <img src={logo} />
                            </div>
                        </div>
                        <div className="flex inline-flex gap-8 sm:gap-4 items-center">
                            <p className="inline-flex gap-2 min-w-[46px] min-h-[24px] py-1">Home</p>
                            <p className="inline-flex w-[98px] h-[24px] flex items-center gap-2 py-1">Products<FaChevronDown /></p>
                            <p className="inline-flex w-[98px] h-[24px] flex items-center gap-2 py-1">Resources<FaChevronDown /></p>
                            <p className="inline-flex gap-2 min-w-[46px] min-h-[24px] py-1">Pricing</p>
                        </div>
                    </div>
                    <div className=" max-w-[50%] inline-flex w-[40px] h-[40px]">
                        <img className="w-[40px] h-[40px] rounded-[200px]" src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lW7zkE1k7NR-QogEy8sYiAjqBvXRMBpbkmBH0n9P4EnmT4NfaEuXgfpvSgeDAam6jWPkaEwf8-yPWvfxgaCgkR2hQ8Ls5P-uHbbmecqS13SCHP3eodmZwDleY4p1lY6Gc4oisH1EaTcHgp5Ud92EP-JMK5rmZZTDPo7Yiy76EWNudFWiD3EmmX3iK~07LOIaqJjY4kIQHgwdxF0h6BfY1O3mJbNzK5-x199z7inKXWMb4GvnunUwvKIrFb5vBBgIuCVkmal2ywkkHVr5padoMk-A8zmD-AE7iiNDPEznYq2oWxWAymx-lk5EHprO-5gbC-npmdOyjoMZfrxdidG~sg__" />
                    </div>

                </div>
                <div className="inline-flex w-full flex justify-center items-center sm:hidden px-5 ">
                    <div className="flex w-[50%] max-h-[40px] gap-10 items-center ">
                        <div className="inline-flex w-[142px] h-[32px]">
                            <div className="w-[142px] h-[32px] ">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] inline-flex justify-end pt-1">
                        <div onClick={() => (setisOpen(!isOpen))} className="cursor-pointer">
                            <IoReorderThreeOutline size={35} />
                        </div>
                    </div>

                </div>


            </div>
            <div className="sm:hidden z-50">
                {
                    isOpen && (
                        <div>
                            <div className="flex flex-col gap-4 px-5 sm:gap-4 pb-2">
                                <p className="inline-flex gap-2 min-w-[46px] min-h-[24px] py-1">Home</p>
                                <p className="inline-flex w-[98px] h-[24px] flex items-center gap-2 py-1">Products<FaChevronDown /></p>
                                <p className="inline-flex w-[98px] h-[24px] flex items-center gap-2 py-1">Resources<FaChevronDown /></p>
                                <p className="inline-flex gap-2 min-w-[46px] min-h-[24px] py-1">Pricing</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};  

export default Navbar;