"use client"
import {useState} from "react"
import Image from "next/image"

import CurrentApr from "./currentApr"
import BoostedApr from "./boostedApr"
import Assets from "./assets"
import Holidays from "./holidays"
import ListPropertyShares from "../components/listPropertyShares"
import img from "../images/room.png"

const Properties = () => {
    const [open, setOpen] = useState(false)
    const property = {
        img:img,
        title:"Beautiful 5-Bedroom Villa near the Beach",
        location:"Manchester, United Kingdom",
        price:"5,700,000 USD",
        startingPrice:"5,700 USD",
        category:"Buy to let",
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between w-full">
                <h4 className="text-title-lg font-bold text-black 2xl:text-4xl">
                    Your  Properties
                </h4>

                <div className="flex items-center gap-4 self-end">
                    <span className="font-medium 2xl:text-lg">View All</span>
                    <button type="button" className="shrink-0 w-8 h-8 flex items-center justify-center shadow-lg border bg-white rounded-full">
                        <svg width="7" height="12" className="opacity-30 scale-[-1]" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#0C0839" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                    <button type="button" className="shrink-0 w-8 h-8 flex items-center justify-center shadow-lg border bg-white rounded-full">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#0C0839" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[63%_35%] gap-5">
                <div className="flex flex-col gap-5 w-full border shadow-sm overflow-hidden rounded-xl">
                    <div className="w-full relative">
                        <Image
                            src={img}

                            className="h-auto lg:h-[25rem] w-full  max-w-full "
                            width={600}
                            height={400}
                            alt="Property of the day"
                        />
                        <div className="w-[200px] h-[40px] absolute top-5  bg-[#954AFC] rounded-tr-[50px] rounded-br-[50px]">
                            <div className="left-[10px] top-[8px] absolute text-white text-base font-bold  ">{property.startingPrice}*</div>
                            <div className="left-[115px] top-[15px] absolute text-white text-[0.7rem] font-medium  ">starting price</div>
                        </div>

                    </div>
                    <div className=" justify-between w-full items-center gap-4 p-4 flex flex-col md:flex-row ">

                        <div className="justify-between w-full md:items-center gap-6 flex flex-1 flex-col md:flex-row  ">
                            <div className="relative shrink-0">
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                                        <path d="M6.99997 19C5.73692 17.9228 4.56617 16.7419 3.49999 15.4697C1.89999 13.5591 8.79148e-07 10.7136 8.79148e-07 8.00214C-0.000693118 6.61737 0.409507 5.26353 1.17869 4.11193C1.94787 2.96034 3.04146 2.06276 4.32105 1.5328C5.60064 1.00285 7.00872 0.864328 8.36709 1.13477C9.72544 1.40523 10.9731 2.07249 11.952 3.05211C12.6037 3.70084 13.1203 4.47237 13.4719 5.32204C13.8234 6.17171 14.0029 7.08265 14 8.00214C14 10.7136 12.1 13.5591 10.5 15.4697C9.43376 16.7419 8.26303 17.9228 6.99997 19ZM6.99997 5.00273C6.20433 5.00273 5.44127 5.31873 4.87866 5.88123C4.31605 6.44373 3.99999 7.20665 3.99999 8.00214C3.99999 8.79763 4.31605 9.56055 4.87866 10.123C5.44127 10.6855 6.20433 11.0016 6.99997 11.0016C7.79562 11.0016 8.55868 10.6855 9.12129 10.123C9.68389 9.56055 9.99998 8.79763 9.99998 8.00214C9.99998 7.20665 9.68389 6.44373 9.12129 5.88123C8.55868 5.31873 7.79562 5.00273 6.99997 5.00273Z" fill="#A260FD" />
                                    </svg>
                                    <div className=" opacity-50 text-slate-900 text-sm font-medium 2xl:text-lg ">{property.location}</div>
                                </div>
                                <div className="max-w-[14rem] text-slate-900 text-lg font-bold 2xl:max-w-full 2xl:text-2xl">{property.title}</div>

                            </div>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute -left-3 -top-2" width="2" height="51" viewBox="0 0 2 51" fill="none">
                                    <path opacity="0.2" d="M1 0.5V50.5" stroke="#0C0839" />
                                </svg>
                                <div className="  text-[#0C0839] text-xs font-medium 2xl:text-lg">Property Starting Price</div>
                                <div className=" text-slate-900 text-xl font-bold 2xl:text-2xl">{property.price}</div>

                            </div>
                        </div>
                        <div className="flex items-center self-start sm:self-center gap-3">
                            <button onClick={()=>setOpen(true)} className="px-6 py-1.5  border bg-white text-[#0C0839] border-[#0C0839] rounded-full  justify-center items-center gap-1.5 flex">
                                <div className=" text-sm font-medium 2xl:text-lg">Sell</div>
                            </button>
                            <button className="px-4 py-1.5  bg-[#0C0839] rounded-full backdrop-blur-[29.60px] justify-center items-center gap-1.5 flex">
                                <div className="text-white text-sm font-medium 2xl:text-lg">Vote Now</div>
                            </button>
                            <ListPropertyShares open={open} handleClose={() => setOpen(false)} />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-5 w-full">
                    <CurrentApr />
                    <BoostedApr />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[63%_35%] gap-5">
                <Assets />
                <Holidays />
            </div>

        </div>
    )
}

export default Properties