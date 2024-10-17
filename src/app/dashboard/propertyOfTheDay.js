import Image from "next/image"
import Link from "next/link"

const PropertyOfTheDay = ({propertyDetail}) => {
    const {img,price, location, title, expectedReturn, dividendYield, dividendFrequency, priceOfRealEstate} = propertyDetail
    return (
        <div className="w-full">
            <div className="pb-2.5 pt-6  xl:pb-1">
                <div className="mb-6 flex justify-between">
                    <div>
                        <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                            Property of the Day
                        </h4>
                    </div>

                </div>
                <div className="flex flex-col gap-5 w-full">
                    <div className="w-full relative">
                        <Image
                            src={img}

                            className="h-auto md:h-[30rem] w-full  max-w-full rounded-xl"
                            width={600}
                            height={600}
                            alt="Property of the day"
                        />
                        <div className="w-full sm:w-[322px] h-[50px] flex items-center gap-2 absolute top-5  bg-purple-500 rounded-tr-[50px] rounded-br-[50px]">
                            <div className="sm:left-[27px] sm:top-[6px] sm:absolute text-white text-2xl font-bold  leading-[39px]">{price}*</div>
                            <div className="sm:left-[183px] sm:top-[12px] sm:absolute text-white text-base font-semibold  leading-[23px]">starting price</div>
                        </div>

                    </div>
                    <div className=" justify-between w-full items-center gap-[46px]  flex flex-col md:flex-row ">
                        <div className="relative shrink-0">
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                                    <path d="M6.99997 19C5.73692 17.9228 4.56617 16.7419 3.49999 15.4697C1.89999 13.5591 8.79148e-07 10.7136 8.79148e-07 8.00214C-0.000693118 6.61737 0.409507 5.26353 1.17869 4.11193C1.94787 2.96034 3.04146 2.06276 4.32105 1.5328C5.60064 1.00285 7.00872 0.864328 8.36709 1.13477C9.72544 1.40523 10.9731 2.07249 11.952 3.05211C12.6037 3.70084 13.1203 4.47237 13.4719 5.32204C13.8234 6.17171 14.0029 7.08265 14 8.00214C14 10.7136 12.1 13.5591 10.5 15.4697C9.43376 16.7419 8.26303 17.9228 6.99997 19ZM6.99997 5.00273C6.20433 5.00273 5.44127 5.31873 4.87866 5.88123C4.31605 6.44373 3.99999 7.20665 3.99999 8.00214C3.99999 8.79763 4.31605 9.56055 4.87866 10.123C5.44127 10.6855 6.20433 11.0016 6.99997 11.0016C7.79562 11.0016 8.55868 10.6855 9.12129 10.123C9.68389 9.56055 9.99998 8.79763 9.99998 8.00214C9.99998 7.20665 9.68389 6.44373 9.12129 5.88123C8.55868 5.31873 7.79562 5.00273 6.99997 5.00273Z" fill="#A260FD" />
                                </svg>
                                <div className=" opacity-50 text-slate-900 text-lg font-medium  leading-[27px]">{location}</div>
                            </div>
                            <div className="max-w-[16rem] 2xl:max-w-full 2xl:text-3xl text-slate-900 text-2xl font-bold  leading-[37px]">{title}</div>

                        </div>
                        <div className="justify-between w-full items-center gap-6 flex flex-1 flex-col md:flex-row flex-wrap ">
                            <div className="relative">
                                <div className=" text-slate-900 text-xl font-semibold 2xl:text-2xl  leading-[30px]">{expectedReturn}</div>
                                <div className=" opacity-50 text-slate-900 text-xs font-medium 2xl:text-lg  leading-[21px]">Expected Return</div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute -right-3 top-0" width="2" height="51" viewBox="0 0 2 51" fill="none">
                                    <path opacity="0.2" d="M1 0.5V50.5" stroke="#0C0839" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className=" text-slate-900 text-xl font-semibold 2xl:text-2xl  leading-[30px]">{dividendYield}</div>
                                <div className=" opacity-50 text-slate-900 text-xs font-medium 2xl:text-lg  leading-[21px]">Dividend Yield</div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute -right-3 top-0" width="2" height="51" viewBox="0 0 2 51" fill="none">
                                    <path opacity="0.2" d="M1 0.5V50.5" stroke="#0C0839" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className=" text-slate-900 text-xl font-semibold 2xl:text-2xl  leading-[30px]">{dividendFrequency}</div>
                                <div className=" opacity-50 text-slate-900 text-xs font-medium 2xl:text-lg  leading-[21px]">Dividend Frequency</div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute -right-3 top-0" width="2" height="51" viewBox="0 0 2 51" fill="none">
                                    <path opacity="0.2" d="M1 0.5V50.5" stroke="#0C0839" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className=" opacity-50 text-slate-900 text-lg font-medium 2xl:text-xl leading-[27px]">Price of Real Estate*</div>
                                <div className=" text-slate-900 text-xl font-bold 2xl:text-2xl">{priceOfRealEstate}</div>
                            </div>
                        </div>
                        <div className="">
                            {/* <Link href={`/marketplace/123`} className="px-4 py-2  bg-[#954AFC] rounded-full backdrop-blur-[29.60px] justify-center items-center gap-1.5 flex">
                                <div className="text-white text-sm font-semibold 2xl:text-lg">Buy Now</div>
                            </Link> */}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PropertyOfTheDay