import Graph from "./graph"
import stay from "../images/stay.svg"
import lp from "../images/lpToken.svg"


import Image from "next/image"


const Analytics = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[65%_34%] gap-3">
            <div className="flex flex-col gap-5 justify-between">
                <div className="flex items-end gap-3 ">
                    <h1 className="text-3xl font-bold">63.125 USDT/ BTC</h1>
                    <span className="text-xs opacity-60">(+6.57%)</span>
                </div>
                <Graph />
                <div className="flex flex-wrap gap-5 justify-between p-4 md:px-12 rounded-xl border shadow">
                    <div className=" flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Image
                                src={stay}
                                width={40}
                                height={40}
                                className="size-5"
                                alt="Stay"
                            />
                            <h3 className="text-lg font-bold">90.560.000</h3>

                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="https://s3-alpha-sig.figma.com/img/d6ea/efcb/e52ce124e99682d6a7228bc81894503e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eG3iA6nw4piBDKZir~m0vYVpv0wxWe~wtSzkJXLKcmvstHH7UPjd~Urk~SId3X427jqCSCduGdprZJgKZNEsAnM6TNmBZGuY1ncMUbZfCHhuC9Ml~4~5s--8Q1214aXscNAjIuXCjCNiLB4zuuNNzb0~tcU-b5uLNsDg0N6v-NaBTt09hT~3WIOPyFycJgmLZuod19~VrhPyjtk4RHu4NikFlxfWvdol-C3vH4vmJC20VTNCwBxjvyxTeFCt7nNznfOaaMdJPP41p6rRBH54FLmzHRtUZVg4AI2jzRz5X1T2Y35umAp9AvfgQVvYbOPxEnq0e8ZX4Je0ltYK5c5QNw__"
                                width={40}
                                height={40}
                                className="size-5"
                                alt="USDT"
                            />
                            <h3 className="text-lg font-bold">1,528</h3>

                        </div>

                    </div>
                    <div className=" flex flex-col gap-2">
                        <h3 className="text-xl font-bold 2xl:text-3xl">$181M</h3>
                        <p className="opacity-80 2xl:text-lg">Total volume locked</p>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h3 className="text-xl font-bold 2xl:text-3xl">$381M</h3>
                        <p className="opacity-80 2xl:text-lg">24h trade volume</p>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h3 className="text-xl font-bold 2xl:text-3xl">3.91%</h3>
                        <p className="opacity-80 2xl:text-lg">APR</p>
                    </div>
                </div>

            </div>
            <div className="border shadow rounded-lg p-4 flex flex-col gap-5">
                <h1 className="text-xl font-bold">Heading goes here</h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-start  gap-5">
                        <span className="text-lg font-bold">1. </span>
                        <div className="flex flex-col w-max">
                            <h2 className="text-lg font-bold">Add</h2>
                            <span className="w-full h-1 bg-[#7673E3] rounded"></span>
                        </div>
                        <h2 className="text-lg font-bold opacity-50">Remove</h2>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8999 12.6599C19.7396 12.4774 19.6512 12.2428 19.6512 11.9999C19.6512 11.757 19.7396 11.5224 19.8999 11.3399L21.1799 9.89989C21.3209 9.74256 21.4085 9.5446 21.4301 9.3344C21.4516 9.12421 21.4061 8.91258 21.2999 8.72989L19.2999 5.2699C19.1948 5.08742 19.0348 4.94277 18.8426 4.85658C18.6505 4.77039 18.4361 4.74705 18.2299 4.7899L16.3499 5.1699C16.1107 5.21932 15.8616 5.17948 15.6498 5.0579C15.4379 4.93631 15.2779 4.74138 15.1999 4.5099L14.5899 2.6799C14.5228 2.48127 14.395 2.30876 14.2245 2.18674C14.0541 2.06471 13.8495 1.99935 13.6399 1.9999H9.6399C9.42183 1.98851 9.20603 2.04882 9.02546 2.17161C8.84489 2.2944 8.70948 2.47291 8.6399 2.6799L8.0799 4.5099C8.0019 4.74138 7.84187 4.93631 7.63001 5.0579C7.41815 5.17948 7.16911 5.21932 6.9299 5.1699L4.9999 4.7899C4.80445 4.76228 4.6052 4.79312 4.42724 4.87853C4.24929 4.96395 4.1006 5.10012 3.9999 5.2699L1.9999 8.72989C1.89106 8.91054 1.84212 9.12098 1.86008 9.33112C1.87804 9.54126 1.96198 9.74034 2.0999 9.89989L3.3699 11.3399C3.53022 11.5224 3.61863 11.757 3.61863 11.9999C3.61863 12.2428 3.53022 12.4774 3.3699 12.6599L2.0999 14.0999C1.96198 14.2595 1.87804 14.4585 1.86008 14.6687C1.84212 14.8788 1.89106 15.0892 1.9999 15.2699L3.9999 18.7299C4.10499 18.9124 4.26502 19.057 4.45715 19.1432C4.64928 19.2294 4.86372 19.2527 5.0699 19.2099L6.9499 18.8299C7.18911 18.7805 7.43815 18.8203 7.65001 18.9419C7.86187 19.0635 8.0219 19.2584 8.0999 19.4899L8.7099 21.3199C8.77948 21.5269 8.91489 21.7054 9.09546 21.8282C9.27603 21.951 9.49183 22.0113 9.7099 21.9999H13.7099C13.9195 22.0004 14.1241 21.9351 14.2945 21.8131C14.465 21.691 14.5928 21.5185 14.6599 21.3199L15.2699 19.4899C15.3479 19.2584 15.5079 19.0635 15.7198 18.9419C15.9316 18.8203 16.1807 18.7805 16.4199 18.8299L18.2999 19.2099C18.5061 19.2527 18.7205 19.2294 18.9126 19.1432C19.1048 19.057 19.2648 18.9124 19.3699 18.7299L21.3699 15.2699C21.4761 15.0872 21.5216 14.8756 21.5001 14.6654C21.4785 14.4552 21.3909 14.2572 21.2499 14.0999L19.8999 12.6599ZM18.4099 13.9999L19.2099 14.8999L17.9299 17.1199L16.7499 16.8799C16.0297 16.7327 15.2805 16.855 14.6445 17.2237C14.0085 17.5924 13.53 18.1817 13.2999 18.8799L12.9199 19.9999H10.3599L9.9999 18.8599C9.76975 18.1617 9.29128 17.5724 8.6553 17.2037C8.01932 16.835 7.27012 16.7127 6.5499 16.8599L5.3699 17.0999L4.0699 14.8899L4.8699 13.9899C5.36185 13.4399 5.63383 12.7278 5.63383 11.9899C5.63383 11.252 5.36185 10.5399 4.8699 9.98989L4.0699 9.0899L5.3499 6.88989L6.5299 7.1299C7.25012 7.27712 7.99932 7.15478 8.6353 6.78609C9.27128 6.41741 9.74975 5.82805 9.9799 5.1299L10.3599 3.9999H12.9199L13.2999 5.13989C13.53 5.83805 14.0085 6.42741 14.6445 6.79609C15.2805 7.16478 16.0297 7.28712 16.7499 7.13989L17.9299 6.8999L19.2099 9.11989L18.4099 10.0199C17.9235 10.5687 17.6549 11.2766 17.6549 12.0099C17.6549 12.7432 17.9235 13.4511 18.4099 13.9999ZM11.6399 7.9999C10.8488 7.9999 10.0754 8.23449 9.41761 8.67402C8.75982 9.11354 8.24713 9.73826 7.94438 10.4692C7.64163 11.2001 7.56241 12.0043 7.71675 12.7803C7.8711 13.5562 8.25206 14.2689 8.81147 14.8283C9.37088 15.3877 10.0836 15.7687 10.8595 15.923C11.6355 16.0774 12.4397 15.9982 13.1706 15.6954C13.9015 15.3927 14.5262 14.88 14.9658 14.2222C15.4053 13.5644 15.6399 12.791 15.6399 11.9999C15.6399 10.939 15.2185 9.92161 14.4683 9.17147C13.7182 8.42132 12.7008 7.9999 11.6399 7.9999ZM11.6399 13.9999C11.2443 13.9999 10.8577 13.8826 10.5288 13.6628C10.1999 13.4431 9.94351 13.1307 9.79214 12.7653C9.64076 12.3998 9.60116 11.9977 9.67833 11.6097C9.7555 11.2218 9.94598 10.8654 10.2257 10.5857C10.5054 10.306 10.8618 10.1155 11.2497 10.0383C11.6377 9.96115 12.0398 10.0008 12.4053 10.1521C12.7707 10.3035 13.0831 10.5599 13.3028 10.8888C13.5226 11.2177 13.6399 11.6043 13.6399 11.9999C13.6399 12.5303 13.4292 13.039 13.0541 13.4141C12.679 13.7892 12.1703 13.9999 11.6399 13.9999Z" fill="black" />
                    </svg>

                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-lg">Choose Amount</h3>
                    <input type="number" className="border bg-[#F5F5F5] w-full p-4 outline-none rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-lg">LO Quantity</h3>
                    <div className="bg-[#F5F5F5] w-full flex items-center rounded-lg border">
                        <input type="number" className="border-none bg-transparent w-full p-4 outline-none " />
                        <span className="flex items-center gap-1 font-bold mr-4 2xl:text-lg">

                            <Image
                                src={lp}
                                width={60}
                                height={60}
                                className="shrink-0 size-5 2xl:size-8"
                                alt="LP Token"
                            />

                            LP
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap w-full justify-between">
                    <button className="border-2 border-[#954AFC]  text-[#954AFC] px-4 py-2 rounded-lg 2xl:text-lg">Crypto Payment</button>
                    <button className="  bg-[#954AFC] text-white px-4 py-2 rounded-lg flex items-center gap-1 2xl:text-lg"><svg width="13" height="13" className="2xl:size-6" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9171 6.50008C11.9171 4.45746 11.9171 3.43587 11.2822 2.80158C10.6474 2.16729 9.62636 2.16675 7.58374 2.16675H5.41707C3.37445 2.16675 2.35287 2.16675 1.71857 2.80158C1.08428 3.43641 1.08374 4.45746 1.08374 6.50008C1.08374 8.54271 1.08374 9.56429 1.71857 10.1986C2.35341 10.8329 3.37445 10.8334 5.41707 10.8334H7.58374C9.62636 10.8334 10.6479 10.8334 11.2822 10.1986C11.6365 9.84487 11.793 9.37091 11.8618 8.66675M5.41707 8.66675H3.25041M7.58374 8.66675H6.77124M1.08374 5.41675H3.79207M11.9171 5.41675H5.95874" stroke="white" stroke-width="0.8125" stroke-linecap="round" />
                    </svg>
                        Card Payment</button>

                </div>
                <div className="flex items-start  gap-5">
                    <span className="text-lg font-bold">2. </span>
                    <div className="flex flex-col w-max">
                        <h2 className="text-lg font-bold">Stake</h2>
                    </div>
                </div>
                <button className="  bg-[#954AFC] text-white px-4 py-3 font-medium text-center rounded-lg flex items-center justify-center gap-1 2xl:text-lg">
                    Add to Pool</button>
                <div className="flex items-start  gap-5">
                    <span className="text-lg font-bold">3. </span>
                    <div className="flex flex-col w-max">
                        <h2 className="text-lg font-bold">Earn</h2>

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="font-medium text-lg">Stay Earned</h3>
                        <Image
                            src={stay}
                            width={60}
                            height={60}
                            className="shrink-0 size-5"
                            alt="LP Token"
                        />
                    </div>
                    <div className="bg-[#F5F5F5] w-full flex items-center rounded-lg border">
                        <input type="number" placeholder="0.0" className="border-none bg-transparent w-full p-4 outline-none " />

                    </div>
                    <div className="flex items-center gap-3 flex-wrap w-full justify-between font-medium">
                        <button className="  bg-[#954AFC] text-white px-4 py-2 rounded-lg flex items-center gap-1 2xl:text-lg">
                            Claim & Reinvest</button>
                        <button className="border   px-4 py-2 rounded-lg 2xl:text-lg">Claim</button>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Analytics