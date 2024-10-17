"use client"
import Link from "next/link";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import Image from "next/image";
import NotificationMenu from "@/utils/notificationMenu";
import { useState } from "react";
import LoginButton from "@/utils/loginButton";


const Header = ({ sidebarOpen, setSidebarOpen }) => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"))
    return (
        <header className="sticky top-0 z-10 flex w-full bg-white border-b shadow-sm ">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-10 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm   lg:hidden"
                    >
                        <span className="relative block h-[1.50rem] w-[1.50rem] cursor-pointer">
                            <span className="block absolute right-0 h-full w-full">
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out  ${!sidebarOpen && "!w-full delay-300"
                                        }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out  ${!sidebarOpen && "delay-400 !w-full"
                                        }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out  ${!sidebarOpen && "!w-full delay-500"
                                        }`}
                                ></span>
                            </span>
                            <span className="absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out  ${!sidebarOpen && "!h-0 !delay-[0]"
                                        }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out  ${!sidebarOpen && "!h-0 !delay-200"
                                        }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    {/* <Link className="block flex-shrink-0 lg:hidden" href="/">
                        <Image
                            width={200}
                            height={40}
                            src={logo}
                            alt="Logo"
                        />
                    </Link> */}
                </div>

                <div className="flex items-center gap-5 justify-end w-full">
                    <Link href="/settings">
                        <svg width="25" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2025 15.2259C23.023 15.0251 22.924 14.7672 22.924 14.5C22.924 14.2328 23.023 13.9748 23.2025 13.7741L24.6356 12.1903C24.7936 12.0172 24.8916 11.7995 24.9158 11.5683C24.9399 11.3372 24.8889 11.1045 24.77 10.9035L22.5307 7.098C22.413 6.8973 22.2338 6.73821 22.0187 6.64342C21.8036 6.54862 21.5635 6.52295 21.3326 6.57007L19.2277 6.98801C18.9598 7.04238 18.681 6.99856 18.4438 6.86483C18.2066 6.7311 18.0274 6.51671 17.9401 6.26212L17.2571 4.24939C17.182 4.03094 17.0389 3.8412 16.848 3.707C16.6571 3.57278 16.4281 3.5009 16.1934 3.5015H11.7148C11.4706 3.48897 11.229 3.55531 11.0268 3.69036C10.8247 3.8254 10.673 4.02175 10.5951 4.24939L9.96812 6.26212C9.88082 6.51671 9.70162 6.7311 9.46442 6.86483C9.22721 6.99856 8.94837 7.04238 8.68053 6.98801L6.51959 6.57007C6.30076 6.5397 6.07766 6.57362 5.87842 6.66756C5.67917 6.76151 5.51269 6.91128 5.39994 7.098L3.16062 10.9035C3.03876 11.1022 2.98396 11.3336 3.00407 11.5648C3.02418 11.7959 3.11817 12.0149 3.27259 12.1903L4.69455 13.7741C4.87405 13.9748 4.97305 14.2328 4.97305 14.5C4.97305 14.7672 4.87405 15.0251 4.69455 15.2259L3.27259 16.8097C3.11817 16.9851 3.02418 17.2041 3.00407 17.4352C2.98396 17.6664 3.03876 17.8978 3.16062 18.0965L5.39994 21.902C5.51761 22.1027 5.69678 22.2617 5.9119 22.3566C6.12703 22.4514 6.36712 22.477 6.59797 22.4299L8.70293 22.0119C8.97077 21.9576 9.2496 22.0014 9.48681 22.1351C9.72402 22.2689 9.90322 22.4832 9.99052 22.7378L10.6735 24.7506C10.7514 24.9782 10.903 25.1745 11.1052 25.3096C11.3074 25.4447 11.549 25.511 11.7932 25.4985H16.2718C16.5065 25.4991 16.7355 25.4272 16.9264 25.293C17.1172 25.1587 17.2604 24.969 17.3355 24.7506L18.0185 22.7378C18.1058 22.4832 18.285 22.2689 18.5222 22.1351C18.7594 22.0014 19.0382 21.9576 19.3061 22.0119L21.411 22.4299C21.6419 22.477 21.882 22.4514 22.0971 22.3566C22.3122 22.2617 22.4914 22.1027 22.6091 21.902L24.8484 18.0965C24.9673 17.8955 25.0183 17.6628 24.9941 17.4316C24.97 17.2005 24.8719 16.9827 24.714 16.8097L23.2025 15.2259ZM21.5342 16.6997L22.4299 17.6896L20.9967 20.1312L19.6756 19.8672C18.8692 19.7053 18.0303 19.8399 17.3182 20.2454C16.6061 20.6509 16.0704 21.299 15.8127 22.0669L15.3873 23.2987H12.5209L12.1179 22.0449C11.8602 21.277 11.3245 20.6289 10.6124 20.2234C9.90032 19.8179 9.06146 19.6833 8.25506 19.8452L6.93387 20.1092L5.47831 17.6786L6.37404 16.6887C6.92486 16.0838 7.22938 15.3006 7.22938 14.489C7.22938 13.6774 6.92486 12.8942 6.37404 12.2893L5.47831 11.2994L6.91147 8.87975L8.23267 9.14372C9.03907 9.30564 9.87792 9.17109 10.59 8.76559C11.3021 8.36009 11.8378 7.71189 12.0955 6.94403L12.5209 5.70119H15.3873L15.8127 6.95502C16.0704 7.72289 16.6061 8.37109 17.3182 8.77659C18.0303 9.18209 18.8692 9.31664 19.6756 9.15472L20.9967 8.89075L22.4299 11.3324L21.5342 12.3223C20.9895 12.9258 20.6888 13.7044 20.6888 14.511C20.6888 15.3175 20.9895 16.0962 21.5342 16.6997ZM13.9541 10.1006C13.0683 10.1006 12.2024 10.3586 11.4659 10.842C10.7294 11.3255 10.1554 12.0125 9.81642 12.8164C9.47743 13.6202 9.38874 14.5049 9.56155 15.3582C9.73432 16.2117 10.1609 16.9956 10.7872 17.6109C11.4136 18.2261 12.2116 18.6451 13.0804 18.8149C13.9491 18.9846 14.8496 18.8975 15.668 18.5645C16.4864 18.2315 17.1858 17.6676 17.6779 16.9442C18.1701 16.2207 18.4327 15.3701 18.4327 14.5C18.4327 13.3332 17.9609 12.2142 17.121 11.3891C16.2811 10.5641 15.1419 10.1006 13.9541 10.1006ZM13.9541 16.6997C13.5112 16.6997 13.0783 16.5707 12.71 16.329C12.3417 16.0872 12.0547 15.7437 11.8852 15.3417C11.7158 14.9399 11.6714 14.4975 11.7578 14.0708C11.8442 13.6441 12.0575 13.2522 12.3707 12.9445C12.6838 12.637 13.0828 12.4274 13.5172 12.3426C13.9516 12.2577 14.4019 12.3012 14.811 12.4677C15.2202 12.6342 15.57 12.9161 15.816 13.2779C16.0621 13.6396 16.1934 14.0649 16.1934 14.5C16.1934 15.0834 15.9575 15.6429 15.5375 16.0554C15.1176 16.468 14.548 16.6997 13.9541 16.6997Z" fill="#0C0839" />
                        </svg>
                    </Link>
                    <NotificationMenu />
                    <svg width="25" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.047 16.3082C20.557 16.7865 20.277 17.4748 20.347 18.2098C20.452 19.4698 21.607 20.3915 22.867 20.3915H25.0837V21.7798C25.0837 24.1948 23.112 26.1665 20.697 26.1665H7.30366C4.88866 26.1665 2.91699 24.1948 2.91699 21.7798V13.9282C2.91699 11.5132 4.88866 9.5415 7.30366 9.5415H20.697C23.112 9.5415 25.0837 11.5132 25.0837 13.9282V15.6082H22.727C22.0737 15.6082 21.4787 15.8648 21.047 16.3082Z" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.91699 14.9783V9.64667C2.91699 8.25833 3.76866 7.02161 5.06366 6.53161L14.327 3.03161C15.7737 2.48328 17.3253 3.55665 17.3253 5.10832V9.54163" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.3189 16.7986V19.202C26.3189 19.8437 25.8056 20.3686 25.1523 20.3919H22.8656C21.6056 20.3919 20.4506 19.4703 20.3456 18.2103C20.2756 17.4753 20.5556 16.7869 21.0456 16.3086C21.4773 15.8653 22.0723 15.6086 22.7256 15.6086H25.1523C25.8056 15.632 26.3189 16.1569 26.3189 16.7986Z" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.16699 14.5H16.3337" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    {/* {
                        isLogin ?


                        <div className="md:w-[150px] md:h-[40px] 2xl:w-[200px] 2xl:h-[50px] md:py-3.5 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full transition-all  backdrop-blur-[29.60px] justify-center items-center gap-3 inline-flex">
                                <Image alt="profile" width={29} height={29} className="w-[25px] h-[25px] 2xl:size-[35px] rounded-full border-2 border-white" src={profile} />
                                <div className="text-white text-sm font-semibold hidden md:block 2xl:text-lg">{localStorage.getItem("loginUser")}</div>
                            </div>
                            :
                            <LoginButton handleLogin={setIsLogin} />

                    } */}

                </div>

                {/* <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        <DarkModeSwitcher />
                        <DropdownNotification />
                        <DropdownMessage />
                    </ul>
                    <DropdownUser />
                   
                </div> */}
            </div>
        </header>
    )
}

export default Header