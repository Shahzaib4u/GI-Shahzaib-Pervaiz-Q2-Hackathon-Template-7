import Image from "next/image"
import { Circle } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import Link from "next/link"
export default function Heros(){
    return(
        <div className="min-h-min  flex items-center mt-6 ml-14 mr-14 flex-col gap-8 bg-[#F6F7F9] ">
            <div className="flex flex-row justify-evenly gap-6 bg-[#F6F7F9]">

                <div className="w-[640px] h-[360px] bg-gradient-to-r from-[#54A6FF] to-[#54A6FF80] flex flex-col  ">
                <div className="flex flex-col relative overflow-visible">
<Image src={'/Ellipse 42.svg'} alt="ellipse" width={650} height={650} className="absolute top-[5px] left-[-5px]" />
<Image src={'/Ellipse 41.svg'} alt="ellipse" width={650} height={650} className="absolute top-[10px] left-[-75px]" />
<Image src={'/Ellipse 40.svg'} alt="ellipse" width={525} height={525} className="absolute top-[40px] left-[-35px]" />
<Image src={'/Ellipse 39.svg'} alt="ellipse" width={400} height={400} className="absolute top-[100px] left-[15px]" />
<Image src={'/Ellipse 38.svg'} alt="ellipse" width={275} height={275} className="absolute top-[170px] left-[90px]" />
<Image src={'/Ellipse 37.svg'} alt="ellipse" width={150} height={150} className="absolute top-[240px] left-[150px]" />
<Image src={'/Ellipse 36.svg'} alt="ellipse" width={50} height={50} className="absolute top-[300px] left-[200px]" />
<Image src={'image7.svg'} alt="Car" width={406} height={116} className="absolute top-[234px] left-[137px]" />
                </div>

                <div className="w-[284px] h-[224px]  ml-8 mt-8 flex flex-col gap-4">
                    <div className=" h-[96px]">
                        <h1 className="font-[600] text-white text-[32px]">The Best Platform for Car Rental</h1>
                    </div>
                    <div className="h-[48px]">
                        <p className="font-[500] text-white text-[16px]">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    </div>
                    <Link href={'/Car_Detail'}>
                    <button className="w-[120px] h-[44px] bg-[#3563E9] rounded-sm cursor-pointer  hover:bg-blue-600 hover:scale-105 transition-transform duration-200 ">
                        <h2 className="text-white font-[500] text-[16px]">Rental Car</h2>
                    </button>
                    </Link>
                </div>
                </div>
              


                <div className="w-[640px] h-[360px] bg-gradient-to-r from-[#3563E9] to-[#3563E980] ">
                <div className="flex flex-col relative overflow-visible">
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[607px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[516px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[425px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[334px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[243px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[152px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[61px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute left-[-30px]" />

<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[120px] left-[562px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[120px] left-[471px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[120px] left-[380px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[120px] left-[289px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[120px] left-[198px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[120px] left-[107px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[120px] left-[16px]" />

<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[-29px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[62px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[153px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[244px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[335px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[426px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[517px]" />
<Image src={'/Rectangle2.svg'} alt="ellipse" width={75} height={120} className="absolute top-[240px] left-[608px]" />
<Image src={'image 8.svg'} alt="Car" width={340} height={116} className="absolute top-[234px] left-[197px]" />
                </div>
                <div className="w-[284px] h-[224px]  ml-8 mt-8 flex flex-col gap-4">
                    <div className=" h-[96px]">
                        <h1 className="font-[600] text-white text-[32px]">Easy way to rent a car at a low price</h1>
                    </div>
                    <div className="h-[48px]">
                        <p className="font-[500] text-white text-[16px]">Providing cheap car rental services and safe and comfortable facilities.</p>
                    </div>
                    <div>
                    <Link href={'/Car_Detail'}>
                    <button className="w-[120px] h-[44px] bg-[#54A6FF] rounded-sm cursor-pointer  hover:bg-blue-600 hover:scale-105 transition-transform duration-200 ">
                        <h2 className="text-white font-[500] text-[16px] ">Rental Car</h2>
                    </button>
                    </Link>
                    </div>
                </div>  
                </div>
            </div>


            <div className="flex flex-row items-center justify-evenly gap-10 bg-[#F6F7F9]">

                <div className="w-[582px] h-[132px]  bg-white rounded-[10px] flex flex-col p-6 pl-8 gap-4">
                    <div className="flex flex-row  h-[20px] items-center gap-2 " >
                        <div className="w-[16px] h-[16px] rounded-[70px] p-1 bg-[#3563E94D]">
                            <Circle className="bg-[#3563E9] w-2 h-2 text-[#3563E9] rounded-full"></Circle>
                        </div>
                        <div className="h-[20px]"><h2 className="text-[16px] font-[600]">Pick - Up </h2></div>
                    </div>
                    <Image src={'/Pick - Up.svg'} alt="pickup" width={486} height={48} className="cursor-pointer" />
                </div>


                <div className="w-[60px] h-[60px]">
                    <div className="w-[60px] h-[60px] bg-[#3563E9] rounded-[10px] flex flex-col items-center justify-center cursor-pointer  hover:bg-blue-600 hover:scale-105 transition-transform duration-200"><ArrowUpDown className="text-white"></ArrowUpDown></div>
                </div>

                <div className="w-[582px] h-[132px]  bg-white rounded-[10px] flex flex-col p-6 pl-8 gap-4">
                    <div className="flex flex-row  h-[20px] items-center gap-2 " >
                        <div className="w-[16px] h-[16px] rounded-[70px] p-1 bg-[#3563E94D]">
                            <Circle className="bg-[#3563E9] w-2 h-2 text-[#3563E9] rounded-full"></Circle>
                        </div>
                        <div className="h-[20px]"><h2 className="text-[16px] font-[600]">Drop - Off </h2></div>
                    </div>
                    <Image src={'/Pick - Up.svg'} alt="pickup" width={486} height={48} className="cursor-pointer" />
                </div>
                
                                
            </div>
        </div>
    )
}