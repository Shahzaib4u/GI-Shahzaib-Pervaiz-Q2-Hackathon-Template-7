// import { Heart } from "lucide-react";
// import Image from "next/image";

// export const CartStructure2 = (props: any) => {
//     return (
//         <div className="w-[317px] h-[388px] rounded-[10px] bg-white relative shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105">
//             <div className="h-[48px] absolute flex flex-col top-[24px] left-[24px] gap-1">
//                 <h1 className="font-[700] text-[20px]">{props.CarName2}</h1>
//                 <p className="font-[700] text-[14px] text-[#90A3BF]">{props.CarType2}</p>
//             </div>
//             <div className="relative w-[24px] h-[24px] top-[24px] left-[269px]">
//                 <Heart className="fill-[#ED3F3F] text-[#ED3F3F]" />
//             </div>

//             <div>
//                 <Image
//                     src={props.CarImg2}
//                     alt="car"
//                     width={272}
//                     height={84}
//                     className="relative top-[124px] left-[22px]"
//                 />
//             </div>

//             <div className="relative w-[269px] h-[24px] items-center left-[24px] top-[140px] flex flex-row justify-evenly">
//                 <div className="w-[58px] h-[24px] flex flex-row items-center gap-2">
//                     <Image src={"/gas-station.svg"} alt="fuel" width={24} height={24} />
//                     <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Petrol2}</p>
//                 </div>
//                 <div className="w-[58px] h-[24px] flex flex-row items-center gap-1">
//                     <Image src={"/steering.png"} alt="steering" width={24} height={24} />
//                     <p className="text-[14px] font-[500] text-[#90A3BF]">Manual</p>
//                 </div>
//                 <div className="w-[100px] h-[24px] flex flex-row items-center gap-1 ml-4">
//                     <Image src={"/people.png"} alt="people" width={24} height={24} />
//                     <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Seater2} People</p>
//                 </div>
//             </div>

//             <div className="relative flex flex-row mr-16 w-[260px] top-[160px] justify-between left-[24px]">
//                 <div className="flex flex-row items-center pl-2">
//                     <h1 className="text-[20px] font-[700]">${props.Price2}/</h1>
//                     <p className="text-[14px] font-[700] text-slate-400">day</p>
//                 </div>
//                 <div className="w-[116px] h-[44px]">
//                     <button className="bg-[#3563E9] w-[116px] h-[44px] rounded-s pl-5 pr-5 cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
//                         <h1 className="font-[500] text-white text-[16px]">Rent Now</h1>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export const CartStructure3 = (props: any) => {
//     return (
        

//         <div className="w-[317px] h-[388px] rounded-[10px] bg-white relative shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105">
//             <div className="h-[48px] absolute flex flex-col top-[24px] left-[24px] gap-1">
//                 <h1 className="font-[700] text-[20px]">{props.CarName2}</h1>
//                 <p className="font-[700] text-[14px] text-[#90A3BF]">{props.CarType2}</p>
//             </div>
//             <div className="relative w-[24px] h-[24px] top-[24px] left-[269px]">
//                 <Heart className="fill-[#ED3F3F] text-[#ED3F3F]" />
//             </div>

//             <div>
//                 <Image
//                     src={props.CarImg2}
//                     alt="car"
//                     width={272}
//                     height={84}
//                     className="relative top-[124px] left-[22px]"
//                 />
//             </div>

//             <div className="relative w-[269px] h-[24px] items-center left-[24px] top-[140px] flex flex-row justify-evenly">
//                 <div className="w-[58px] h-[24px] flex flex-row items-center gap-2">
//                     <Image src={"/gas-station.svg"} alt="fuel" width={24} height={24} />
//                     <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Petrol2}</p>
//                 </div>
//                 <div className="w-[58px] h-[24px] flex flex-row items-center gap-1">
//                     <Image src={"/steering.png"} alt="steering" width={24} height={24} />
//                     <p className="text-[14px] font-[500] text-[#90A3BF]">Manual</p>
//                 </div>
//                 <div className="w-[100px] h-[24px] flex flex-row items-center gap-1 ml-4">
//                     <Image src={"/people.png"} alt="people" width={24} height={24} />
//                     <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Seater2} People</p>
//                 </div>
//             </div>

//             <div className="relative flex flex-row mr-16 w-[260px] top-[160px] justify-between left-[24px]">
//                 <div className="flex flex-row items-center pl-2">
//                     <h1 className="text-[20px] font-[700]">${props.Price2}/</h1>
//                     <p className="text-[14px] font-[700] text-slate-400">day</p>
//                 </div>
//                 <div className="w-[116px] h-[44px]">
//                     <button className="bg-[#3563E9] w-[116px] h-[44px] rounded-s pl-5 pr-5 cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
//                         <h1 className="font-[500] text-white text-[16px]">Rent Now</h1>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

import { Heart } from "lucide-react";
import Image from "next/image";

// Define the interface for the props
interface CartStructureProps {
  CarName2: string;
  CarType2: string;
  CarImg2: string;
  Petrol2: string;
  Seater2: number;
  Price2: number;
}

// Component 1: CartStructure2
export const CartStructure2 = (props: CartStructureProps) => {
  return (
    <div className="w-[317px] h-[388px] rounded-[10px] bg-white relative shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105">
      <div className="h-[48px] absolute flex flex-col top-[24px] left-[24px] gap-1">
        <h1 className="font-[700] text-[20px]">{props.CarName2}</h1>
        <p className="font-[700] text-[14px] text-[#90A3BF]">{props.CarType2}</p>
      </div>
      <div className="relative w-[24px] h-[24px] top-[24px] left-[269px]">
        <Heart className="fill-[#ED3F3F] text-[#ED3F3F]" />
      </div>

      <div>
        <Image
          src={props.CarImg2}
          alt="car"
          width={272}
          height={84}
          className="relative top-[124px] left-[22px]"
        />
      </div>

      <div className="relative w-[269px] h-[24px] items-center left-[24px] top-[140px] flex flex-row justify-evenly">
        <div className="w-[58px] h-[24px] flex flex-row items-center gap-2">
          <Image src={"/gas-station.svg"} alt="fuel" width={24} height={24} />
          <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Petrol2}</p>
        </div>
        <div className="w-[58px] h-[24px] flex flex-row items-center gap-1">
          <Image src={"/steering.png"} alt="steering" width={24} height={24} />
          <p className="text-[14px] font-[500] text-[#90A3BF]">Manual</p>
        </div>
        <div className="w-[100px] h-[24px] flex flex-row items-center gap-1 ml-4">
          <Image src={"/people.png"} alt="people" width={24} height={24} />
          <p className="text-[14px] font-[500] text-[#90A3BF]">{props.Seater2} People</p>
        </div>
      </div>

      <div className="relative flex flex-row mr-16 w-[260px] top-[160px] justify-between left-[24px]">
        <div className="flex flex-row items-center pl-2">
          <h1 className="text-[20px] font-[700]">${props.Price2}/</h1>
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

// Component 2: CartStructure3
export const CartStructure3 = (props: CartStructureProps) => {
  return <CartStructure2 {...props} />;
};
