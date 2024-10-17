"use client"
import BreadDown from "./breadDown"
import Documents from "./documents"
import Location from "./location"
import Payment from "./payment"
import Profit from "./profit"
import PropertyDetail from "./propertyDetail"
import RecentActivity from "./recentActivity"
import { useState } from "react";
import img from "../images/room.png"

const Overview = () => {
    const [isCopied, setIsCopied] = useState(false);

    const textToCopy = "https://app.nfstay.com/agentX10%propertyA";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Hide "Copied" after 2 seconds
        });
    };

    const propertyDetails = {
        img: img,
        beds: 3,
        sqf: 1800,
        title: "Authentic 3-Bedroom Penthouse with a Private Terrace",
        owners: 650,
        nfts: 1000,
        views: 0,
        favs: "1.2k",
        listPrice: "860,000 USD",
        annualYield: "14.6%",
        appreciation: "20%",
        roi: "109.12%",
        location: {
            latitude: 53.483959,
            longitude: -2.244644,
            location: "Manchester, United Kingdom"
        },
        currentPrice: "860$"
    }



    return (
        <div className="w-full">
            <div className="pb-2.5  flex flex-col gap-6 xl:pb-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex gap-2 flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                                Overview
                            </h4>
                        </div>
                    </div>
                </div>
                <PropertyDetail propertyDetails={propertyDetails} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Location {...propertyDetails.location} />
                    <Payment currentPrice={propertyDetails.currentPrice} />
                </div>
                <Profit />
                <RecentActivity />
                <BreadDown />
                <Documents />

                <div className="flex items-center p-4 md:p-8 shadow border rounded-lg justify-center">
                    <div className="flex items-center flex-wrap gap-3">
                        <h3 className="font-bold text-base 2xl:text-2xl">Agent URL</h3>
                        <div
                            className="flex items-center px-4 py-1.5 rounded-lg border-2 border-dashed 2xl:text-lg border-[#9945FF] text-[#9945FF] font-medium"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(153, 69, 255, 0.08) 0%, rgba(133, 49, 235, 0.08) 100%)",
                            }}
                        >
                            {textToCopy}
                        </div>

                        <button
                            type="button"
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 text-white font-medium bg-[#9945FF] px-3 py-1.5 rounded-lg 2xl:text-lg"
                        >
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14 11.2875V14.9625C14 18.025 12.775 19.25 9.7125 19.25H6.0375C2.975 19.25 1.75 18.025 1.75 14.9625V11.2875C1.75 8.225 2.975 7 6.0375 7H9.7125C12.775 7 14 8.225 14 11.2875Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.9625 1.75H11.2875C8.63885 1.75 7.37108 2.67286 7.07642 4.89685C7.00327 5.44894 7.46378 5.90625 8.02069 5.90625H9.71254C13.3875 5.90625 15.0938 7.6125 15.0938 11.2875V12.9793C15.0938 13.5363 15.5511 13.9968 16.1032 13.9236C18.3272 13.629 19.25 12.3612 19.25 9.7125V6.0375C19.25 2.975 18.025 1.75 14.9625 1.75Z"
                                    fill="white"
                                />
                            </svg>
                            {isCopied ? "Copied!" : "Copy"}
                        </button>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Overview