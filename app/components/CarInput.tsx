import CartStructure from "./CartStructure"

interface Car {
    CarImg:string,
    CarName:string,
    CarType:string,
    Petrol:string,
    Seater:number,
    Price:number,
}

function CarCreate(
    CarImg:string,
    CarName:string,
    CarType:string,
    Petrol:string,
    Seater:number,
    Price:number,
):Car{
    return{CarImg, CarName, CarType,Petrol,Seater,Price}
}

export const CarInput =()=>{
    const CarData:Car[]=[
        CarCreate('/car.svg','Koenigsegg','Sport','90L',2,99.00),
        CarCreate('/car2.svg','Nissan GT - R','Sport','80L',2,99.00),
        CarCreate('/car3.svg','Rolls - Royce','Sport','70L',4,96.00),
        CarCreate('/car2.svg','Koenigsegg','Sport','90L',2,80.00),

    ]
    return(
        <div className="">
            <div className="grid grid-row-1 grid-cols-4 gap-6 w-[1312px] #F6F7F9">
                {CarData.map((data,index)=>(
                    <div key={index}>
                        <CartStructure
                        CarImg={data.CarImg}
                        CarName={data.CarName}
                        CarType={data.CarType}
                        Petrol={data.Petrol}
                        Seater={data.Seater}
                        Price={data.Price} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export const CarInput2 =()=>{
    const CarData2:Car[]=[
        CarCreate('/Car-1.svg','All New Rush','SUV','70L',6,72.00),
        CarCreate('/Car-2.svg','Car - V','SUV','80L',6,80.00),
        CarCreate('/Car-3.svg','All New Terios','SUV','90L',6,74.00),
        CarCreate('/Car-2.svg','Car - V','SUV','80L',6,80.00),
        
        CarCreate('/Car-5.svg','MGZXExclusice','Hatchback','70L',4,76.00),
        CarCreate('/Car-6.svg','New MGZS','SUV','80L',6,80.00),
        CarCreate('/Car-5.svg','MGZXExclusice','Hatchback','70L',4,76.00),
        CarCreate('/Car-6.svg','New MGZS','SUV','80L',6,80.00),

    ]
    return(
        <div className="">
            <div className="grid grid-row-2 grid-cols-4 gap-6 w-[1312px] #F6F7F9">
                {CarData2.map((data2,index2)=>(
                    <div key={index2}>
                        <CartStructure
                        CarImg={data2.CarImg}
                        CarName={data2.CarName}
                        CarType={data2.CarType}
                        Petrol={data2.Petrol}
                        Seater={data2.Seater}
                        Price={data2.Price} />
                    </div>
                ))}
            </div>
        </div>
    )
}




