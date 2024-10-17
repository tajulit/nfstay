

const CurrentApr = () => {
    return (
        <div className="flex flex-col p-4 shadow border rounded-lg divide-y w-full">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl 2xl:text-2xl">Current APR: 17%</h2>
                <p className="opacity-60 font-medium 2xl:text-lg">Not Boosted</p>

            </div>
            <div className="flex items-center flex-wrap w-full justify-between gap-6 mt-3 pt-3">
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold 2xl:text-2xl">$5,500</h3>
                    <span className="opacity-60 text-xs font-medium 2xl:text-base">Your Shares</span>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold 2xl:text-2xl">89%</h3>
                    <span className="opacity-60 text-xs font-medium 2xl:text-base">6YR Expected ROI</span>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold 2xl:text-2xl">Monthly</h3>
                    <span className="opacity-60 text-xs font-medium 2xl:text-base">Payout Frequency</span>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-3 pt-3">
                <span className="opacity-60 text-xs font-medium 2xl:text-base">Price of Real Estate</span>
                <h3 className="text-lg font-bold 2xl:text-2xl">215,000 USD</h3>
            </div>
        </div>
    )
}

export default CurrentApr