import avatargroup from "../../Static/images/Avatar_group.png";
const Askmoreque =()=>{
    return(
        <div className="w-full h-auto min-h-[298px] px-5 sm:px-[32px]"> 
            <div className="w-full h-auto min-h-[298px] sm:px-[32px] bg-[#F9FAFB] rounded-[16px] flex flex-col justify-center items-center gap-3">
              <img className="w-[120px] h-[56px]" src={avatargroup}/>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[20px] leading-[30px] text-center text-[#101828]">Still have quetions ?</h1>
                <p className="font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-center text-[#475467] px-3">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
              </div>
              <button className="rounded-[8px] border border-[#7F56D9] py-[12px] px-[20px] bg-[#7F56D9] text-white shadow-[0px 1px 2px 0px #1018280D];
]">Get in touch</button>
            </div>
        </div>
    )
}

export default Askmoreque;
