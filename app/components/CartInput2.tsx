import {CartStructure2} from "./CarStructure2"
import {CartStructure3} from "./CarStructure2"
interface Car2 {
    CarImg2:string,
    CarName2:string,
    CarType2:string,
    Petrol2:string,
    Seater2:number,
    Price2:number,
}

function CarCreate2(
    CarImg2:string,
    CarName2:string,
    CarType2:string,
    Petrol2:string,
    Seater2:number,
    Price2:number,
):Car2{
    return{CarImg2, CarName2, CarType2,Petrol2,Seater2,Price2}
}
export const CarInput3 =()=>{
    const CarData3:Car2[]=[
        CarCreate2('/car.svg','Koenigsegg','Sport','90L',2,99.00),
        CarCreate2('/car2.svg','Nissan GT - R','Sport','80L',2,99.00),
        CarCreate2('/car3.svg','Rolls - Royce','Sport','70L',4,96.00),

        CarCreate2('/Car-1.svg','All New Rush','SUV','70L',6,72.00),
        CarCreate2('/Car-2.svg','Car - V','SUV','80L',6,80.00),
        CarCreate2('/Car-3.svg','All New Terios','SUV','90L',6,74.00),
        
        CarCreate2('/Car-5.svg','MGZXExclusice','Hatchback','70L',4,76.00),
        CarCreate2('/Car-6.svg','New MGZS','SUV','80L',6,80.00),
        CarCreate2('/Car-5.svg','MGZXExclusice','Hatchback','70L',4,76.00),

    ]
    return(
        <div className="">
            <div className="grid grid-row-3 grid-cols-3 gap-6 p-4 w-[1020px] #F6F7F9">
                {CarData3.map((data3,index3)=>(
                    <div key={index3}>
                        <CartStructure2
                        CarImg2={data3.CarImg2}
                        CarName2={data3.CarName2}
                        CarType2={data3.CarType2}
                        Petrol2={data3.Petrol2}
                        Seater2={data3.Seater2}
                        Price2={data3.Price2} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export const CarInput4 =()=>{
    const CarData4:Car2[]=[
        CarCreate2('/car.svg','Koenigsegg','Sport','90L',2,99.00),
        CarCreate2('/car2.svg','Nissan GT - R','Sport','80L',2,99.00),
        CarCreate2('/car3.svg','Rolls - Royce','Sport','70L',4,96.00),

        CarCreate2('/Car-1.svg','All New Rush','SUV','70L',6,72.00),
        CarCreate2('/Car-2.svg','Car - V','SUV','80L',6,80.00),
        CarCreate2('/Car-3.svg','All New Terios','SUV','90L',6,74.00),
        
        CarCreate2('/Car-5.svg','MGZXExclusice','Hatchback','70L',4,76.00),
        CarCreate2('/Car-6.svg','New MGZS','SUV','80L',6,80.00),
        CarCreate2('/Car-5.svg','MGZXExclusice','Hatchback','70L',4,76.00),

    ]
    return(
        <div className="">
            <div className="grid grid-row-3 grid-cols-3 gap-6 p-4 w-[1020px] #F6F7F9">
                {CarData4.map((data4,index4)=>(
                    <div key={index4}>
                        <CartStructure3
                        CarImg2={data4.CarImg2}
                        CarName2={data4.CarName2}
                        CarType2={data4.CarType2}
                        Petrol2={data4.Petrol2}
                        Seater2={data4.Seater2}
                        Price2={data4.Price2} />
                    </div>
                ))}
            </div>
        </div>
    )
}