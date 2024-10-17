import Properties from "./properties"
import Revenue from "./revenue"

const Portfolio = () => {
    return (
        <div className="w-full">
            <div className="pb-2.5  flex flex-col gap-6 xl:pb-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex gap-2 flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                                Portfolio
                            </h4>

                        </div>
                        <p className="opacity-80 text-[#0C0839] 2xl:text-lg">Stay updated with the latest news from NFsTay!</p>

                    </div>
                </div>
                <Revenue />
                <Properties />
            </div>
        </div>
    )
}

export default Portfolio