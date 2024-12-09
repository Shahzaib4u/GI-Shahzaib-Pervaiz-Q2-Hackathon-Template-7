import { Check } from "lucide-react"
import Image from "next/image"
export default function SideBar(){
    return(
        <div className="w-[360px] h-[1600px] bg-white relative ">
            <div className="w-[176px] h-[352px]  absolute left-[32px] top-[32px] flex flex-col ">
                <div className="w-[104px] h-[20px] flex items-center mb-6">
                    <p className="uppercase text-[#90A3BF] text-[12px] font-[600]">Type</p>
                </div>
                <div className="w-[176px] h-[304px] flex flex-col gap-[32px]">
                    
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                        <div className="bg-[#3563E9] w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                        <Check className="text-white w-[20px] h-[20px]"></Check>
                        </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >Sport
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (10)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                        <div className="bg-[#3563E9] w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                        <Check className="text-white w-[20px] h-[20px]"></Check>
                        </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >SUV
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (12)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                        <div className="bg-white border-2 w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                        </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >MPV
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (16)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                    <div className="bg-white border-2 w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                    </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >Sedan
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (20)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                    <div className="bg-white border-2 w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                    </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >Coupe
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (14)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                    <div className="bg-white border-2 w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                    </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >HatchBack
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (14)</p>
                    </div>
                
                </div>
            </div>

        <div className="absolute w-[176px] h-[240px] top-[440px] lef-[32px] flex flex-col gap-[28px]">
        <div className="w-[176px] h-[352px]  absolute left-[32px] top-[32px] flex flex-col ">
                <div className="w-[104px] h-[20px] flex items-center mb-6">
                    <p className="uppercase text-[#90A3BF] text-[12px] font-[600]">Capacity</p>
                </div>
                <div className="w-[176px] h-[304px] flex flex-col gap-[32px]">
                    
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                        <div className="bg-[#3563E9] w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                        <Check className="text-white w-[20px] h-[20px]"></Check>
                        </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >2 Person
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (10)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                    <div className="bg-white border-2 w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                    </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >2 Person
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (14)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                        <div className="bg-white border-2 w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                        </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >6 Person
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (12)</p>
                    </div>
                    <div className="w-[176px] h-[24px] flex flex-row items-center gap-[8px]">
                    <div className="bg-[#3563E9] w-[24px] h-[24px] flex items-center justify-center rounded-lg ">
                        <Check className="text-white w-[20px] h-[20px]"></Check>
                        </div>
                        <h1 className="font-[600] text-[20px] text-gray-700 flex items-center" >8 Person
                            </h1>
                            <p className="font-[600] text-[20px] text-[#90A3BF] flex items-center"> (16)</p>
                    </div>
                    
                
                </div>
            </div>
        </div>

        <div className="absolute top-[736px] left-[32px] flex flex-col gap-[28px] w-[296px]  h-[104px] mt-14">
        <div className="w-[104px] h-[20px] flex items-center mb-6">
                    <p className="uppercase text-[#90A3BF] text-[12px] font-[600]">price</p>
                </div>
                <Image src={'/P R I C E  R A N G E.svg'} alt="price-range" width={296} height={20} />
                <h1 className="font-[600] text-[20px] text-[#596780]">Max. $100.00</h1>

        </div>
        
        </div>
    )
}