import Image from "next/image"
export default function Label(){
    return(
        <div className="min-w-min h-[124px] border-2 bg-white border-blue-500 p-8 flex flex-row items-center justify-between" >

            <div className="w-[581px] h-[40px] flex flex-row items-center ">
                <div className="w-8 h-8 "><Image src={'/command.svg'} alt="command" width={32} height={32} objectFit="cover" / >
                </div>
                <div className="w-[537px] h-10 bg-white flex items-center">
                    <h2 className="font-bold text-2xl"> High Fidelity Dashboard - Home Rent</h2>
                    </div>
            </div>


            <div className="w-[236px] h-[25px] flex flex-row items-center">
                <div className="w-[121px] h-[25px] flex items-center "><p className="text-[#666666] text-[20px[">Last Updated:</p></div>
                <div className="w-[107px] h-[25px] flex items-center ml-[-18px]"><p className="text-[20px] text-black font-bold "></p>8 Aug 2022</div>
            </div>
        </div>
    )
}