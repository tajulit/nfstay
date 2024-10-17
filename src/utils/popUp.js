import React from 'react'
import Modal from './modal'
import Image from 'next/image'

const PopUp = ({ open, handleClose, title, paragraph, buttonText, icon }) => {
    return (
        <Modal open={open} handleClose={handleClose} max="max-w-sm !rounded-3xl">
            <div className="flex flex-col  overflow-hidden  w-full">
                <div className="relative mb-20">
                    <div className="relative bg-[#954AFC] isolate min-h-32 overflow-hidden">
                        <div className="size-[390px] absolute opacity-50 -top-[130px] -left-[180px]  -z-[1] mix-blend-screen">
                            <Image
                                src="https://s3-alpha-sig.figma.com/img/d40f/9a24/6498c8418fac00b6cb01a683b5541c90?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H88NMCMtcqMku4121LCHgqYZ7S2ZcASGfAXRAEBae1czLzzD~PtVitzqbO0vfqzIxYTdRxBjr0-xE~7b1ti7omtGKCrWOmpl15TJmX4y5UkpFvF5b2JGnuTepOWHDKTAjK0dvaPuzI6CN~m8jqfpkGwhCpDe1aGUbS758AYUhQQ6-dzUJHR4e03d-trxLSdnjh~lEp-GSpZvisPco35cF0tBNNPZXb-CgG~bhAcxGPNeAxQhvybttNThL2qZvs6eZbCfBzFDzmQ5AX6uH9eofBP~drHxYEIGPTI8KkzmeNitdxcqS-~60GWbquBq~cYVzUNZ8E7Kq7u7bLdWfYsOKQ__"
                                width={500}
                                height={500}
                                alt="Property Documents"
                                className="max-w-full h-full"
                            />
                        </div>

                    </div>
                    <div className="size-28 rounded-full absolute -bottom-1/2 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-[#0C083938] flex items-center justify-center shrink-0">
                        <div className="size-24 rounded-full bg-white flex items-center justify-center">
                            <Image
                                src={icon}
                                width={500}
                                height={500}
                                alt="Property Documents"
                                className="max-w-full size-12"
                            />
                        </div>


                    </div>
                </div>
                <div className="w-full flex p-8 bg-white flex-col items-center justify-center text-center gap-5">
                    <h1 className="text-2xl font-bold text-[#0C0839] text-center">{title}</h1>
                    <p className="text-center text-[#0C0839] opacity-80 max-w-[20rem]">{paragraph}</p>

                    <button type="button" onClick={handleClose} className="btn_primary_gradient w-full max-w-[15rem] text-white  whitespace-nowrap px-5 py-2.5 rounded-full h-fit font-medium">{buttonText}</button>
                </div>

            </div>


        </Modal>
    )
}

export default PopUp