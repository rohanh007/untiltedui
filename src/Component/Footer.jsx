import React from 'react';
import footerlogo from "../Static/images/footer-logo.png";
import logofrom from "../Static/images/Logo.png";
const Footer = () => {
    const footer = {
        "footermenus": [
            {
                "id": "001",
                "Product": [
                    "Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"
                ]
            },
            {
                "id": "002",
                "Company": [
                    "About us ", "Careers", "Press", "News", "Media Kit", "Contact"
                ]
            },
            {
                "id": "003",
                "Resources": [
                    "Blog", "Newsletter", "Events", "Help Centre", "Tutorials", "Support"
                ]
            },
            {
                "id": "004",
                "Use cases": [
                    "Startups", "Enterprise", "Government", "Saas Centre", "Marketplaces", "Ecommerce"
                ]
            },
            {
                "id": "005",
                "Social": [
                    "Twitter", "LinkedIn", "Facebook", "Github", "AngelList", "Dribble"
                ]
            },
            {
                "id": "006",
                "Legal": [
                    "Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"
                ]
            }
        ]
    };

    return (
        <div className="w-full min-h-[480px] pt-[64px] pb-[48px]">
            <div className="w-full mx-auto pl-[32px] flex flex-wrap md:justify-center gap-[50px] md:gap-[40px] mb-4 ">
                {
                    footer.footermenus && footer.footermenus.map((menu, index) => {
                        const title = Object.keys(menu)[1];  
                        const items = menu[title];  
                      
                        return (
                            <div key={index} className="max-w-1/2 sm:w-[176px] text-center">
                                <h5 className="font-semibold text-[14px] leading-[20px] text-[#667085] mb-[12px] text-left">{title}</h5>
                                <div>
                                    {items && items.map((item, idx) => (
                                        <div key={idx} className="w-full mb-[8px]">
                                            <p className="font-semibold leading-6 text-[16px] text-[#475467] text-left">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className=' w-full px-[32px] min-h-[64px] px-20'>
               <div className='max-w-full min-w-[64px] border-t border-[#EAECF0] pt-[32px] flex flex-col sm:flex-row justify-between gap-5'>
                    <img src={logofrom} className='w-[150px] h-[40px] sm:w-auto sm:h-auto'/>
                    <p className='font-normal text-[16px] leading-4 text-[#667085] text-left sm:text-right'>© 2077 Untitled UI. All rights reserved.</p>
               </div>

            </div>
        </div>
    );
}

export default Footer;
