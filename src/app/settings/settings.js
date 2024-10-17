'use client'


import Image from 'next/image'
import Avatar from "../images/profile.svg"
import { useState } from 'react'

const Settings = () => {
    const [isVerified, setIsVerified] = useState(false)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [info, setInfo] = useState({
        username: "",
        email: "",
        walletAddress: "",
        twitter: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const completeInfo = {
            ...info,
            image
        }
        console.log(completeInfo)
    }





    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="pb-2.5 pt-6  xl:pb-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="mb-6 flex gap-2 flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                                General Settings
                            </h4>
                        </div>
                        <p className="opacity-80 text-[#0C0839] 2xl:text-lg">Upload your photo and details here</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type='submit' className="bg-[#954AFC] text-white px-6 py-1.5 rounded-full 2xl:text-xl">Save</button>
                        {/* <button className="bg-[#F8FAFC] text-[#0C0839] px-6 py-1.5 rounded-full 2xl:text-xl">Cancel</button> */}

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[65%_32%] gap-3">
                    <div className="flex flex-col divide-y border rounded-lg shadow-1">
                        <div className="flex p-4">
                            <h1 className="font-bold text-lg 2xl:text-2xl">Personal Information</h1>
                        </div>
                        <div className="flex flex-col gap-5 p-4 2xl:text-lg">
                            <div className="flex flex-col gap-2">
                                <label for="username" className="opacity-60 font-medium">Username *</label>
                                <div className="flex items-center justify-between rounded-lg bg-[#F5F5F5] w-full">
                                    <svg width="20" className="ml-3" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" fill="black" />
                                            <path d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z" fill="black" />
                                        </g>
                                    </svg>

                                    <input required type="text" value={info.username} onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            username: e.target.value
                                        })
                                    }} id="username" className="border-none outline-none w-full bg-transparent p-2 py-3" />
                                    {/* <svg width="15" height="20" className="mr-3" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_6537)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.28Z" fill="#20E19F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_6537">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg> */}

                                </div>

                            </div>
                            <div className="flex flex-col gap-2 ">
                                <label for="email" className="opacity-60 font-medium">Email *</label>
                                <div className="flex items-center justify-between rounded-lg bg-[#F5F5F5] w-full">
                                    <svg width="20" height="24" className="ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <path d="M17.25 3H6.75C5.49022 3 4.28204 3.51397 3.39124 4.42884C2.50044 5.34372 2 6.58455 2 7.87838V17.1216C2 17.7623 2.12286 18.3966 2.36157 18.9885C2.60028 19.5804 2.95016 20.1182 3.39124 20.5712C4.28204 21.486 5.49022 22 6.75 22H17.25C18.509 21.9973 19.7156 21.4824 20.6058 20.5682C21.4961 19.6539 21.9974 18.4146 22 17.1216V7.87838C21.9974 6.58539 21.4961 5.34613 20.6058 4.43184C19.7156 3.51756 18.509 3.00271 17.25 3ZM13.6 11.5449C13.108 11.833 12.5514 11.9846 11.985 11.9846C11.4186 11.9846 10.862 11.833 10.37 11.5449L3.52 7.50865C3.60857 6.69247 3.98701 5.93848 4.58292 5.39088C5.17883 4.84329 5.95038 4.54054 6.75 4.54054H17.25C18.049 4.54279 18.8194 4.84632 19.4148 5.39349C20.0103 5.94066 20.3893 6.69336 20.48 7.50865L13.6 11.5449Z" fill="black" />
                                        </g>
                                    </svg>


                                    <input required type="email" id="email" value={info.email} onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            email: e.target.value
                                        })
                                    }} className="border-none outline-none w-full bg-transparent p-2 py-3" />
                                    {/* <svg width="15" height="20" className="mr-3" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_6537)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.28Z" fill="#20E19F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_6537">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg> */}

                                </div>

                            </div>
                            <div className="flex flex-col gap-2">
                                <label for="wallet" className="opacity-60 font-medium">Wallet address</label>
                                <div className="flex items-center justify-between rounded-lg bg-[#F5F5F5] w-full">
                                    <svg width="25" height="29" viewBox="0 0 28 29" className='ml-3' opacity="0.3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.047 16.3082C20.557 16.7865 20.277 17.4748 20.347 18.2098C20.452 19.4698 21.607 20.3915 22.867 20.3915H25.0837V21.7798C25.0837 24.1948 23.112 26.1665 20.697 26.1665H7.30366C4.88866 26.1665 2.91699 24.1948 2.91699 21.7798V13.9282C2.91699 11.5132 4.88866 9.5415 7.30366 9.5415H20.697C23.112 9.5415 25.0837 11.5132 25.0837 13.9282V15.6082H22.727C22.0737 15.6082 21.4787 15.8648 21.047 16.3082Z" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.91699 14.9783V9.64667C2.91699 8.25833 3.76866 7.02161 5.06366 6.53161L14.327 3.03161C15.7737 2.48328 17.3253 3.55665 17.3253 5.10832V9.54163" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M26.3189 16.7986V19.202C26.3189 19.8437 25.8056 20.3686 25.1523 20.3919H22.8656C21.6056 20.3919 20.4506 19.4703 20.3456 18.2103C20.2756 17.4753 20.5556 16.7869 21.0456 16.3086C21.4773 15.8653 22.0723 15.6086 22.7256 15.6086H25.1523C25.8056 15.632 26.3189 16.1569 26.3189 16.7986Z" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.16699 14.5H16.3337" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <input type="text" id="wallet" value={info.walletAddress} onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            walletAddress: e.target.value
                                        })
                                    }} className="border-none outline-none w-full bg-transparent px-3 py-3" />
                                </div>

                            </div>
                            <div className="flex flex-col gap-2">
                                <label for="twitter" className="opacity-60 font-medium">Twitter</label>

                                <div className="flex items-center justify-between rounded-lg bg-[#F5F5F5] w-full">
                                    <svg width="18" height="24" className="ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 22L13.5698 10.9264L13.5825 10.9368L20.2819 3H18.0431L12.5856 9.46L8.25165 3H2.38016L9.31697 13.3386L9.31614 13.3377L2 22H4.23877L10.3063 14.8128L15.1285 22H21ZM7.3646 4.72727L17.7897 20.2727H16.0156L5.58206 4.72727H7.3646Z" fill="black" />
                                        </g>
                                    </svg>

                                    <input type="text" id="twitter" value={info.twitter} onChange={(e) => {
                                        setInfo({
                                            ...info,
                                            twitter: e.target.value
                                        })
                                    }} className="border-none outline-none w-full bg-transparent px-3 py-3" />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-8 items-center w-full" >
                        <div className="flex flex-col h-fit divide-y border w-full rounded-lg shadow-1">
                            <div className="flex p-4">
                                <h1 className="font-bold text-lg 2xl:text-2xl">Your Photo</h1>
                            </div>
                            <div className="flex flex-col items-center py-8 justify-center gap-5 p-4">
                                <div className="relative">
                                    <div className={` flex items-center w-28 h-28 justify-center rounded-full border-[3px] ${isVerified ? "border-[#13B055]" : "border-gray-300"} overflow-hidden`}>
                                        {
                                            imageUrl ?
                                                <Image
                                                    src={imageUrl}
                                                    alt="profile"
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full"
                                                /> :
                                                <Image
                                                    src={Avatar}
                                                    alt="Picture of the author"
                                                    className="w-full max-w-full h-full object-cover"
                                                    width={100}
                                                    height={100}
                                                />

                                        }
                                    </div>
                                    {
                                        isVerified &&
                                        <svg width="26" className="absolute bottom-2 right-1 " height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.9523 10.8409C22.6004 10.6363 22.2843 10.3758 22.0163 10.0696C22.0434 9.64318 22.1449 9.22483 22.3163 8.83348C22.6316 7.94406 22.988 6.93656 22.416 6.15331C21.844 5.37006 20.7639 5.39498 19.816 5.41665C19.3971 5.45974 18.974 5.43117 18.5648 5.33215C18.3467 4.97736 18.191 4.58788 18.1043 4.18056C17.8357 3.26515 17.5291 2.23056 16.5877 1.92073C15.6798 1.62823 14.8392 2.27173 14.096 2.83723C13.7753 3.13007 13.4038 3.36175 12.9997 3.52081C12.5914 3.36305 12.2157 3.13131 11.8914 2.83723C11.1504 2.27498 10.313 1.62498 9.40084 1.92181C8.46159 2.22731 8.155 3.26515 7.88417 4.18056C7.79765 4.58656 7.64347 4.97511 7.42809 5.32998C7.01806 5.42873 6.59438 5.45803 6.17467 5.41665C5.2235 5.39065 4.15209 5.36248 3.57467 6.15331C2.99725 6.94415 3.358 7.94406 3.67434 8.8324C3.84815 9.22317 3.95122 9.64168 3.97875 10.0685C3.71126 10.3751 3.39546 10.6361 3.04384 10.8409C2.25084 11.3826 1.35059 11.999 1.35059 13C1.35059 14.001 2.25084 14.6152 3.04384 15.1591C3.39538 15.3636 3.71117 15.6241 3.97875 15.9304C3.95411 16.357 3.85398 16.7759 3.683 17.1676C3.36884 18.0559 3.0135 19.0634 3.58442 19.8466C4.15534 20.6299 5.23217 20.605 6.18442 20.5833C6.60363 20.5402 7.02713 20.5688 7.43675 20.6678C7.65383 21.023 7.80914 21.4123 7.89609 21.8194C8.16475 22.7348 8.47134 23.7694 9.41275 24.0792C9.56368 24.1276 9.72117 24.1525 9.87967 24.1529C10.6415 24.0436 11.3495 23.6971 11.9033 23.1627C12.224 22.8699 12.5956 22.6382 12.9997 22.4791C13.408 22.6369 13.7837 22.8687 14.1079 23.1627C14.85 23.7293 15.6907 24.3761 16.5996 24.0781C17.5388 23.7726 17.8454 22.7348 18.1163 21.8205C18.2031 21.4137 18.3584 21.0247 18.5756 20.67C18.984 20.5705 19.4064 20.5412 19.8247 20.5833C20.7758 20.6061 21.8473 20.6375 22.4247 19.8466C23.0021 19.0558 22.6413 18.0559 22.325 17.1665C22.1524 16.7761 22.0494 16.3585 22.0206 15.9326C22.2882 15.6256 22.6044 15.3647 22.9566 15.1601C23.7496 14.6185 24.6498 14.001 24.6498 13C24.6498 11.999 23.7463 11.3836 22.9523 10.8409Z" fill="#13B055" />
                                            <path d="M11.9159 15.9793C11.8092 15.9795 11.7035 15.9585 11.605 15.9176C11.5064 15.8767 11.417 15.8166 11.3418 15.7409L9.1751 13.5743C9.03158 13.4202 8.95344 13.2165 8.95716 13.006C8.96087 12.7955 9.04614 12.5947 9.19501 12.4458C9.34387 12.297 9.54471 12.2117 9.7552 12.208C9.96569 12.2043 10.1694 12.2824 10.3234 12.4259L11.9918 14.0943L15.7618 11.2668C15.9342 11.1375 16.1508 11.0819 16.3642 11.1124C16.5775 11.1429 16.77 11.2569 16.8993 11.4293C17.0286 11.6016 17.0841 11.8183 17.0536 12.0317C17.0231 12.245 16.9092 12.4375 16.7368 12.5668L12.4034 15.8168C12.2628 15.9222 12.0917 15.9792 11.9159 15.9793Z" fill="white" />
                                        </svg>
                                    }
                                </div>
                                <div className="flex flex-col">
                                    <label for="uploadImage" className="cursor-pointer px-4 py-2 rounded-full text-[#954AFC] border border-[#954AFC] bg-white font-medium 2xl:text-lg">Update profile photo</label>
                                    <input
                                        onChange={(e) => {
                                            if (e.target.files[0]) {
                                                const file = e.target.files[0]
                                                setImage(file)
                                                const reader = new FileReader()
                                                reader.onloadend = () => {
                                                    setImageUrl(reader.result)
                                                }
                                                reader.readAsDataURL(file)
                                            }
                                        }}

                                        type="file" id="uploadImage" className="hidden" />
                                </div>
                                <button type="button" className="text-[#FF2424] font-medium border-none outline-none 2xl:text-lg">Delete</button>
                            </div>
                        </div>
                        {!isVerified && <button onClick={() => setIsVerified(true)} type="button" className="btn_primary_gradient w-full max-w-[15rem] text-white  whitespace-nowrap px-5 py-2.5 rounded-full h-fit text-base 2xl:text-lg font-semibold">Verify your account</button>}

                    </div>

                </div>
            </form>
        </div >
    )
}

export default Settings