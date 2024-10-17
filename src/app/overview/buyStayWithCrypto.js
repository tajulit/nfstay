
"use client"

import Image from 'next/image';
import { useState } from 'react';
import usd from "../images/usd.png"
import eur from "../images/eur.png"

const BuyStayWithCrypto = () => {


    const [amount, setAmount] = useState(0)

    const options = [
        { label: "USD", icon: <Image src={usd} className='mix-blend-multiply' alt='usd' width={30} height={30} />, value: "usd", amountFactor:2 },
        { label: "EURO", icon: <Image src={eur} className='mix-blend-multiply' alt='eur' width={30} height={30} />, value: "euro",amountFactor:3 },

    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close dropdown on selection
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg shadow border">
            <h1 className="font-bold text-xl 2xl:text-3xl">Buy STAY with Crypto</h1>
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full flex flex-col gap-3 p-3 min-w-[11rem] rounded-lg bg-[#20E19F33] bg-opacity-20">
                    <div className="flex items-center justify-between font-semibold">
                        <h1 className="2xl:text-xl">You&apos;re Paying</h1>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.70898 13.4585H10.2923V8.7085H8.70898V13.4585ZM9.50065 7.12516C9.72496 7.12516 9.91311 7.04916 10.0651 6.89716C10.2171 6.74516 10.2928 6.55727 10.2923 6.3335C10.2918 6.10972 10.2158 5.92183 10.0643 5.76983C9.91285 5.61783 9.72496 5.54183 9.50065 5.54183C9.27635 5.54183 9.08846 5.61783 8.93699 5.76983C8.78551 5.92183 8.70951 6.10972 8.70898 6.3335C8.70846 6.55727 8.78446 6.74543 8.93699 6.89795C9.08951 7.05048 9.2774 7.12622 9.50065 7.12516ZM9.50065 17.4168C8.40551 17.4168 7.37635 17.2089 6.41315 16.793C5.44996 16.3771 4.61211 15.8132 3.89961 15.1012C3.18711 14.3892 2.62318 13.5514 2.20782 12.5877C1.79246 11.6239 1.58451 10.5948 1.58399 9.50016C1.58346 8.40555 1.7914 7.37639 2.20782 6.41266C2.62424 5.44894 3.18817 4.61109 3.89961 3.89912C4.61105 3.18715 5.4489 2.62322 6.41315 2.20733C7.3774 1.79144 8.40657 1.5835 9.50065 1.5835C10.5947 1.5835 11.6239 1.79144 12.5882 2.20733C13.5524 2.62322 14.3902 3.18715 15.1017 3.89912C15.8131 4.61109 16.3773 5.44894 16.7943 6.41266C17.2112 7.37639 17.4189 8.40555 17.4173 9.50016C17.4157 10.5948 17.2078 11.6239 16.7935 12.5877C16.3792 13.5514 15.8152 14.3892 15.1017 15.1012C14.3881 15.8132 13.5503 16.3774 12.5882 16.7938C11.626 17.2102 10.5968 17.4179 9.50065 17.4168ZM9.50065 15.8335C11.2687 15.8335 12.7663 15.22 13.9934 13.9929C15.2204 12.7658 15.834 11.2682 15.834 9.50016C15.834 7.73211 15.2204 6.23454 13.9934 5.00745C12.7663 3.78037 11.2687 3.16683 9.50065 3.16683C7.7326 3.16683 6.23503 3.78037 5.00794 5.00745C3.78086 6.23454 3.16732 7.73211 3.16732 9.50016C3.16732 11.2682 3.78086 12.7658 5.00794 13.9929C6.23503 15.22 7.7326 15.8335 9.50065 15.8335Z" fill="#0C0839" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between w-full overflow-hidden">
                        <input
                            type="number"
                            className="font-bold text-xl opacity-20 2xl:text-3xl border-none outline-none"
                            placeholder="0"
                            value={amount}
                            onChange={(e) => {
                                const value = e.target.value;
                                const numericValue = value.replace(/\D/g, '');
                                setAmount(numericValue);
                            }}
                        />
                    </div>
                    <div className="w-full mx-auto relative">
                        {/* Selected option */}
                        <div
                            className="flex justify-between items-center bg-[#1FE09D33] px-3 py-[5px] border border-[#1FE09D33] rounded-lg cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <span className="flex items-center space-x-2 font-semibold text-base">
                                <span >{selectedOption.icon}</span>
                                <span>{selectedOption.label}</span>
                            </span>
                            <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                        </div>

                        {/* Dropdown options */}
                        {isOpen && (
                            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-y-auto">
                                {options.map((option, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center space-x-2 p-3 hover:bg-gray-100 cursor-pointe font-semibold text-base"
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        <span>{option.icon}</span>
                                        <span>{option.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <svg width="24" height="24" className="shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11L20 7M20 7L16 3M20 7L4 7M8 13L4 17M4 17L8 21M4 17L20 17" stroke="url(#paint0_linear_0_4533)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_0_4533" x1="23.3334" y1="3" x2="23.0852" y2="21.2594" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9945FF" />
                            <stop offset="1" stop-color="#20E19F" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="w-full flex flex-col gap-3 p-3 min-w-[11rem] rounded-lg bg-[#9A47FF1A] bg-opacity-20">
                    <div className="flex items-center justify-between font-semibold">
                        <h1 className="2xl:text-xl">You&apos;re Buying</h1>

                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.70898 13.4585H10.2923V8.7085H8.70898V13.4585ZM9.50065 7.12516C9.72496 7.12516 9.91311 7.04916 10.0651 6.89716C10.2171 6.74516 10.2928 6.55727 10.2923 6.3335C10.2918 6.10972 10.2158 5.92183 10.0643 5.76983C9.91285 5.61783 9.72496 5.54183 9.50065 5.54183C9.27635 5.54183 9.08846 5.61783 8.93699 5.76983C8.78551 5.92183 8.70951 6.10972 8.70898 6.3335C8.70846 6.55727 8.78446 6.74543 8.93699 6.89795C9.08951 7.05048 9.2774 7.12622 9.50065 7.12516ZM9.50065 17.4168C8.40551 17.4168 7.37635 17.2089 6.41315 16.793C5.44996 16.3771 4.61211 15.8132 3.89961 15.1012C3.18711 14.3892 2.62318 13.5514 2.20782 12.5877C1.79246 11.6239 1.58451 10.5948 1.58399 9.50016C1.58346 8.40555 1.7914 7.37639 2.20782 6.41266C2.62424 5.44894 3.18817 4.61109 3.89961 3.89912C4.61105 3.18715 5.4489 2.62322 6.41315 2.20733C7.3774 1.79144 8.40657 1.5835 9.50065 1.5835C10.5947 1.5835 11.6239 1.79144 12.5882 2.20733C13.5524 2.62322 14.3902 3.18715 15.1017 3.89912C15.8131 4.61109 16.3773 5.44894 16.7943 6.41266C17.2112 7.37639 17.4189 8.40555 17.4173 9.50016C17.4157 10.5948 17.2078 11.6239 16.7935 12.5877C16.3792 13.5514 15.8152 14.3892 15.1017 15.1012C14.3881 15.8132 13.5503 16.3774 12.5882 16.7938C11.626 17.2102 10.5968 17.4179 9.50065 17.4168ZM9.50065 15.8335C11.2687 15.8335 12.7663 15.22 13.9934 13.9929C15.2204 12.7658 15.834 11.2682 15.834 9.50016C15.834 7.73211 15.2204 6.23454 13.9934 5.00745C12.7663 3.78037 11.2687 3.16683 9.50065 3.16683C7.7326 3.16683 6.23503 3.78037 5.00794 5.00745C3.78086 6.23454 3.16732 7.73211 3.16732 9.50016C3.16732 11.2682 3.78086 12.7658 5.00794 13.9929C6.23503 15.22 7.7326 15.8335 9.50065 15.8335Z" fill="#0C0839" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl opacity-20 2xl:text-3xl">{amount * selectedOption.amountFactor}</h1>
                    </div>

                    {/* select currency */}
                    <div className="flex items-center gap-1 shadow-1 border p-[6px] px-2 rounded-lg bg-[#9A47FF33] font-bold 2xl:text-lg">
                        <Image width={20} height={20} src={`https://s3-alpha-sig.figma.com/img/d1ff/0e0f/7c915a204065e8bda35c2fad352047d8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kBFyiGIXIqAHRrYPorXiN7KjpUMxTiN1wHddLpHE6qE6SDhxll435~Z3ftZireSERSDmdZP6zBA5a-kVWBP6AM~b~FEpQ~s8TxoMGmzg5ZFfLnpLSqBDIQD1wWM18V7aLF9npGxmmR3dTdta2rJY76A936wZDwOTzxsib9K6mfJRqlFE0FdjF06rU3UPvkMlcvLyJtV1tmWUKJQ5O7BhDgDHDHcf048--asWT5GbZsVpp2G7hqUD9Q5~xNI2mdG6mqfLVG4wK0rSLEZw9MVIj4EpSWqMDPXSXi1LUSZYPLInU6HRZJnxx5uyy6hAXDh1WHecnHY~Vk5~NpzqF-XM7A__`} alt="Flag" />
                        <span className="uppercase">Stay</span>
                    </div>
                </div>
            </div>
            <button type="button" className="w-full rounded-lg bg-[#954AFC] py-2 px-4 text-center text-white my-2 2xl:text-lg font-medium">Swap Now</button>
        </div>
    );
}

export default BuyStayWithCrypto