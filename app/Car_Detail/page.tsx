'use client'
import Link from "next/link"
import SideBar from "../components/SideBar"
import Image from "next/image"
import { Circle } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { CarInput3 } from "../components/CartInput2"
import { useState } from "react"
export default function Car_Detail(){
    

    return(
        <div className="h-[1600px] w-full bg-[#F6F7F9] flex relative">
        <SideBar />
            
            <div className=" bg-blue-400">

            <div className="w-[486px] h-[132px] absolute top-[32px] left-[392px]  bg-white rounded-[10px] flex flex-col p-6 pl-8 gap-4 hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105">
                    <div className="flex flex-row  h-[20px] items-center gap-2 " >
                        <div className="w-[16px] h-[16px] rounded-[70px] p-1 bg-[#3563E94D]">
                            <Circle className="bg-[#3563E9] w-2 h-2 text-[#3563E9] rounded-full"></Circle>
                        </div>
                        <div className="h-[20px]"><h2 className="text-[16px] font-[600]">Pick - Up </h2></div>
                    </div>
                    <Image src={'/Pick - Up.svg'} alt="pickup" width={486} height={48} className="cursor-pointer" />
                </div>

                <div className="w-[63px] h-[63px] absolute z-10 shadow-lg top-[66px] left-[868px] ">
                    <div className="w-[63px] h-[63px] bg-[#3563E9] rounded-[10px] flex flex-col items-center justify-center cursor-pointer  hover:bg-blue-600 hover:scale-105 transition-transform duration-200"><ArrowUpDown className="text-white"></ArrowUpDown></div>
                </div>

                <div className="w-[486px] h-[132px] absolute top-[32px] left-[921px]  bg-white rounded-[10px] flex flex-col p-6 pl-8 gap-4 ">
                    <div className="flex flex-row  h-[20px] items-center gap-2 " >
                        <div className="w-[16px] h-[16px] rounded-[70px] p-1 bg-[#3563E94D]">
                            <Circle className="bg-[#3563E9] w-2 h-2 text-[#3563E9] rounded-full"></Circle>
                        </div>
                        <div className="h-[20px]"><h2 className="text-[16px] font-[600]">Drop - Off </h2></div>
                    </div>
                    <Image src={'/Pick - Up.svg'} alt="pickup" width={486} height={48} className="cursor-pointer" />
                </div>
            </div>

            <div className="absolute top-[200px] left-[392px] w-[1015px] h-[1228px] bg-green-300 flex flex-col">
              <CarInput3  />
            </div>

            


            <div className="w-[734px] mt-28 h-11 absolute top-[1350px] left-[680px] self-end mr-8 mb-24 flex flex-row justify-between items-center">
                    <button className="w-[156px] ml-28 h-11 bg-[#3563E9] rounded-sm pl-5 pr-5 text-center text-[14px] font-[500] text-white">
                        <Link href={'/MoreCars'}> 
                         Show More Cars 
                        </Link>
                    </button>
                    <p className="w-[140px] h-[24px] text-end text-[14px] text-[#90A3BF] pr-8">120 Car</p>
                </div>

            
        </div>
    )
}