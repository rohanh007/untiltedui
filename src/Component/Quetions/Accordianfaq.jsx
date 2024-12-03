import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
const Accordianfaq = () => {
    const quetionsdata = {
        "quetions": [
            {
                "id": "01",
                "quetion": "Is there a free trial available?",
                "ans": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            },
            {
                "id": "02",
                "quetion": "Can I change my plan later?",
                "ans": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            },
            {
                "id": "03",
                "quetion": "What is your cancellation policy?",
                "ans": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            },
            {
                "id": "04",
                "quetion": "Can other info be added to an invoice?",
                "ans": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            },
            {
                "id": "05",
                "quetion": "How does billing work?",
                "ans": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            },
            {
                "id": "06",
                "quetion": "How do I change my account email?",
                "ans": "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            }
        ]
    }

    const [Activeid, setActiveid] = useState(null);

    const handletoggleid=(id)=>{
        if(Activeid==id){
            setActiveid(null);
        }else{
            setActiveid(id);
        }
    }

console.log(Activeid);
    return (
        <div className="mx-auto w-[305px] sm:w-[768px] h-auto">
            {
                quetionsdata.quetions.map((quetion) => (
                    <div key={quetion.id} className="border-b border-[#EAECF0]">
                        <div className="cursor-pointer flex flex-row items-center justify-between py-2"  onClick={()=>handletoggleid(quetion.id)}><p className="font-medium text-[18px] leading-[28px] text-[#101828] py-2 text-left">{quetion.quetion}</p><p>{Activeid===quetion.id ? <LuMinusCircle color="#98A2B3" size={21}/>:<FiPlusCircle color="#98A2B3" size={21}/>}</p></div>
            
                        {
                            Activeid === quetion.id && (
                                <div className="p-1">
                                    <p className="font-normal text-[16px] leading-[24px] text-[#475467] text-start pb-5">{quetion.ans}</p>
                                </div>
                            )
                        }
                        {/* <hr/> */}
                    </div>
                ))

            }
        </div>
    )
}

export default Accordianfaq;

