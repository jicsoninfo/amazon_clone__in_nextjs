import Image from "next/image";
import logo from "@/images/logo.png";
import { SlLocationPin } from "react-icons/sl";

const Header = () => {
   return(
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50" >
        {/* <h1>Header</h1> */}
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 md1:gap-3 px-4">
           {/* logo */}
           <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
            <Image className="w-28 object-cover mt-1" src={logo} alt="logoimg" />
           </div>
            {/* <p>Hello</p> */}

            {/* delivery */}
            <div className="text-white px-2 border border-transparent hover:border-white curson-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
                <SlLocationPin />
                <div className="text-xs">
                    <p>Deliver to</p>
                    <p className="font-bold uppercase">USA</p>
                </div>
            </div>

            {/* serchbar */}
            
            {/* signin */}
            {/* favorite */}
            {/* cart */}

        </div>
    </div>
   ) 
    
}
export default Header;