import Image from "next/image";
import logo from "../images/logo.png";
import icon from "../images/logoIcon.png";

const Footer = () => {
    return (
        <div className="flex flex-col gap-8 py-8 w-full">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start justify-between self-center w-full p-4 max-w-5xl 2xl:max-w-[90rem]">
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
                <div className="flex flex-wrap gap-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-base font-bold uppercase 2xl:text-lg">SELL A HOME</h1>
                        <ul className="flex flex-col gap-2 text-sm opacity-60 2xl:text-base">
                            <li>Request an offer</li>
                            <li>Pricing</li>
                            <li>Reviews</li>
                            <li>Stories</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-base font-bold uppercase 2xl:text-lg">ABOUT</h1>
                        <ul className="flex flex-col gap-2 text-sm opacity-60 2xl:text-base">
                            <li>Company</li>
                            <li>How it works</li>
                            <li>Contact</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-base font-bold uppercase 2xl:text-lg">RESOURCES</h1>
                        <ul className="flex flex-col gap-2 text-sm opacity-60 2xl:text-base">
                            <li>Blog</li>
                            <li>Guides</li>
                            <li>FAQ</li>
                            <li>Help Center</li>
                        </ul>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default Footer