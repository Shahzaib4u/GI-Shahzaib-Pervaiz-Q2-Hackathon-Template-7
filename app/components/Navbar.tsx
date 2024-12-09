import Image from "next/image"
import { Heart } from "lucide-react"
export default function Navbar(){
    return(
        <div className="w-screen h-[124px] pl-12 bg-white border-2 border-blue-300 flex flex-row items-center justify-between pr-10 ">

            <div className=" flex flex-row">
            <div className="w-[148px] h-11 flex items-center "><h1 className="font-bold text-[32px] text-[#3563E9]">MORENT</h1></div>
            <div className="w-[492px] h-11 flex flex-row items-center ml-16">
                <div className="w-[492px] h-11 rounded-l-full rounded-r-full p-2 pl-4 border-2 flex flex-row items-center">
                    <Image src={'/search.svg'} alt="search" width={25} height={25} objectFit="cover" className="cursor-pointer" />
                    <input type="text"
                    placeholder=" Serach Something here"
                    className="ml-4 w-[250px] bg-transparent placeholder:text-[14px] focus:outline-none hover:outline-none " />
                    <Image src={'/filter.svg'} alt="filet" width={25} height={25} className="ml-32 cursor-pointer" />
                </div>
                
            </div>
            </div>

            <div className="w-[236px]  h-11 items-center flex fler-row justify-evenly gap-4 p-1">
                <div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"><Heart fill=""></Heart></div>
                <div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"><Image src={'/notification.svg'} alt="notification "width={25} height={25} /></div>
                <div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"><Image src={'/settings.svg'} alt="settings"width={25} height={25} /></div>
                <div className="w-11 h-11 flex items-center justify-center cursor-pointer"><Image src={'/profile.png'} alt="settings"width={70} height={70} objectFit="cover"className="rounded-full" /></div>
              
            </div>

        </div>
    )
}