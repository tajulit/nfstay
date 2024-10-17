

const RecentTransaction = () => {

    // const transactions = [
    //     {
    //         due: "Dec 9, 2021",
    //         client: "Omar Khan",
    //         amount: "$500",
    //         status: "Overdue"

    //     },
    //     {
    //         due: "Dec 6, 2021",
    //         client: "Kevin Jonas",
    //         amount: "$2,500",
    //         status: "Paid"

    //     },
    //     {
    //         due: "Dec 6, 2021",
    //         client: "Yusuf Reigen",
    //         amount: "$1,460",
    //         status: "Paid"

    //     },
    //     {
    //         due: "Dec 9, 2021",
    //         client: "Omar Khan",
    //         amount: "$500",
    //         status: "Overdue"

    //     },
    // ]

    const transactions = []


    return (
        <div className="flex flex-col gap-5 rounded-lg shadow border ">
            <div className="flex p-5">
                <h1 className="text-lg font-bold 2xl:text-2xl">Recent Transactions</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full shrink-0 whitespace-nowrap 2xl:text-lg">
                    <thead className="border-t-2 border-b-2 ">
                        <tr className="text-[#0C0839] opacity-40 font-medium">
                            <th className="text-left p-4">Due Date</th>
                            <th className="text-left p-4">Client</th>
                            <th className="text-left p-4">Amount</th>
                            <th className="text-left p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions?.length == 0 ? <tr className="text-[#0C0839] font-semibold"><td  className="text-center p-4" colSpan="4">No transactions yet</td></tr> :

                                transactions.map((transaction, index) => (
                                    <tr key={index} className="text-[#0C0839] font-medium">
                                        <td className="text-left p-4 ">{transaction.due}</td>
                                        <td className="text-left p-4 flex items-center gap-3" > <span className="shrink-0 w-6 h-6 rounded-full bg-[#954AFC] text-white font-semibold flex items-center justify-center">{transaction.client[0].toUpperCase()}</span> {transaction.client}</td>
                                        <td className="text-left p-4">{transaction.amount}</td>
                                        <td className="text-left p-4"><span className={`px-3 py-1.5 rounded ${transaction.status == "Overdue" ? "text-[#F06565] bg-[#FDF7F7]" : "text-[#27AE60] bg-[#27AE601A]"}`}>{transaction.status}</span></td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>



            </div>
        </div>
    )
}

export default RecentTransaction