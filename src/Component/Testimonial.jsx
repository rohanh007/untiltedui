import testiminoal from "../Static/images/testimonialicon.png";
import Person from "../Static/images/testimonialperson.png";
const Testtimonial = () => {
    return (
        <div className="w-full bg-[#F9FAFB] py-[96px]">
            <div className="w-full h-auto min-h-[360px] flex flex-col items-center justify-center px-4 sm:px-8 md:px-20">
                <div className="flex flex-col justify-center items-center gap-[32px] ">
                    <img src={testiminoal} className="max-w-[140.83px] max-h-[40px]" />
                    <p className="font-medium text-[30px] sm:text-[48px] leading-[38px] sm:leading-[60px] tracking-[-2%] text-center">
                        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
                    </p>
                    <div className="flex flex-col gap-[5px] items-center justify-center">
                        <img className="w-[64px] h-[64px] rounded-[200px] bg-[#E0E0E0]" src={Person} />

                        <p className="font-semibold text-[18px] leading-[28px] text-center text-[#101828]">Candice Wu</p>
                        <p className="font-normal text-[16px] leading-[24px] text-center text-[#475467]"> Product Manager, Sisyphus</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Testtimonial;