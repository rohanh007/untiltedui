import Accordianfaq from "./Quetions/Accordianfaq";
import Askmoreque from "./Quetions/Askmoreque";

const Quetions =()=>{
    return(
        <div className="w-full p-5 border-b border-[#F2F4F7]">
           <div>
             <div className=" flex flex-col gap-[20px] w-full justify-center items-centers ">
                <h1 className="font-semibold text-[30px] sm:text-[36px] leading-[38px] sm:leading-[44px] sm:-tracking-[2%] text-center">Frequently asked quetions</h1>
                <p className="font-normal text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] text-center text-[#475467]">Everything you need to know about the product and billing.</p>
             </div>
             <div className="w-full h-auto flex flex-col justify-center items-center pt-3">
                 <Accordianfaq/>
             </div>
             <div className="w-full h-auto min-h-[390px] mt-5 pt-3">
                <Askmoreque/>
             </div>
             <div>
            </div>
           </div>
        </div>
    )
}
export default Quetions;