'use client'

import Image from "next/image";
import logo from "../images/logo.png";
import icon from "../images/logoIcon.png"
import { useEffect, useState } from "react";
import LoginButton from "@/utils/loginButton";
import profile from "../images/profile.svg";
import Link from "next/link";

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"))

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const links = [
        { text: "How it works", to: "#hiw" },
        { text: "Features", to: "#benefits" },
        { text: "Advantages", to: "#advantages" },
        { text: "Marketplace", to: "#marketplace" },
        { text: "FAQ", to: "#faq" }
    ];

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.to} className="text-sm font-medium text-gray-800 hover:text-blue-500 2xl:text-lg">
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <nav className={`sticky top-0 z-40 w-full flex flex-col lg:flex-row items-center justify-center font-inherit border-none bg-white shadow-none transition-all ease-in-out`}>
            <div className="flex items-center px-4 xl:px-0 lg:max-w-6xl 2xl:max-w-[90rem] justify-between w-full py-3 ">
                <div className="flex items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-2">
                        <Image
                            src={icon}
                            alt="Logo"
                            width={17}
                            height={17}
                            className="-mt-1"
                        />
                        <Image
                            width={100}
                            height={40}
                            src={logo}
                            alt="Logo"
                            priority
                        />
                    </div>

                    <div className="hidden lg:flex items-center justify-center w-full">
                        {navList}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {/* {
                        isLogin ?


                            <div className="hidden lg:inline-flex md:w-[150px] md:h-[45px] 2xl:w-[200px]   bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full transition-all  backdrop-blur-[29.60px] justify-center items-center gap-3">
                                <Image alt="profile" width={29} height={29} className="w-[25px] h-[25px] 2xl:size-[35px] rounded-full border-2 border-white" src={profile} />
                                <div className="text-white text-sm font-semibold hidden md:block 2xl:text-lg">{localStorage.getItem("loginUser")}</div>
                            </div>
                            :
                            <LoginButton handleLogin={setIsLogin} css={"hidden lg:block "} />

                    } */}

                    <Link target="_blank" href="https://calendly.com/nfstay/15?utm_source=Rodrigo&month=2024-10" className={`hidden lg:block border text-center btn_primary_gradient whitespace-nowrap rounded-full px-6 py-1.5 font-medium 2xl:text-xl text-white`}>
                        Invest Now
                    </Link>

                    <button onClick={() => setOpenNav(true)} className="lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden fixed left-0 top-0 z-30 h-full bg-white w-[250px] p-6 duration-300 ease-linear transform  ${openNav ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex items-center w-full justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <Image
                            src={icon}
                            alt="Logo"
                            width={17}
                            height={17}
                            className="-mt-1"
                        />
                        <Image
                            width={100}
                            height={40}
                            src={logo}
                            alt="Logo"
                            priority
                        />
                    </div>
                    <button onClick={() => setOpenNav(false)} >

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
                {navList}
                <div className="flex flex-wrap gap-2 mt-4">
                    {/* {
                        isLogin ?


                            <div className=" md:w-[150px] md:h-[40px] 2xl:w-[200px] 2xl:h-[40px] py-3.5 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full transition-all  backdrop-blur-[29.60px] justify-center items-center gap-3 inline-flex">
                                <Image alt="profile" width={29} height={29} className="w-[25px] h-[25px] 2xl:size-[35px] rounded-full border-2 border-white" src={profile} />
                                <div className="text-white text-sm font-semibold block 2xl:text-lg">{localStorage.getItem("loginUser")}</div>
                            </div>
                            :
                            <LoginButton handleLogin={setIsLogin} css={"w-full rounded-lg"} />

                    }
                    */}
                    <Link target="_blank" href="https://calendly.com/nfstay/15?utm_source=Rodrigo&month=2024-10" className="w-full text-center border btn_primary_gradient whitespace-nowrap rounded-lg px-6 py-1.5 font-medium text-white">
                        Invest Now
                    </Link>
                </div>
            </div>

        </nav>
    );
}
