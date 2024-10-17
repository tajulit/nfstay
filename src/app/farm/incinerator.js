import Image from "next/image"
import fire from "../images/fire.webp"

const Incinerator = () => {

    const table = {
        headers: ["#", "source", "date", "amount", "status"],
        data: [
            {
                id: 1,
                source: "Boardroom",
                date: "2021-08-09",
                time: "9:23 PM",
                amount: "0.0001",
                status: "Pending"
            },
            {
                id: 2,
                source: "Boardroom",
                date: "2021-08-09",
                time: "9:23 PM",
                amount: "0.0001",
                status: "Pending"
            },
            {
                id: 3,
                source: "Boardroom",
                date: "2021-08-09",
                time: "9:23 PM",
                amount: "0.0001",
                status: "Pending"
            },
            {
                id: 4,
                source: "Boardroom",
                date: "2021-08-09",
                time: "9:23 PM",
                amount: "0.0001",
                status: "Pending"
            },
            {
                id: 5,
                source: "Farm",
                date: "2021-08-09",
                time: "9:23 PM",
                amount: "0.0001",
                status: "Pending"
            },
        
        ]
    }



    return (
        <div className="flex relative flex-col gap-5 isolate  rounded-3xl overflow-hidden" style={{ background: "linear-gradient(180deg, #01060F 0%, #1F242D 100%)" }}>
            <div className="w-full h-[196px]  absolute -top-[159px] rounded-full blur-3xl -z-[1]" style={{ background: "linear-gradient(90deg, #9945FF 0%, #20E19F 100%)" }}></div>
            <div className="flex flex-col sm:flex-row gap-8 justify-between">
                <div className="flex flex-col  gap-5 p-8 z-[1]">
                    <h1 className="text-white text-4xl font-bold 2xl:text-5xl">Incinerator</h1>
                    <p className="text-white 2xl:text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at orci ac mauris rutrum placerat.</p>
                    <button className="cta_button 2xl:text-lg">CTA Button</button>
                </div>
                <div className="md:w-1/2 flex items-center justify-center  relative isolate">
                    <div className="flex items-start gap-3 p-8  z-[1] rounded-lg border-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg">
                        <Image
                            src={fire}
                            alt="fire"
                            width={50}
                            height={50}
                        />
                        <div className="flex flex-col gap-3 items-start">
                            <h1 className="text-white text-4xl font-bold 2xl:text-5xl">1,833,234</h1>
                            <p className="opacity-60 text-white font-semibold text-lg 2xl:text-xl">Tokens Burned</p>


                        </div>
                    </div>
                    <Image
                        src={fire}
                        alt="fire"
                        width={30}
                        height={30}
                        className="absolute -top-2 left-1/2"
                    />
                    <Image
                        src={fire}
                        alt="fire"
                        width={50}
                        height={50}
                        className="absolute top-12 right-5 -rotate-12 scale-x-[-1]"
                    />

                    <Image
                        src={fire}
                        alt="fire"
                        width={50}
                        height={50}
                        className="absolute bottom-5 right-5 rotate-[30deg] hidden sm:block"
                    />
                    <Image
                        src={fire}
                        alt="fire"
                        width={25}
                        height={25}
                        className="absolute bottom-20 right-1/4 "

                    />
                    <Image
                        src={fire}
                        alt="fire"
                        width={30}
                        height={30}
                        className="absolute bottom-12 left-16 "

                    />
                </div>
            </div>
            <div className="flex flex-col gap-5 p-4 md:p-8 z-[1]">
                
                <div className="overflow-x-auto">
                    <table className="w-full 2xl:text-lg">
                        <thead>
                            <tr className=" bg-[#F3F3F3] bg-opacity-20 ">
                                {table.headers.map((header, index) => (
                                    <th key={index} className={`text-white px-4 ${index == 0 ? "rounded-[10px_0_0_10px]" : index == (table.headers.length -1) ? "rounded-[0_10px_10px_0]" : ""}  text-left p-2`}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table.data.map((row, index) => (
                                <tr key={index} className={`text-white ${index < table.data.length  ? "border-b border-b-[#FFFFFF30]" : ""}  `}>
                                    <td className="p-4">{row.id}</td>
                                    <td className="p-4">{row.source}</td>
                                    <td className="p-4">{row.date}</td>
                                    <td className="p-4">{row.amount}</td>
                                    <td className="p-4">{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Incinerator