'use client'
import Modal from '@/utils/modal';
import ModalHeader from '@/utils/modalHeader';
import React, { useState } from 'react';


const Thumb = ({ color = "#0C0839", rotate = "rotate-0" }) => {
    return (
        <svg width="20" height="20" className={`shrink-0 ${rotate}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.8335 8.33325V18.3333" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.4998 4.90008L11.6665 8.33341H16.5248C16.7836 8.33341 17.0388 8.39366 17.2702 8.50937C17.5016 8.62508 17.7029 8.79309 17.8582 9.00008C18.0134 9.20707 18.1183 9.44737 18.1646 9.70194C18.2109 9.95651 18.1973 10.2184 18.1248 10.4667L16.1832 17.1334C16.0822 17.4796 15.8717 17.7837 15.5832 18.0001C15.2947 18.2165 14.9438 18.3334 14.5832 18.3334H3.33317C2.89114 18.3334 2.46722 18.1578 2.15466 17.8453C1.8421 17.5327 1.6665 17.1088 1.6665 16.6667V10.0001C1.6665 9.55805 1.8421 9.13413 2.15466 8.82157C2.46722 8.50901 2.89114 8.33341 3.33317 8.33341H5.63317C5.94324 8.33325 6.24712 8.24659 6.51063 8.08318C6.77415 7.91977 6.98686 7.68609 7.12484 7.40841L9.99984 1.66675C10.3928 1.67161 10.7796 1.76522 11.1313 1.94058C11.4831 2.11593 11.7906 2.3685 12.031 2.67942C12.2714 2.99033 12.4384 3.35155 12.5196 3.73608C12.6008 4.12062 12.594 4.51853 12.4998 4.90008Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}





const Vote = ({title, proposal, totalYes, totalNo}) => {
    const [vote, setVote] = useState(0);
    const [isVoted, setIsVoted] = useState(false)

    const [open, setOpen] = useState(false)


    return (
        <div className="flex flex-col sm:flex-row w-full items-end gap-5">
            <div className="flex flex-col gap-3 w-full">
                <p className="opacity-60 2xl:text-lg">VOTE</p>
                <div className="px-4 py-2 bg-[#0C0839] bg-opacity-5 rounded w-full transition-all flex items-center justify-between relative overflow-hidden isolate">
                    <div className="flex items-center gap-2 2xl:text-lg">
                        <Thumb color={isVoted ? "#fff" : "#0C0839"} />
                        <span className={`font-semibold ${isVoted ? "text-white" : ""}`}>Yes</span>

                    </div>
                    {
                        isVoted && <div className="absolute top-0 start-0 h-full bg-[#20E19F] w-1/5 transition-all rounded -z-[1]"></div>
                    }
                    {
                        isVoted && <span className="text-[#0C0839] text-xs font-semibold opacity-40">{totalYes} votes</span>
                    }

                </div>
                <div className="px-4 py-2 bg-[#0C0839] 2xl:text-lg bg-opacity-5 rounded w-full transition-all flex items-center justify-between relative overflow-hidden isolate">

                    <div className="flex items-center gap-2">
                        <Thumb rotate='-rotate-180' color={isVoted ? "#fff" : "#0C0839"} />
                        <span className={`font-semibold ${isVoted ? "text-white" : ""}`}>No</span>

                    </div>
                    {
                        isVoted && <div className="absolute top-0 start-0 h-full bg-[#954AFC] w-1/2  transition-all rounded -z-[1]"></div>
                    }
                    {
                        isVoted && <span className="text-[#0C0839] text-xs font-semibold opacity-40">{totalNo} votes</span>
                    }
                </div>

            </div>
            {!isVoted && <button onClick={() => setOpen(true)} type="button" className="bg-[#0C0839] text-white w-fit whitespace-nowrap px-5 py-2.5 2xl:text-lg rounded-full h-fit font-medium">Vote Now</button>}
            <Modal open={open} handleClose={() => setOpen(false)} >
                <div className="flex flex-col w-full p-4 gap-5 ">
                    <ModalHeader title={title} handleClose={() => setOpen(false)} />

                    <div className="flex flex-col gap-5">
                        <h2 className="uppercase opacity-60">Proposal</h2>
                        <p className="p-4 rounded-lg text-[#0C0839] bg-[#0C08390A] font-medium whitespace-pre-line">{proposal}</p>
                        <h2 className="uppercase opacity-60">CAST YOUR VOTE</h2>
                        <div className="flex items-center flex-col sm:flex-row justify-between gap-5">
                            <button onClick={() => setVote(0)} type="button" className={`flex items-center transition-all justify-between w-full border-2 ${vote == 0 ? "border-[#954AFC] bg-[#954AFC0D]" : "border-[#0000001A] bg-[#fff]"} rounded-lg px-4 py-2`}>
                                <div className="flex items-center gap-4">
                                    <div className={`size-10 ${vote == 0 ? "bg-white" : "bg-[#0C08390F]"} rounded-lg shadow border shrink-0 flex items-center justify-center`}>
                                        <Thumb />
                                    </div>
                                    <span className="font-semibold">Yes</span>
                                </div>
                                <div className={`flex items-center justify-center size-5 border-2 shrink-0 p-3 rounded-full ${vote == 0 ? "border-[#954AFC]" : ""}`}>
                                    <div className={`flex size-3 rounded-full shrink-0 ${vote == 0 ? "bg-[#954AFC]" : "bg-white"}`}>

                                    </div>
                                </div>
                            </button>
                            <button onClick={() => setVote(1)} type="button" className={`flex items-center transition-all justify-between w-full border-2 ${vote == 1 ? "border-[#954AFC] bg-[#954AFC0D]" : "border-[#0000001A] bg-[#fff]"} rounded-lg px-4 py-2`}>
                                <div className="flex items-center gap-4">
                                    <div className={`size-10 ${vote == 1 ? "bg-white" : "bg-[#0C08390F]"} rounded-lg shadow border shrink-0 flex items-center justify-center`}>
                                        <Thumb rotate='-rotate-180' />

                                    </div>
                                    <span className="font-semibold">No</span>
                                </div>
                                <div className={`flex items-center justify-center size-5 border-2 shrink-0 p-3 rounded-full ${vote == 1 ? "border-[#954AFC]" : ""}`}>
                                    <div className={`flex size-3 rounded-full shrink-0 ${vote == 1 ? "bg-[#954AFC]" : "bg-white"}`}>

                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="flex  items-center flex-col sm:flex-row justify-between gap-5">
                            <button onClick={() => setOpen(false)} type="button" className="text-[#0C0839] w-full whitespace-nowrap px-5 py-2.5 rounded-full h-fit font-semibold border">Cancel</button>
                            <button onClick={() => { setIsVoted(true); setOpen(false) }} type="button" className="btn_primary_gradient text-white w-full whitespace-nowrap px-5 py-2.5 rounded-full h-fit font-medium">Vote Now</button>

                        </div>
                    </div>
                </div>
            </Modal>


        </div>
    )
}

export default Vote