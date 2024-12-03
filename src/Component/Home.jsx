import Features from "./Features";
import Homesection from "./HeroComponent/Homesection";
import Navbar from "./HeroComponent/Navbar";

const Home=()=>{
    return(
        <div className="w-full flex flex-col justify-center" >
            {/* navabr  */}
           <Navbar />

           {/* sectionn first */}
           <Homesection/>

           {/* features  */}
           <Features/> 
        </div>
    )
}

export default Home ;
