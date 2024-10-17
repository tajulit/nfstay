const TransactionItem = ({ label, value, isTotal }) => (
    <div className="flex items-center justify-between w-full gap-5 flex-wrap">
        <p className={`${isTotal ? 'text-[#954AFC] font-bold opacity-100 text-lg' : '2xl:text-lg opacity-50 text-[#0C0839] text-sm font-medium '}`}>
            {label}
        </p>
        <span className={` ${isTotal ? 'text-[#954AFC] text-lg font-bold' : 'text-base font-semibold'}`}>
            {value}
        </span>
    </div>
);

const BreadDown = () => {
    const transactions = [
        { label: "Property Listing Price", value: "USD 728,000" },
        { label: "Transaction Costs", value: "USD 72,000" },
        { label: "Title Search & Insurance (0.5% - 1%)", value: "USD 7,200" },
        { label: "Recording Fees (0.2% - 0.5%)", value: "USD 3,600" },
        { label: "Legal Fees (0.5% - 1%)", value: "USD 7,200" },
        { label: "Taxes (1%)", value: "USD 7,200" },
        { label: "Broker Fee (3%)", value: "USD 21,600" },
        { label: "Renovation Costs (2%)", value: "USD 14,400" },
        { label: "Metropoly fee (1.5%)", value: "USD 10,800" },
        { label: "Total Acquisition Cost", value: "USD 7,200", isTotal: true },
        { label: "Total Number of NFTs", value: "1,000" },
        { label: "Value of One NFT", value: "1/1000" },
        { label: "Mint Price Per NFT", value: "USD 800", isTotal: true },
    ];
    const rentals = [
        { label: "Gross Yield", value: "10.32 %" },
        { label: "Gross Rent Per Year", value: "USD 88,560" },
        { label: "Service Charges (10%)", value: "USD 8,856" },
        { label: "Property Management (15%)", value: "USD 88,560" },
        { label: "Property Insurance", value: "USD 11,937" },
        { label: "Maintenance Charges (10%)", value: "USD 11,937" },
        { label: "Net Dividend Yield", value: "5.32 %" },
        { label: "Annual Rental Income", value: "USD 45,752", isTotal: true },

    ]
    return (
        <div className="flex flex-col gap-5">

            <h4 className="text-title-lg font-bold text-black 2xl:text-3xl">
                Financial Breakdown
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 flex flex-col gap-5 bg-[#F7F6FF] rounded-lg">
                    <div className="flex pb-3 border-b-2 justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-white rounded-lg shadow-lg border flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5365 12.4208C16.1515 12.7966 15.9315 13.3375 15.9865 13.915C16.069 14.905 16.9765 15.6291 17.9665 15.6291H19.7082V16.72C19.7082 18.6175 18.159 20.1666 16.2615 20.1666H5.73817C3.84067 20.1666 2.2915 18.6175 2.2915 16.72V10.5508C2.2915 8.6533 3.84067 7.10413 5.73817 7.10413H16.2615C18.159 7.10413 19.7082 8.6533 19.7082 10.5508V11.8708H17.8565C17.3432 11.8708 16.8757 12.0724 16.5365 12.4208Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.2915 11.3758V7.1867C2.2915 6.09587 2.96067 5.12416 3.97817 4.73916L11.2565 1.98916C12.3932 1.55833 13.6123 2.40169 13.6123 3.62085V7.10418" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.6787 12.8059V14.6943C20.6787 15.1985 20.2754 15.6109 19.7621 15.6293H17.9654C16.9754 15.6293 16.0679 14.9051 15.9854 13.9151C15.9304 13.3376 16.1504 12.7968 16.5354 12.4209C16.8746 12.0726 17.3421 11.871 17.8554 11.871H19.7621C20.2754 11.8893 20.6787 12.3018 20.6787 12.8059Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.4165 11H12.8332" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-lg 2xl:text-xl">Transaction</h3>
                                <p className="text-[#954AFC] 2xl:text-base">Details</p>

                            </div>

                        </div>

                        <div className="flex items-center gap-2">
                            <p className="opacity-60 2xl:text-base">Last Update: 2 days ago</p>
                            <div className="size-8 border-2 rounded-lg flex items-center justify-center">
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.1665 1.5H12.8332" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                    </div>

                    {/* <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Property Listing Price</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 728,000</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Transaction Costs </p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 72,000</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Title Search & Insurance (0.5% - 1%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 7,200</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Recording Fees (0.2% - 0.5%) </p>
                            <span className="text-base font-semibold 2xl:text-xl"> USD 3,600</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Legal Fees (0.5% - 1%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 7,200</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Taxes (1%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 7,200</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Broker Fee (3%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 21,600</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Renovation Costs (2%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 14,400</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Metropoly fee (1.5%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 10,800</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="text-[#954AFC] text-lg font-bold">Total Acquisition Cost</p>
                            <span className="text-lg text-[#954AFC] font-bold">USD 7,200</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Total Number of NFTs </p>
                            <span className="text-base font-semibold 2xl:text-xl">1,000</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Value of One NFT </p>
                            <span className="text-base font-semibold 2xl:text-xl">1/1000</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="text-[#954AFC] text-lg font-bold">Mint Price Per NFT</p>
                            <span className="text-lg text-[#954AFC] font-bold">USD 800</span>
                        </div>
                    </div> */}
                    <div className="flex flex-col gap-2 w-full">
                        {transactions.map((transaction, index) => (
                            <TransactionItem
                                key={index}
                                label={transaction.label}
                                value={transaction.value}
                                isTotal={transaction.isTotal}
                            />
                        ))}
                    </div>

                </div>
                <div className="p-4 flex flex-col gap-5 bg-[#F7F6FF] rounded-lg h-fit">
                    <div className="flex pb-3 border-b-2 justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-white rounded-lg shadow-lg border flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.25 6.41671V15.5834C19.25 18.3334 17.875 20.1667 14.6667 20.1667H7.33333C4.125 20.1667 2.75 18.3334 2.75 15.5834V6.41671C2.75 3.66671 4.125 1.83337 7.33333 1.83337H14.6667C17.875 1.83337 19.25 3.66671 19.25 6.41671Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.2915 4.125V5.95833C13.2915 6.96667 14.1165 7.79167 15.1248 7.79167H16.9582" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.3335 11.9166H11.0002" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.3335 15.5834H14.6668" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-lg 2xl:text-xl">Rental</h3>
                                <p className="text-[#954AFC] 2xl:text-base">Breakdown</p>

                            </div>

                        </div>

                        <div className="flex items-center gap-2">
                            <p className="opacity-60 2xl:text-base">Last Update: 2 days ago</p>
                            <div className="size-8 border-2 rounded-lg flex items-center justify-center">
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.1665 1.5H12.8332" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                    </div>

                    {/* <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Gross Yield</p>
                            <span className="text-base font-semibold 2xl:text-xl">10.32 %</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Gross Rent Per Year</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 88,560</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Service Charges (10%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 8,856</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Property Management (15%)</p>
                            <span className="text-base font-semibold 2xl:text-xl"> USD 88,560</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Property Insurance</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 11,937</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Maintenance Charges (10%)</p>
                            <span className="text-base font-semibold 2xl:text-xl">USD 11,937</span>
                        </div>
                        <div className="flex items-center justify-between w=full gap-5 flex-wrap">
                            <p className="opacity-50 text-[#0C0839] text-sm font-medium 2xl:text-lg">Net Dividend Yield</p>
                            <span className="text-base font-semibold 2xl:text-xl">5.32 %</span>
                        </div>

                        <div className="flex items-center justify-between w-full gap-5 flex-wrap">
                            <p className="text-[#954AFC] text-lg font-bold">Annual Rental Income</p>
                            <span className="text-lg text-[#954AFC] font-bold">USD 45,752</span>
                        </div>

                    </div> */}
                    <div className="flex flex-col gap-2 w-full">
                        {rentals.map((rental, index) => (
                            <TransactionItem
                                key={index}
                                label={rental.label}
                                value={rental.value}
                                isTotal={rental.isTotal}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default BreadDown