import { GoArrowUpRight } from "react-icons/go";
import blogimg_1 from "../../Static/images/blogs_photo_1.png";
import blogimg_2 from "../../Static/images/blogs_photo_2.png";
import blogimg_3 from "../../Static/images/blogs_photo_3.png";
import comment_1 from "../../Static/images/comment_blog_1.png";
import comment_2 from "../../Static/images/comment_blog_1.png";
import comment_3 from "../../Static/images/comment_blog_1.png";
const Blogcard = () => {
    const Blogsdata = {
        "blogs": [
            {
                "id": "01",
                "imglink":blogimg_1,
                "description": "How do you create compelling presentations that wow your colleagues and impress your managers?",
                "title": "UX review presentations",
                "type": "Design",
                "createdBy": "Olivia Rhye",
                "createdAt": "20 Jan 2024",
                "userProfile":comment_1
            },
            {
                "id": "02",
                "imglink":blogimg_2,
                "description": "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
                "title": "Migrating to Linear 101",
                "type": "Product",
                "createdBy": "Phoenix Baker",
                "createdAt": "19 Jan 2024",
                "userProfile":comment_2
            },
            {
                "id": "03",
                "imglink":blogimg_3,
                "description": "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
                "title": "Building your API stack",
                "type": "Software Engineering",
                "createdBy": "Lana Steiner",
                "createdAt": "18 Jan 2024",
                "userProfile":comment_3
            }
        ]
    }

    return (
        <div className="max-w-full min-h-[444px] flex flex-col md:flex-row gap-[40px] px-12">
            {
                Blogsdata.blogs && Blogsdata.blogs.map((blog, index) => (
                    <div key={index} className="flex flex-col gap-[14px]  w-[100%] md:w-[40%]">
                        <img src={blog.imglink} className="w-auto h-auto" />
                        <div className="">
                            <div className="flex flex-col gap-[8px] text-left max-w-[384px] h-auto pb-4">
                                <h4 className="font-semibold text-[14px] leading-[20px] text-[#6941C6]">{blog.type}</h4>
                                <div className="flex flex-row justify-between"><p className="font-semibold text-[24px] leading-[32px] sm:leading-[32px] text-[#101828]">{blog.title}</p><p className="pt-3"><GoArrowUpRight color="#101828" size={24}/></p></div>
                                <p className="max-w-full text-[16px] h-auto text-wrap leading-[24px] text-[#475467]">{blog.description}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img src={blog.userProfile} className="w-[40px] h-[40px] rounded-[200px] border-[0.75px] "/>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-[14px] leading-[20px] text-[#101828]">{blog.createdBy}</p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#475467]">{blog.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Blogcard;