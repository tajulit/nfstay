
import Image from "next/image"
import lp from "../images/lpToken.svg"
import stay from "../images/stay.svg"
const Assets = () => {
    const data = [
        {
            id: 1,
            title: "Properties",
            stacked: "4.33 stacked",
            price: "$501",
            amount: "32,236.77",
            totalValue: "$27,4433.87",
            percentage: 53,
            imageType: "svg",
            gradientId: "paint0_linear_0_4256",
            svgWidth: 42,
            svgHeight: 42,
            gradientColors: ["#9945FF", "#20E19F"],
        },
        {
            id: 2,
            title: "LP Token",
            stacked: "0 stacked",
            price: "$2.18",
            amount: "0",
            totalValue: "$0",
            percentage: 0,
            imageType: "image",
            imageSrc: lp,
            imageAlt: "LP Token",
            imageWidth: 60,
            imageHeight: 60,
        },
        {
            id: 3,
            title: "Stay",
            stacked: "0 stacked",
            price: "$0.00014",
            amount: "0",
            totalValue: "$0",
            percentage: 0,
            imageType: "image",
            imageSrc: stay,
            imageAlt: "Stay Token",
            imageWidth: 40,
            imageHeight: 40,
        },
    ];
    return (

        <div className="flex flex-col gap-5 border rounded-lg shadow">
            <div className="w-full border-b-2 p-4">
                <h4 className="text-lg font-bold text-black 2xl:text-2xl">Assets Overview</h4>
            </div>
            {/* <div className="flex flex-col p-4 gap-5">
                    <div className="flex items-start gap-5 border-b-2 pb-3 flex-wrap ">
                        <div className="shrink-0">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="21" fill="url(#paint0_linear_0_4256)" />
                                <path d="M24 30V22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22V30" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 19C11.9999 18.709 12.0633 18.4216 12.1858 18.1577C12.3082 17.8938 12.4868 17.6598 12.709 17.472L19.709 11.473C20.07 11.1679 20.5274 11.0005 21 11.0005C21.4726 11.0005 21.93 11.1679 22.291 11.473L29.291 17.472C29.5132 17.6598 29.6918 17.8938 29.8142 18.1577C29.9367 18.4216 30.0001 18.709 30 19V28C30 28.5304 29.7893 29.0391 29.4142 29.4142C29.0391 29.7893 28.5304 30 28 30H14C13.4696 30 12.9609 29.7893 12.5858 29.4142C12.2107 29.0391 12 28.5304 12 28V19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_0_4256" x1="1.83653e-06" y1="-8.75011" x2="42.607" y2="-8.23528" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9945FF" />
                                        <stop offset="1" stop-color="#20E19F" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <div className="flex flex-col pl-4 gap-1 w-full flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                                <div className="flex items-center  gap-3 flex-wrap">
                                    <h3 className="text-base font-bold 2xl:text-lg">Properties</h3>
                                    <span className="px-4 py-1 font-semibold rounded-full bg-[#0C083917]">4.33 stacked</span>
                                </div>
                                <h2 className="text-xl font-bold">$27,4433.87</h2>
                            </div>
                            <div className="flex items-center justify-between w-full flex-wrap gap-3">
                                <h3 className="text-sm font-medium text-[#9945FF]">Current Price: $501</h3>
                                <h2 className="text-sm font-medium opacity-60">Amount: 32,236.77</h2>
                            </div>
                            <div className="flex items-center w-full my-2 gap-4 justify-between">
                                <div className="flex w-full relative rounded-full bg-[#A0A3AA] transition-all bg-opacity-30 overflow-hidden h-2">
                                    <div className="bg-[#0C0839] rounded-full h-full w-1/3"></div>

                                </div>
                                <span className="w-fit shrink-0 font-medium">53%</span>
                            </div>

                        </div>

                    </div>
                    <div className="flex items-start gap-5 border-b-2 pb-3 flex-wrap">
                        <div className="shrink-0">
                            <Image
                                src={lp}
                                width={60}
                                height={60}
                                alt="LP Token"
                            />


                        </div>
                        <div className="flex flex-col gap-1  w-full flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h3 className="text-base font-bold 2xl:text-lg">LP Token</h3>
                                    <span className="px-4 py-1 font-semibold rounded-full bg-[#0C083917]">0 stacked</span>
                                </div>
                                <h2 className="text-xl font-bold">$0
                                </h2>
                            </div>
                            <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                                <h3 className="text-sm font-medium text-[#9945FF]">Current Price: $2.18</h3>
                                <h2 className="text-sm font-medium opacity-60">Amount: 0</h2>
                            </div>
                            <div className="flex items-center w-full my-2 gap-4 justify-between">
                                <div className="flex w-full relative rounded-full bg-[#A0A3AA] transition-all bg-opacity-30 overflow-hidden h-2">
                                    <div className="bg-[#0C0839] rounded-full h-full w-3"></div>

                                </div>
                                <span className="w-fit shrink-0 font-medium">0%</span>
                            </div>

                        </div>

                    </div>
                    <div className="flex items-start gap-5 flex-wrap">
                        <div className="shrink-0">
                            <Image
                                src={stay}
                                width={40}
                                height={40}
                                alt="LP Token"
                            />


                        </div>
                        <div className="flex flex-col pl-4 gap-1 w-full flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h3 className="text-base font-bold 2xl:text-lg">Stay</h3>
                                    <span className="px-4 py-1 font-semibold rounded-full bg-[#0C083917]">0 stacked</span>
                                </div>
                                <h2 className="text-xl font-bold">$0</h2>
                            </div>
                            <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                                <h3 className="text-sm font-medium text-[#9945FF]">Current Price: $0.00014</h3>
                                <h2 className="text-sm font-medium opacity-60">Amount: 0</h2>
                            </div>
                            <div className="flex items-center w-full my-2 gap-4 justify-between">
                                <div className="flex w-full relative rounded-full bg-[#A0A3AA] transition-all bg-opacity-30 overflow-hidden h-2">
                                    <div className="bg-[#0C0839] rounded-full h-full w-3"></div>

                                </div>
                                <span className="w-fit shrink-0 font-medium">0%</span>
                            </div>

                        </div>

                    </div>
                </div> */}
            <div className="flex flex-col p-4 gap-5">
                {data.map((item) => (
                    <div key={item.id} className="flex items-start gap-5 border-b-2 pb-3 flex-wrap">
                        <div className="shrink-0">
                            {item.imageType === "svg" ? (
                                <svg
                                    width={item.svgWidth}
                                    height={item.svgHeight}
                                    viewBox={`0 0 ${item.svgWidth} ${item.svgHeight}`}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="21" cy="21" r="21" fill={`url(#${item.gradientId})`} />
                                    <path
                                        d="M24 30V22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22V30"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 19C11.9999 18.709 12.0633 18.4216 12.1858 18.1577C12.3082 17.8938 12.4868 17.6598 12.709 17.472L19.709 11.473C20.07 11.1679 20.5274 11.0005 21 11.0005C21.4726 11.0005 21.93 11.1679 22.291 11.473L29.291 17.472C29.5132 17.6598 29.6918 17.8938 29.8142 18.1577C29.9367 18.4216 30.0001 18.709 30 19V28C30 28.5304 29.7893 29.0391 29.4142 29.4142C29.0391 29.7893 28.5304 30 28 30H14C13.4696 30 12.9609 29.7893 12.5858 29.4142C12.2107 29.0391 12 28.5304 12 28V19Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <linearGradient id={item.gradientId} x1="0" y1="-8.75" x2="42.607" y2="-8.235" gradientUnits="userSpaceOnUse">
                                            <stop stopColor={item.gradientColors[0]} />
                                            <stop offset="1" stopColor={item.gradientColors[1]} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ) : (
                                <Image src={item.imageSrc} width={item.imageWidth} height={item.imageHeight} alt={item.imageAlt} />
                            )}
                        </div>
                        <div className="flex flex-col gap-1 w-full flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h3 className="text-base font-bold 2xl:text-lg">{item.title}</h3>
                                    <span className="px-4 py-1 font-semibold rounded-full bg-[#0C083917]">{item.stacked}</span>
                                </div>
                                <h2 className="text-xl font-bold">{item.totalValue}</h2>
                            </div>
                            <div className="flex items-center justify-between w-full flex-wrap gap-3">
                                <h3 className="text-sm font-medium text-[#9945FF]">Current Price: {item.price}</h3>
                                <h2 className="text-sm font-medium opacity-60">Amount: {item.amount}</h2>
                            </div>
                            <div className="flex items-center w-full my-2 gap-4 justify-between">
                                <div className="flex w-full relative rounded-full bg-[#A0A3AA] transition-all bg-opacity-30 overflow-hidden h-2">
                                    <div className={`bg-[#0C0839] rounded-full h-full`} style={{ width: `${item.percentage}%` }}></div>
                                </div>
                                <span className="w-fit shrink-0 font-medium">{item.percentage}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Assets