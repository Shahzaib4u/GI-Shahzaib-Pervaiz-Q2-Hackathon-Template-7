import { CarInput3 } from "../components/CartInput2"
import { CarInput2 } from "../components/CarInput"
import { CarInput } from "../components/CarInput"
export default function MoreCars(){
    return(
        <div className="bg-black h-min">
            <div className="flex flex-col mb-8 pb-8 pt-8 gap-8 items-center">
                <CarInput />
                <CarInput2 />
                <CarInput3 /> 
            </div>

        </div>
    )
}