import { Heart } from "lucide-react";
import Image from "next/image";

const CartStructure = (props: any) => {
    return (
        <div className="w-[304px] h-[420px] rounded-[10px] bg-white relative shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105">
            <div className="h-[52px] absolute flex flex-col top-[24px] left-[24px] gap-1">
                <h1 className="font-[700] text-[20px]">{props.CarName}</h1>
                <p className="font-[700] text-[14px] text-[#90A3BF]">{props.CarType}</p>
            </div>
            <div className="relative w-[24px] h-[24px] top-[24px] left-[256px]">
                <Heart className="fill-[#ED3F3F] text-[#ED3F3F]" />
            </div>

            <div>
                <Image
                    src={props.CarImg}
                    alt="car"
                    width={232}
                    height={72}
                    className="relative top-[136px] left-[36px]"
                />
            </div>

            <div className="relative w-[256px] h-[24px] items-center left-[24px] top-[172px] flex flex-row justify-evenly">
                <div className="w-[58px] h-[24px] flex flex-row items-center gap-2">
                    <Image src={"/gas-station.svg"} alt="fuel" width={24} height={24} />
                    <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Petrol}</p>
                </div>
                <div className="w-[58px] h-[24px] flex flex-row items-center gap-1">
                    <Image src={"/steering.png"} alt="steering" width={24} height={24} />
                    <p className="text-[14px] font-[500] text-[#90A3BF]">Manual</p>
                </div>
                <div className="w-[100px] h-[24px] flex flex-row items-center gap-1 ml-4">
                    <Image src={"/people.png"} alt="people" width={24} height={24} />
                    <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Seater} People</p>
                </div>
            </div>

            <div className="relative flex flex-row mr-16 w-[260px] top-[200px] justify-between left-[24px]">
                <div className="flex flex-row items-center pl-2">
                    <h1 className="text-[20px] font-[700]">${props.Price}/</h1>
                    <p className="text-[14px] font-[700] text-slate-400">day</p>
                </div>
                <div className="w-[116px] h-[44px]">
                    <button className="bg-[#3563E9] w-[116px] h-[44px] rounded-s pl-5 pr-5 cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
                        <h1 className="font-[500] text-white text-[16px]">Rent Now</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartStructure;


