
import Image from "next/image"
import Table from "../components/table"
import img from "../images/profile.svg"



const LeaderBoard = () => {
    const columns = ["Username", "Fractions Owned", "Current Value", "Performance", "Dividends Received", "Total Profit/Loss"]


    const rows = [
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000M`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        },
        {
            logo: img,
            username: "John Doe",
            fractions: 100,
            value: `1000K`,
            performance: `+ 10`,
            dividends: `+ $10000`,
            profit: `+ $1000`
        }

    ]


    const renderRows = () => {
        const totalColumns = `grid-cols-${columns.length}`
        return (
            // rows?.slice(0, 5).map((row, key) => (
            //     <tr key={key} className={`text-[#0C0839] font-bold 2xl:text-lg ${key < (rows.length - 1) ? "border-b-2" : ""}`}>

            //         <td className="flex items-center w-fit gap-2 p-4 ">
            //             <span className="mr-5">{key + 1}</span>
            //             <div className="h-9 w-full max-w-9 flex-min-w-max shrink-0">
            //                 <Image src={row.logo} width={60} height={50} alt="Row" />
            //             </div>
            //             <p className=" font-bold text-black  flex flex-col w-fit">
            //                 {row.username}
            //                 <span className="opacity-60 font-semibold">{row.location}</span>
            //             </p>
            //         </td>

            //         <td className="text-center p-4">
            //             {row.fractions}K

            //         </td>

            //         <td className="text-center p-4">
            //             <p className="font-bold text-meta-3">${row.value}</p>
            //         </td>

            //         <td className="text-center p-4">{row.performance}%
            //         </td>
            //         <td className="text-center p-4">{row.dividends}
            //         </td>

            //         <td className={`text-center p-4 ${row.profit[0] == "+" ? "text-[#43CD61]" : "text-red-400"}`}>
            //             {row.profit}
            //         </td>
            //     </tr>
            // ))
            <tr className="border-t-2 border-b-2">
                <td colSpan={columns.length} className="text-[#0C0839] text-center font-bold 2xl:text-lg py-4 ">No data available</td>
                

            </tr>
        )
    }




    return (
        <Table title="Top Earners Leaderboard" columns={columns} rows={renderRows} />
    )
}

export default LeaderBoard