'use client'
import { useState } from "react"
import Image from "next/image"
import mc from "../images/mc.svg"
import visa from "../images/visa.svg"
import ae from "../images/ae.svg"
import dc from "../images/dc.svg"
import t from "../images/t.svg"
import e from "../images/e.svg"
import b from "../images/b.svg"
import x from "../images/x.svg"
import rocks from "../images/rocks.jpg"
import Modal from "@/utils/modal"
import ModalHeader from "@/utils/modalHeader"
import Congratulations from "./congratulations"
import RockMigration from "../components/rockMigration"

const Payment = ({ currentPrice }) => {

    const [method, setMethod] = useState("crypto")

    const [open, setOpen] = useState(false)
    const [currentMethod, setCurrentMethod] = useState("usdc")
    const [isSuccess, setIsSuccess] = useState(false)
    const [isRockOpen, setIsRockOpen] = useState(false)

    const propertyDetail = [{
        img: "https://s3-alpha-sig.figma.com/img/0f35/4902/b6af20fa6c1f7be542bee89b017c6771?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAbUGKK3izvFSFVueOEXbre6CCiMeNKQPYDgZ4ajBfCOfPPwBdj4yPr~edh4TSHUlR~Kop1CkHoMSp8RlKIQHj0zs-mIEfx0n8wuGNc7nWh~wUFsrRW4tr060Ayba0rihjt78YqWy-kBZvQ5ey6HlLGrCeJLNHLJQv4OeMFgohomhWENriWMGsWKMVdwHVdxceZNkXmfROyqMxQTVZN-wWNy0KZCsDta~t5blM9XNeG0CH6elUjmeJNc7pMBVL9jeNs7Pi4P6e-sYUqqdqCFggqk8hukRw8MQ92wUkB9vdL41CPKNeI7BI9EemXxiGjBLsMRoG3iVHqA9j0udQID0w__",
        price: "$860",
        location: "Manchester, United Kingdom",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu urna, tempus quis feugiat eget,",
        bnb: 1.5
    },
    ]


    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
                <p className="opacity-70 2xl:text-base">Current Price</p>
                <h2 className="w-full px-4 py-2 rounded-lg border shadow text-lg font-bold 2xl:text-2xl">{currentPrice}</h2>

            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between ">
                    <h3 className="font-bold text-base 2xl:text-xl">Payment</h3>
                    <p className="font-medium 2xl:text-base">Why low fees with crypto?</p>

                </div>

                <div className="flex flex-wrap gap-5">
                    <button onClick={() => setMethod("card")} type="button" className={`flex flex-col flex-1 gap-8 justify-between p-4 border-2 transition-all ${method == "card" ? "border-[#0C0839]" : ""} rounded-xl`}>
                        <div className="flex items-center justify-between gap-5 w-full">
                            <div className="flex items-center gap-1">
                                <Image
                                    src={mc}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-8 h-full mix-blend-multiply"
                                />
                                <Image
                                    src={visa}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-8 h-full mix-blend-multiply"
                                />

                                <Image
                                    src={ae}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-8 h-full mix-blend-multiply"
                                />
                                <Image
                                    src={dc}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-8 h-full mix-blend-multiply"
                                />

                            </div>

                            <div className={`size-5 rounded-full ${method == "card" ? "border-[5px] border-black" : "border-2"} bg-white transition-all`}>

                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start">
                            <h3 className="font-bold text-lg">Credit/Debit Card</h3>
                            <p className="opacity-70">+ $13.73 in credit/debit card fees</p>

                        </div>
                    </button>
                    <button onClick={() => setMethod("crypto")} type="button" className={`flex flex-col flex-1 gap-8 justify-between p-4 border-2 transition-all ${method == "crypto" ? "border-[#0C0839]" : ""} rounded-xl`}>
                        <div className="flex items-center justify-between gap-5 w-full">
                            <div className="flex items-center gap-1">
                                <Image
                                    src={t}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-6 h-full mix-blend-multiply"
                                />
                                <Image
                                    src={b}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-6 h-full mix-blend-multiply"
                                />

                                <Image
                                    src={x}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-6 h-full mix-blend-multiply"
                                />
                                <Image
                                    src={e}
                                    width={200}
                                    height={50}
                                    alt="paypal"
                                    className="max-w-6 h-full mix-blend-multiply"
                                />

                            </div>

                            <div className={`size-5 rounded-full ${method == "crypto" ? "border-[5px] border-black" : "border-2"} bg-white transition-all`}>

                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start">
                            <h3 className="font-bold text-lg">Crypto Currency</h3>
                            <p className="opacity-70">No fees required</p>

                        </div>
                    </button>

                </div>



            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold 2xl:text-lg">Confirm & Pay</h4>
                <div className="flex items-start gap-2">
                    <input type="checkbox" className="w-5 h-5 border-2  accent-[#954AFC] rounded-md  " />
                    <p className="opacity-70 lg:max-w-xs 2xl:text-sm 2xl:max-w-sm">By completing this booking, you agree to the <span className="underline mx-0.5">Terms and Conditions</span> and  <span className="underline mx-0.5">Privacy Policy</span> and  <span className="underline mx-0.5">House Rules</span>.</p>
                </div>

            </div>
            <button onClick={() => {
                if (method == "crypto") {
                    setOpen(true)
                } else {
                    setOpen(false)
                }
            }} type="button" className="btn_primary_gradient w-full 2xl:text-lg whitespace-nowrap px-5 py-2.5 rounded-full h-fit font-medium text-white flex items-center gap-2 justify-center">Buy Now  <svg width="20" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1123 3.62082V7.10415H12.7373V3.62082C12.7373 3.37332 12.5173 3.25415 12.3707 3.25415C12.3248 3.25415 12.279 3.26332 12.2332 3.28165L4.964 6.02248C4.47817 6.20582 4.1665 6.66415 4.1665 7.18665V7.80082C3.33234 8.42415 2.7915 9.42332 2.7915 10.5508V7.18665C2.7915 6.09582 3.46067 5.12415 4.47817 4.73915L11.7565 1.98915C11.9582 1.91582 12.169 1.87915 12.3707 1.87915C13.2873 1.87915 14.1123 2.62165 14.1123 3.62082Z" fill="white" />
                    <path d="M20.2083 13.2916V14.2083C20.2083 14.4558 20.0158 14.6574 19.7591 14.6666H18.4208C17.935 14.6666 17.495 14.3091 17.4583 13.8324C17.4308 13.5483 17.5408 13.2824 17.7241 13.0991C17.8891 12.9249 18.1183 12.8333 18.3658 12.8333H19.75C20.0158 12.8424 20.2083 13.0441 20.2083 13.2916Z" fill="white" />
                    <path d="M18.3565 11.8709H19.2915C19.7957 11.8709 20.2082 11.4584 20.2082 10.9542V10.5509C20.2082 8.65341 18.659 7.10425 16.7615 7.10425H6.23817C5.459 7.10425 4.744 7.36091 4.1665 7.80091C3.33234 8.42425 2.7915 9.42341 2.7915 10.5509V16.7201C2.7915 18.6176 4.34067 20.1667 6.23817 20.1667H16.7615C18.659 20.1667 20.2082 18.6176 20.2082 16.7201V16.5459C20.2082 16.0417 19.7957 15.6292 19.2915 15.6292H18.494C17.614 15.6292 16.7707 15.0884 16.5415 14.2359C16.349 13.5392 16.5782 12.8701 17.0365 12.4209C17.3757 12.0726 17.8432 11.8709 18.3565 11.8709ZM13.3332 11.6876H6.9165C6.54067 11.6876 6.229 11.3759 6.229 11.0001C6.229 10.6242 6.54067 10.3126 6.9165 10.3126H13.3332C13.709 10.3126 14.0207 10.6242 14.0207 11.0001C14.0207 11.3759 13.709 11.6876 13.3332 11.6876Z" fill="white" />
                </svg>
            </button>
            {
                method == "crypto" &&

                <Modal open={open} handleClose={() => setOpen(false)} >
                    <div className="flex flex-col w-full p-4 gap-5 ">
                        <ModalHeader title={"Complete Checkout"} handleClose={() => setOpen(false)} />

                        <div className="flex flex-col gap-3 overflow-y-auto max-h-[85vh] isolate relative">
                            <h2 className="uppercase opacity-60">Item</h2>
                            <div className="flex flex-col gap-3 ">
                                {
                                    propertyDetail.map((property, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#0C0839] bg-opacity-5">
                                            <div className="sm:size-[3.5rem] sm:shrink-0">
                                                <Image
                                                    src={property.img}
                                                    width={200}
                                                    height={200}
                                                    className="rounded-lg  h-full max-w-full "
                                                    alt={"Image"}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between gap-5 flex-wrap w-full">
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="font-semibold text-lg truncate">{property.title}</h3>
                                                    <p className="flex items-center gap-1  text-[#954AFC]">
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M16.6668 8.33341C16.6668 12.4942 12.051 16.8276 10.501 18.1659C10.3566 18.2745 10.1808 18.3332 10.0002 18.3332C9.8195 18.3332 9.64373 18.2745 9.49933 18.1659C7.94933 16.8276 3.3335 12.4942 3.3335 8.33341C3.3335 6.5653 4.03588 4.86961 5.28612 3.61937C6.53636 2.36913 8.23205 1.66675 10.0002 1.66675C11.7683 1.66675 13.464 2.36913 14.7142 3.61937C15.9645 4.86961 16.6668 6.5653 16.6668 8.33341Z"
                                                                stroke="#954AFC"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"
                                                                stroke="#954AFC"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        {property.location}
                                                    </p>

                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="font-semibold text-lg truncate">{property.price}</h3>
                                                    <p className="flex items-center gap-1  opacity-60">

                                                        ({property.bnb} BNB)
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="uppercase opacity-60">Choose Cryptocurrency</h2>
                            {/* <button onClick={() => setCurrentMethod("card")} type="button" className={`flex items-center transition-all justify-between w-full border-2 ${currentMethod == "card" ? "border-[#954AFC] bg-[#954AFC0D]" : "border-[#0000001A] bg-[#fff]"} rounded-lg px-4 py-2`}>
                            <div className="flex items-center gap-4">
                                <div className={`size-10 ${currentMethod == "card" ? "bg-white" : "bg-[#0C08390F]"} rounded-lg shadow border shrink-0 flex items-center justify-center`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3337 6.29159C18.3337 6.84159 17.8837 7.29158 17.3337 7.29158H2.66699C2.11699 7.29158 1.66699 6.84159 1.66699 6.29159V6.28325C1.66699 4.37492 3.20866 2.83325 5.11699 2.83325H14.8753C16.7837 2.83325 18.3337 4.38325 18.3337 6.29159Z" fill="#0C0839" />
                                        <path d="M1.66699 9.54175V13.7167C1.66699 15.6251 3.20866 17.1667 5.11699 17.1667H14.8753C16.7837 17.1667 18.3337 15.6167 18.3337 13.7084V9.54175C18.3337 8.99175 17.8837 8.54175 17.3337 8.54175H2.66699C2.11699 8.54175 1.66699 8.99175 1.66699 9.54175ZM6.66699 14.3751H5.00033C4.65866 14.3751 4.37533 14.0917 4.37533 13.7501C4.37533 13.4084 4.65866 13.1251 5.00033 13.1251H6.66699C7.00866 13.1251 7.29199 13.4084 7.29199 13.7501C7.29199 14.0917 7.00866 14.3751 6.66699 14.3751ZM12.0837 14.3751H8.75033C8.40866 14.3751 8.12533 14.0917 8.12533 13.7501C8.12533 13.4084 8.40866 13.1251 8.75033 13.1251H12.0837C12.4253 13.1251 12.7087 13.4084 12.7087 13.7501C12.7087 14.0917 12.4253 14.3751 12.0837 14.3751Z" fill="#0C0839" />
                                    </svg>

                                </div>
                                <span className="font-semibold">Card</span>
                            </div>
                            <div className={`flex items-center justify-center size-4 border-2 shrink-0 p-2 rounded-full ${currentMethod == "card" ? "border-[#954AFC]" : ""}`}>
                                <div className={`flex size-2 rounded-full shrink-0 ${currentMethod == "card" ? "bg-[#954AFC]" : "bg-white"}`}>

                                </div>
                            </div>
                        </button> */}
                            <button onClick={() => setCurrentMethod("usdc")} type="button" className={`flex items-center transition-all justify-between w-full border-2 ${currentMethod == "usdc" ? "border-[#954AFC] bg-[#954AFC0D]" : "border-[#0000001A] bg-[#fff]"} rounded-lg px-4 py-2`}>
                                <div className="flex items-center gap-4">
                                    <div className={`size-10 ${currentMethod == "usdc" ? "bg-white" : "bg-[#0C08390F]"} rounded-lg shadow border shrink-0 flex items-center justify-center`}>
                                        <Image
                                            src={"https://s3-alpha-sig.figma.com/img/cc51/64be/afa01a1cbddb18e050a6819347810355?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZqgwLhA771l-DSGCtISH5Yuf63fDpwVPV0cgOVARsbkhZXoewVp4r2z7LEkIFUTXQ78PBxTvDHNSrHwM7KDjio8R0Vp8WKOJNFbe1WzxTUv0TFygq7HsFcUNBqEhKTIlRr-tdF5rIfaew~AD4bv0aaMsxU3NrVlQ3sL9YeHFIsV4KxK9Oo5w8Ob~w~ZpAouwip39X8CIIPx1I1xr5egdD9g-DMLouSYynsP-hvIf0wTmiirWFhyqDGuHWTMYp5iFLIdkG-pkdh0WXFUpMlscoAg0ezQvk74o3ywyk1aQSY~laf~VOXCww-GkO04C6-mfGjJLGyLzZ~CDpptGIVo7w__"}
                                            width={200}
                                            height={200}
                                            className="rounded-lg   max-w-full size-5"
                                            alt={"Image"}
                                        />

                                    </div>
                                    <span className="font-semibold">USDC</span>
                                </div>
                                <div className={`flex items-center justify-center size-4 border-2 shrink-0 p-2 rounded-full ${currentMethod == "usdc" ? "border-[#954AFC]" : ""}`}>
                                    <div className={`flex size-2 rounded-full shrink-0 ${currentMethod == "usdc" ? "bg-[#954AFC]" : "bg-white"}`}>

                                    </div>
                                </div>
                            </button>
                            <button onClick={() => setCurrentMethod("bnb")} type="button" className={`flex items-center transition-all justify-between w-full border-2 ${currentMethod == "bnb" ? "border-[#954AFC] bg-[#954AFC0D]" : "border-[#0000001A] bg-[#fff]"} rounded-lg px-4 py-2`}>
                                <div className="flex items-center gap-4">
                                    <div className={`size-10 ${currentMethod == "bnb" ? "bg-white" : "bg-[#0C08390F]"} rounded-lg shadow border shrink-0 flex items-center justify-center`}>
                                        <Image
                                            src={"https://s3-alpha-sig.figma.com/img/0af6/722b/aa77499d2277ada7e497c23376275395?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfYt6XWaYt1jZNNHSnpymNdgfZZsEB-cei2eiKV2LD94dpDJC8NMUTIqnmfLUhRA~wy4SygVnnqJtomZ2pG8HtRoffgKmYs1N7K5Futm6vWRRC3LjNJKm5DiXfdVtwYn-9BwTcGiq3Bf6iM6Q12jW0KrfcDheKenYoX7ukyn1zBbKBj16wD4QJrG2hSHJLqg1bdSFMmctKxpc288HvS~BsmpV~1CDpckZ0hS1gz1fbEENe5pvVYNgD9AIPSZheeTVpTLmSXZ87gZ3ZcN7-Vm7I7Xxus5gsTNLDYTkFGfNRMje4~IxYpzYukklCUr7EB~srTeLAm5TPrnQaEPqdL8fw__"}
                                            width={200}
                                            height={200}
                                            className="rounded-lg   max-w-full size-5"
                                            alt={"Image"}
                                        />

                                    </div>
                                    <span className="font-semibold">BNB</span>
                                </div>
                                <div className={`flex items-center justify-center size-4 border-2 shrink-0 p-2 rounded-full ${currentMethod == "bnb" ? "border-[#954AFC]" : ""}`}>
                                    <div className={`flex size-2 rounded-full shrink-0 ${currentMethod == "bnb" ? "bg-[#954AFC]" : "bg-white"}`}>

                                    </div>
                                </div>
                            </button>
                            <button onClick={() => { setCurrentMethod("rocks"); setIsRockOpen(true) }} type="button" className={`flex items-center transition-all justify-between w-full border-2 ${currentMethod == "rocks" ? "border-[#954AFC] bg-[#954AFC0D]" : "border-[#0000001A] bg-[#fff]"} rounded-lg px-4 py-2`}>
                                <div className="flex items-center gap-4">
                                    <div className={`size-10 ${currentMethod == "rocks" ? "bg-white" : "bg-[#0C08390F]"} rounded-lg shadow border shrink-0 flex items-center justify-center`}>
                                        <Image
                                            src={rocks}
                                            width={200}
                                            height={200}
                                            className="rounded-lg   max-w-full size-5"
                                            alt={"Image"}
                                        />

                                    </div>
                                    <span className="font-semibold">ROCKS</span>
                                </div>
                                <div className={`flex items-center justify-center size-4 border-2 shrink-0 p-2 rounded-full ${currentMethod == "rocks" ? "border-[#954AFC]" : ""}`}>
                                    <div className={`flex size-2 rounded-full shrink-0 ${currentMethod == "rocks" ? "bg-[#954AFC]" : "bg-white"}`}>

                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className="flex  items-center flex-col sm:flex-row justify-between gap-5">
                            <button onClick={() => setOpen(false)} type="button" className="text-[#0C0839] w-full whitespace-nowrap px-5 py-2.5 rounded-full h-fit font-semibold border">Cancel</button>
                            <button onClick={() => {
                                setOpen(false)
                                setTimeout(() => {
                                    setIsSuccess(true)

                                }, 800)
                            }} type="button" className="btn_primary_gradient text-white w-full whitespace-nowrap px-5 py-2.5 rounded-full h-fit font-medium">Buy Now</button>

                        </div>

                    </div>
                </Modal >
            }
            <Congratulations open={isSuccess} handleClose={() => setIsSuccess(false)} />
            <RockMigration open={isRockOpen} handleClose={() => setIsRockOpen(false)} />
        </div >
    )
}

export default Payment