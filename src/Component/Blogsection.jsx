import Blogcard from "./Blogs/Blogcard";

const Blogsection=()=>{
    

    return(
        <div className="w-full h-auto py-[35px] md:py-[96px]" >
            {/* blog main header */}
            <div className="w-full h-auto md:h-[130px] flex justify-between items-start pl-[80px] pr-[80px] mb-5">
                <div className=" flex flex-col gap-2 text-left w-full">
                    <h4 className="font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#6941C6]">Our blog</h4>
                    <h1 className="font-semibold text-[30px] sm:text-[36px] leading-[38px] sm:leading-[44px] -tracking-[2%] text-[#101828]">Lastest blog posts</h1>
                    <p className="font-normal text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] text-[#475467]">Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <button className="text-nowrap hidden md:flex py-[12px] px-[20px] rounded-[8px] border border-[#7F56D9] bg-[#7F56D9] text-white shadow-[0px 1px 2px 0px #101828]">View all posts</button>

            </div>

            {/* blogs card */}
            <div className="max-w-full h-auto min-h-[444px] px-[32px]">
                <Blogcard/>
            </div>
            <div className="flex md:hidden items-center justify-center py-12">
            <button className="py-[12px] px-[20px] rounded-[8px] border border-[#7F56D9] bg-[#7F56D9] text-white shadow-[0px 1px 2px 0px #101828]">View all posts</button>

            </div>

        </div>
    )
}

export default Blogsection;