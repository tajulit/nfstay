
import Analytics from './analytics'
import Properties from './properties'
import RecentTransaction from './recentTransaction'
import Revenue from './revenue'

const Agent = () => {
    return (
        <div className="w-full">
            <div className="pb-2.5  flex flex-col gap-6 xl:pb-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex gap-2 flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                                Agent&apos;s Hub
                            </h4>
                        </div>

                        <p className="opacity-80 text-[#0C0839] 2xl:text-lg">Keep track of all your commissions</p>


                    </div>
                </div>
                <Analytics />

                <div className="grid grid-cols-1 md:grid-cols-[23.5%_74.5%] gap-5">
                    <div className="flex flex-col gap-5 p-5 rounded-lg shadow border ">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl 2xl:text-3xl">Your Properties</h3>
                            <p className="opacity-80 text-lg">Total Properties available</p>
                        </div>

                        <div className="relative size-40 self-center">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#944afc33]" stroke-width="4"></circle>

                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#954AFC] transition-all" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="60" stroke-linecap="round"></circle>
                            </svg>


                            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <div className="flex flex-col text-center items-center justify-center gap-3">
                                    <h1 className="text-4xl font-bold">15</h1>
                                    <p className="opacity-80 2xl:text-base">Properties available</p>

                                </div>

                            </div>
                        </div>
                    </div>


                    <Revenue />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-[43%_55%] gap-5 w-full">
                    <Properties />
                    <RecentTransaction />
                </div>

            </div>
        </div>
    )
}

export default Agent