'use client'
import { useState } from "react"
import { CarInput } from "./CarInput"
import { CarInput2 } from "./CarInput"
export default function CatalogueCar(){
    const [showMore,setShowMore]= useState(false)
    const toggleShowMore = () => setShowMore(!showMore);

    return(
        <div className="mt-6 flex flex-col items-center  bg-[#F6F7F9]">
            <div className="w-[1312px] bg-[#F6F7F9] flex flex-col  h-[1356px]">
                <div className="w-[1312px] h-[44px] flex flex-row justify-between mb-12">
                    <div className="w-[132px] flex items-center h-[44px] rounded-sm pl-5 pr-5">
                        <p className="font-[600] text-xs text-center text-[#90A3BF]">Popular Car</p>
                    </div>
                    <div className="flex items-center w-[104px] h-[44px] rounded-sm pl-5 pr-5">
                        <p className="text-[#3563E9] font-[600] text-xs text-center cursor-pointer">View All</p>
                    </div>
                </div>
            <div className="w-[1312px] h-[388px] flex items-center">
                <CarInput />

            </div>

            <div className="w-[1312px] h-[44px] flex flex-row justify-between mb-12 pt-10">
                    <div className="flex items-center h-[44px] rounded-sm pl-5 pr-5">
                        <h1 className="font-[600] text-[16px] text-center text-[#90A3BF]">Recomendation Car</h1>
                    </div>
                   
                </div>
                <CarInput2 />

            </div>

            {showMore && <CarInput2 />}


            <div className="w-[734px] mt-28 h-11 self-end mr-8 mb-24 flex flex-row justify-between items-center">
                    <button
                        onClick={toggleShowMore}
                        className="w-[156px] h-11 bg-[#3563E9] rounded-sm pl-5 pr-5 text-center text-[14px] font-[500] text-white">
                            
                        {showMore ? "Show Less" : "Show More Cars"}
                    </button>
                    <p className="w-[140px] h-[24px] text-end text-[14px] text-[#90A3BF] pr-8">120 Car</p>
                </div>


        </div>
    )
}


