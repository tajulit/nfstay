import Modal from "@/utils/modal"
import ModalHeader from "@/utils/modalHeader"
import { useState } from "react"
import Select from "../marketplace/select"
import Image from "next/image"
import Tooltip from "@/utils/tooltip"


const ListPropertyShares = ({ open, handleClose }) => {
    const [type, setType] = useState("fixed")
    const options = [
        { value: "usd", label: "USD" },
        { value: "ngn", label: "NGN" },
        { value: "eur", label: "EUR" },
        { value: "gbp", label: "GBP" },
        { value: "cny", label: "CNY" },
        { value: "inr", label: "INR" },
        { value: "aed", label: "AED" }
    ]

    return (
        <Modal open={open} handleClose={handleClose} max="max-w-4xl">
            <div className="flex flex-col w-full p-4 gap-5 ">
                <ModalHeader title={"List your property Shares"} handleClose={handleClose} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto max-h-[85vh]">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Type</p>
                                <Tooltip text={"some info"} />

                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <button onClick={() => setType("fixed")} type="button" className={`flex flex-col flex-1 gap-2 items-center justify-center p-4  rounded-lg border-2 ${type == "fixed" ? "border-[#954AFC] bg-[#954AFC1A]" : ""}`}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.25 2V22" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.25 5H9.75C8.82174 5 7.9315 5.36875 7.27513 6.02513C6.61875 6.6815 6.25 7.57174 6.25 8.5C6.25 9.42826 6.61875 10.3185 7.27513 10.9749C7.9315 11.6313 8.82174 12 9.75 12H14.75C15.6783 12 16.5685 12.3687 17.2249 13.0251C17.8813 13.6815 18.25 14.5717 18.25 15.5C18.25 16.4283 17.8813 17.3185 17.2249 17.9749C16.5685 18.6313 15.6783 19 14.75 19H6.25" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Fixed Pice</span>
                                </button>
                                <button onClick={() => setType("timed")} type="button" className={`flex flex-col flex-1 gap-2 items-center justify-center p-4  rounded-lg border-2 ${type == "timed" ? "border-[#954AFC] bg-[#954AFC1A]" : ""}`}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 12C3.75 13.78 4.27784 15.5201 5.26677 17.0001C6.25571 18.4802 7.66131 19.6337 9.30585 20.3149C10.9504 20.9961 12.76 21.1743 14.5058 20.8271C16.2516 20.4798 17.8553 19.6226 19.114 18.364C20.3726 17.1053 21.2298 15.5016 21.5771 13.7558C21.9243 12.01 21.7461 10.2004 21.0649 8.55585C20.3837 6.91131 19.2302 5.50571 17.7501 4.51677C16.2701 3.52784 14.53 3 12.75 3C10.234 3.00947 7.81897 3.99122 6.01 5.74L3.75 8" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.75 3V8H8.75" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.75 7V12L16.75 14" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Timed Auction</span>
                                </button>
                            </div>



                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex flex-col gap-3 w-full">
                                <p className="font-medium">Currency</p>
                                {/* select option  */}
                                <div className="relative">
                                    <select className="shadow-2 p-2  w-full px-4 font-medium border-2 outline-none rounded-lg " name="currency" >

                                        {
                                            options.map((option, index) => (
                                                <option key={index} value={option.value}>{option.label}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <p className="font-medium">Selling Price</p>
                                <input type="text" className="shadow-2 p-2 px-4 font-medium border-2 outline-none rounded-lg " placeholder="Enter price" />
                            </div>


                        </div>
                        <p className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E9F7EF] text-[#28AE60] font-semibold"><svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#28AE60" stroke="#28AE60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 16V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 8H12.0092" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                            10% below the market price</p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Quantity</p>
                                <span className="font-medium opacity-60">Balance: 25,000</span>
                            </div>
                            <input type="text" className="shadow-2 p-2 px-4 font-medium border-2 outline-none rounded-lg " placeholder="Enter quantity" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Fee</p>
                                <Tooltip text={"minimum Fee 20%"} />
                            </div>
                            <div className="flex items-center justify-between">

                                <span className="font-medium opacity-60">Service Fee</span>
                                <span className="font-medium opacity-60">2.5%</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex w-full relative rounded-xl overflow-hidden">
                            <Image
                                src="https://s3-alpha-sig.figma.com/img/c207/48c1/d36b51a56222ab90c953234432fadfaf?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaHSUlByiR~rqpxiNBrANQn08ifK4Y97IcoIve9e5PmzM39R1wu8ZadijnpQaHrLEp1eDfh0Idkdn6Iu2fic6wbxJFZUQAll~Kw73vMfIg6wZllgBRO8DpbKsRxzJX43NR5F2Clxnw3Ap7BtXQR1jXZzMFJ1b4KP9d3GhxkIreBs6-MTxy40fk1XLYy0AkY~S65wm5KRW~nvW~KSX7F6SDirIMn3CDZkfqdwrecCwkaaVXSanXP~kukTTs21hUPAX5E~CbSJPAiq5xfb7Y3pLKFrf4X~vPfHF4bdFZhT2b0febTzfH-oicUj~aIkew0RnzU8aviHdz9e~ua0hspSvA__"
                                height={300}
                                width={300}
                                layout="responsive"
                                alt="Property Image"
                                className="max-w-full h-full block"
                            />
                            <div className="flex items-center justify-between w-full p-4 absolute top-0">
                                <div className="flex items-center px-2 gap-2 py-1.5 rounded-full bg-white">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75844 3.42568C4.61798 2.56614 5.78377 2.08325 6.99935 2.08325C8.21492 2.08325 9.38071 2.56614 10.2403 3.42568C11.0998 4.28522 11.5827 5.45101 11.5827 6.66659C11.5827 8.07803 10.7856 9.61118 9.73454 10.9921C8.74996 12.2857 7.62357 13.3413 6.99935 13.8872C6.37513 13.3413 5.24874 12.2857 4.26415 10.9921C3.21313 9.61118 2.41602 8.07803 2.41602 6.66659C2.41602 5.45101 2.8989 4.28522 3.75844 3.42568ZM6.99935 0.583252C5.38595 0.583252 3.83863 1.22417 2.69778 2.36502C1.55694 3.50587 0.916016 5.05318 0.916016 6.66659C0.916016 8.58381 1.96524 10.4483 3.07054 11.9006C4.19323 13.3756 5.46964 14.5486 6.10853 15.1003C6.1213 15.1113 6.13445 15.1219 6.14793 15.132C6.39341 15.3166 6.69222 15.4164 6.99935 15.4164C7.30648 15.4164 7.60529 15.3166 7.85077 15.132C7.86425 15.1219 7.87739 15.1113 7.89017 15.1003C8.52906 14.5486 9.80546 13.3756 10.9282 11.9006C12.0335 10.4483 13.0827 8.58381 13.0827 6.66659C13.0827 5.05319 12.4418 3.50587 11.3009 2.36502C10.1601 1.22417 8.61275 0.583252 6.99935 0.583252ZM5.75 6.66663C5.75 5.97627 6.30964 5.41663 7 5.41663C7.69036 5.41663 8.25 5.97627 8.25 6.66663C8.25 7.35698 7.69036 7.91663 7 7.91663C6.30964 7.91663 5.75 7.35698 5.75 6.66663ZM7 3.91663C5.48122 3.91663 4.25 5.14784 4.25 6.66663C4.25 8.18541 5.48122 9.41663 7 9.41663C8.51878 9.41663 9.75 8.18541 9.75 6.66663C9.75 5.14784 8.51878 3.91663 7 3.91663Z" fill="url(#paint0_linear_0_7075)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_0_7075" x1="0.916016" y1="-2.50703" x2="13.2591" y2="-2.3847" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#9945FF" />
                                                <stop offset="1" stop-color="#20E19F" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className="uppercase gradient_text font-bold">Manchester, United Kingdom</span>

                                </div>

                            </div>

                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <div className="flex items-center justify-between w-full">
                                <span className="font-medium opacity-60">Market Price</span>
                                <p className="font-medium">$1.00</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <span className="font-medium opacity-60">Selling Price</span>
                                <p className="font-medium">$ 0.90</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <span className="font-medium opacity-60">Quantity</span>
                                <p className="font-medium">10,000</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <span className="font-bold text-lg">Total</span>
                                <span className="font-bold text-lg">22,500</span>

                            </div>

                        </div>
                        <button type="button" className="py-2.5 px-4 bg-[#9945FF] rounded-full w-full text-white font-medium  h-fit">List for Sale</button>

                        <div className="flex items-center p-5 rounded-lg bg-[#8165EC] bg-opacity-10">
                            <div className="flex items-center relative w-full h-2 bg-[#28AE60]">
                                <div className="shrink-0 size-7 absolute  -left-2 rounded-full bg-[#28AE60] flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 4.5L6.75 12.75L3 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <div className="shrink-0 size-7 absolute  -right-2 rounded-full bg-[#954AFC] font-bold text-white flex items-center justify-center">
                                    2
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </Modal>
    )
}

export default ListPropertyShares