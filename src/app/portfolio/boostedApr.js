

const BoostedApr = () => {
    return (
        <div className="flex flex-col p-4 shadow  border_gradient rounded-lg divide-y w-full">
            <div className="flex items-center w-full justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl 2xl:text-2xl">Boosted APR: 22%</h2>
                    <p className="opacity-60 font-medium 2xl:text-lg">Not Boosted</p>
                </div>
                <div className="h-full text-xl 2xl:text-2xl">🚀</div>


            </div>
            <div className="flex items-center flex-wrap w-full justify-between gap-6 mt-3 pt-3">
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold  2xl:text-2xl">$5,500</h3>
                    <span className="opacity-60 text-xs font-medium 2xl:text-base">Your Shares</span>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold  2xl:text-2xl">115%</h3>
                    <span className="opacity-60 text-xs font-medium 2xl:text-base">6YR Expected ROI</span>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold  2xl:text-2xl">Monthly</h3>
                    <span className="opacity-60 text-xs font-medium 2xl:text-base">Payout Frequency</span>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-3 pt-3">
                <span className="opacity-60 text-xs font-medium 2xl:text-base">Cost of Booster</span>
                <h3 className="text-lg font-bold  2xl:text-2xl">25,975 STAYS</h3>
            </div>

            <button className="px-4 py-2 my-2 bg-boosted rounded-full backdrop-blur-[29.60px] justify-center items-center gap-1.5 flex">
                <div className="text-white text-sm font-semibold ">Boost APR 🚀</div>
            </button>
        </div>
    )
}

export default BoostedApr