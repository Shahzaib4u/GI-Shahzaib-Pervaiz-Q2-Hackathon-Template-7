export default function Footer(){
    return(
        <div className="relative h-[480px] bg-[#FFFFFF]">
            <div className="w-[292px] h-[108px] absolute top-[80px] left-[60px]">
            <div className="w-[148px] h-11 flex items-center "><h1 className="font-bold text-[32px] text-[#3563E9]">MORENT</h1>
            </div>
            <p className="font-[500] text-[16px] text-[#13131399]">Our vision is to provide convenience and help increase your sales business.</p>
            </div>

            <div className="absolute bg-green flex flex-row top-[80px] left-[834px] gap-16 ">
                <div className="flex flex-col w-[152px] h-[244px]">
                    <h1 className="text-[16px] font-[600] mb-10 cursor-pointer">About</h1>
                    <ul className="text-[#13131399] font-[500] text-[14px] flex flex-col gap-6 ">
                        <li className="cursor-pointer">
                        How it works 
                        </li>
                        <li className="cursor-pointer">
                        Featured 
                        </li>
                        <li className="cursor-pointer">
                        Partnership 
                        </li>
                        <li className="cursor-pointer">
                        Bussiness Relation 
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col w-[152px] h-[244px]">
                    <h1 className="text-[16px] font-[600] mb-10 cursor-pointer" >Community</h1>
                    <ul className="text-[#13131399] font-[500] text-[14px] flex flex-col gap-6  ">
                        <li className="cursor-pointer">
                        Events 
                        </li>
                        <li className="cursor-pointer">
                        Blog 
                        </li>
                        <li className="cursor-pointer">
                        Podcast 
                        </li>
                        <li className="cursor-pointer">
                        Invite a friend 
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col w-[152px] h-[244px]">
                    <h1 className="text-[16px] font-[600] mb-10 cursor-pointer">Socials</h1>
                    <ul className="text-[#13131399] font-[500] text-[14px] flex flex-col gap-6  ">
                        <li className="cursor-pointer">
                        Discord
                        </li>
                        <li className="cursor-pointer">
                        Instagram 
                        </li>
                        <li className="cursor-pointer">
                        Twitter 
                        </li>
                        <li className="cursor-pointer">
                        Facebook 
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="absolute w-[1360px] top-[360px] left-[38px] border-2  border-[#13131329]"></div>

            <p className="absolute w-72 h-[24px]  top-[396px] left-[60px] text-[16px] font-[500] text-[#1A202C] cursor-pointer">©2022 MORENT. All rights reserved
            </p>
            <p className="absolute w-36 h-[24px]  top-[396px] left-[1050px] text-[16px] font-[500] text-[#1A202C] cursor-pointer">Privacy & Policy
            </p>
            <p className="absolute w-36 h-[24px]  top-[396px] left-[1236px] text-[16px] font-[500] text-[#1A202C] cursor-pointer">Terms & Condition
            </p>
        </div>
    )
}