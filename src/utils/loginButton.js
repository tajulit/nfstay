'use client'

import Modal from "./modal";
import { useState } from "react";
import logo from "../app/images/logo.svg"
import Image from "next/image";

const LoginButton = ({ css , handleLogin}) => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
    const [isChecked, setIsChecked] = useState(false)
  

    const handleButtonClick = () => {
        handleLogin(true)
        setIsLogin(false)
        localStorage.setItem("loginUser","0x123..abc")
        localStorage.setItem("isLogin",true)
    }

    return (
        <>
            <button onClick={() => setIsLogin(true)} className={` border border-[#9945FF] text-[#9945FF] rounded-full px-6 py-1.5 font-medium 2xl:text-xl ${css}`}>
                Login
            </button>
            <Modal open={isLogin} handleClose={() => setIsLogin(false)} >
                <div className="flex flex-col gap-2 p-8">
                    <div className="flex items-center justify-end">
                        <button type="button" className=" flex items-center justify-center " onClick={() => setIsLogin(false)}>

                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 14L14 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 14L22 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>

                    </div>
                    <div className="flex flex-col items-center  gap-8">
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt="Logo"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            <button type="button" disabled={!isChecked} onClick={handleButtonClick} className="disabled:cursor-not-allowed  flex items-center gap-1 px-4 py-1.5 w-full justify-center text-center rounded-full border-2 font-semibold text-lg">
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/4297/16d3/f3e5d155e34d569bd9155053668dff25?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HenQ434r~EDCOwCv7KbLrwWJuJxgX4ta4SZYqCgOX-Yzn0C8ekcpRzPMiE78ewtKFMZIkwfZgQXORLUslJiA8YMsUFI~5zKfo7u3wSuugVG~p0MjCvV6EmDqetQI5JSsofYNei3kA~0l~7Se6CEue0XhBvjzppZWS4my1OMUn~bNeX7mAzb2bjtnMDc9PFZSwTU3yR-iU43CJJrBHzPZDyLoabohUZC3tdyDmF8y023pOhk1gOVvlXw~RIRoqq99TCjBLUEMVTEtett3OJX3lS9IDOZZ8PMv29YnJO3yH992hg2-TtHlkqfjyUgmuzfBDDAE80tXU0Hxte-U8nwM2w__"
                                    width={30}
                                    height={30}
                                    alt="facebook"
                                />
                                Google</button>
                            <button type="button" disabled={!isChecked} onClick={handleButtonClick} className="disabled:cursor-not-allowed  flex items-center gap-2 px-4 py-1.5 w-full justify-center text-center rounded-full border-2 font-semibold text-lg">
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/2a86/707a/eb8457a3011ef322e33a753a4fa32bbe?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RO2f-VIXk2jAgySHUb2-Dr9GhTuJgsNE1N4buUmU~-uBOb-JyPbdxRuMktycAvFmvjvDDQ~6~p8zb0ycB9Ou8IrH4koY9QtRBnX7fDSXnD22igupbqG4GhFYMShlotmfWZhssPMTuJgwkw262bRk6pW4HxPByAAdTBJjyIwVngHANBR5ObUQOOZzKVGRNF7zvKaEMyQJZ0hoVGZMtD0BjA9oEDmUzjSaXjtdF16oixkdXQh63FJ2asbeeb7F5JtPFtV-PJ9xNH1qqE-tm2abKuP7SeciBLMPOYmWExRcHG2g8Jjhk-3Tri4QzBCPmhz91m9wkHrNlgSYEqHa8pj6Kg__"
                                    width={30}
                                    height={30}
                                    alt="facebook"
                                />
                                Discord</button>
                            <button type="button" disabled={!isChecked} onClick={handleButtonClick} className="disabled:cursor-not-allowed  flex items-center gap-2 px-4 py-1.5 w-full justify-center text-center rounded-full border-2 font-semibold text-lg">
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/5357/2e14/cfa9dd7f74c54d6f03ad37207e66d589?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kWvXrzSKPyyubbm4tMmKexr1GrZ5Nu8Q-osbi~Ca9J~V4Q4ZaKJadKnRCsmEXcMVqwRiTbDOjSzovl1OVfLUyc8NQ~gK3qbMDw8GLWxSGRHE2Aj2pdk9eNcnQoWs84eCkJeMhNQEL7TeUrW8HyAzolcbGTHVr-HOqvDSExlg~AdPS3uPodcEMbTbdV~IQ~OGAYcZPX0xbtg4M2xaTiubZST0sx8Ng7pDmMqxYiouuC3ayGjbAGIuO4ADXslpGp5yi-8-iICqwwtAX9pQlHeTm47YK0Kf3ov18mS7VOxEuH2t67Lv9oFrEHHIGZW4AaTyYNVe7bFvHaKGDa9FsAOpIw__"
                                    width={30}
                                    height={30}
                                    alt="facebook"
                                    className="rounded"
                                />
                                Twitter</button>
                            <button type="button" disabled={!isChecked} onClick={handleButtonClick} className="disabled:cursor-not-allowed  flex items-center gap-2 px-4 py-1.5 w-full justify-center text-center rounded-full border-2 font-semibold text-lg">
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/c9e8/4b67/bed29282b9a58143f01f75a5b8c3169f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=il4~w2LuSw844iHQBssaIFV~tlQ2CRCooPXKPX4mWVfT8T3YIMBBRGFQ-J0Vt82maI3v~Isso01UYyvAGYVB~i~WfL1J-e~z~LvHOFMMf7-NZ2jjBJ1NPgU9D6zjhDaWLFXgOlIlUyBY3fHLjq~p8zoGmFVwNkU0UepIEh3WecsxLTpTapMw0eE8KM5518HtfCDfWXj3xCGkaCElD91Xj0tOoDUCkKacAN~N2NWWVjDrpKo3ReIkGQyYg1wh4r2VsUK03JVPVgtA-AnOj-zWUH~xxfyvjIUeiU31BVVXeNPUg8Z~UaQ9PgY6dkRLC1piajAsiLDzPOM4axDwgx8LSQ__"
                                    width={30}
                                    height={30}
                                    alt="facebook"
                                />
                                Facebook</button>
                            <button type="button" disabled={!isChecked} onClick={handleButtonClick} className="disabled:cursor-not-allowed  flex items-center gap-2 px-4 py-1.5 w-full justify-center text-center rounded-full border-2 font-semibold text-lg">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3332 14.5999V17.0999C18.3341 17.332 18.2866 17.5617 18.1936 17.7744C18.1006 17.987 17.9643 18.1779 17.7933 18.3348C17.6222 18.4917 17.4203 18.6112 17.2005 18.6855C16.9806 18.7599 16.7477 18.7875 16.5165 18.7666C13.9522 18.488 11.489 17.6117 9.32486 16.2083C7.31139 14.9288 5.60431 13.2217 4.32486 11.2083C2.91651 9.03426 2.04007 6.55908 1.76653 3.98325C1.7457 3.75281 1.77309 3.52055 1.84695 3.30127C1.9208 3.08199 2.03951 2.88049 2.1955 2.7096C2.3515 2.53871 2.54137 2.40218 2.75302 2.30869C2.96468 2.2152 3.19348 2.1668 3.42486 2.16658H5.92486C6.32928 2.1626 6.72136 2.30582 7.028 2.56953C7.33464 2.83324 7.53493 3.19946 7.59153 3.59992C7.69705 4.39997 7.89274 5.18552 8.17486 5.94158C8.28698 6.23985 8.31125 6.56401 8.24478 6.87565C8.17832 7.18729 8.02392 7.47334 7.79986 7.69992L6.74153 8.75825C7.92783 10.8445 9.65524 12.572 11.7415 13.7583L12.7999 12.6999C13.0264 12.4759 13.3125 12.3215 13.6241 12.255C13.9358 12.1885 14.2599 12.2128 14.5582 12.3249C15.3143 12.607 16.0998 12.8027 16.8999 12.9083C17.3047 12.9654 17.6744 13.1693 17.9386 13.4812C18.2029 13.7931 18.3433 14.1912 18.3332 14.5999Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                Phone</button>
                            <button type="button" disabled={!isChecked} onClick={handleButtonClick} className="disabled:cursor-not-allowed  flex items-center gap-2 px-4 py-1.5 w-full justify-center text-center rounded-full border-2 font-semibold text-lg">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.666 3.83325H3.33268C2.41221 3.83325 1.66602 4.57944 1.66602 5.49992V15.4999C1.66602 16.4204 2.41221 17.1666 3.33268 17.1666H16.666C17.5865 17.1666 18.3327 16.4204 18.3327 15.4999V5.49992C18.3327 4.57944 17.5865 3.83325 16.666 3.83325Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.3327 6.33325L10.8577 11.0833C10.6004 11.2444 10.3029 11.3299 9.99935 11.3299C9.69575 11.3299 9.39829 11.2444 9.14102 11.0833L1.66602 6.33325" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                Email</button>



                        </div>

                        <p className="opacity-50 text-base font-medium uppercase">Or Continue With</p>

                        <button type="button"
                            disabled={!isChecked} onClick={handleButtonClick} className="disabled:cursor-not-allowed btn_primary_gradient w-full max-w-[15rem] text-white  whitespace-nowrap px-5 py-2.5 rounded-full h-fit font-semibold">Connect With Wallet</button>

                        <div className="flex items-start gap-1">
                            <input type="checkbox" name="policy" checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)} id="policy" className="w-5 h-5 border-2  accent-[#954AFC] rounded-md  " />
                            <label for="policy" className={`text-slate-600 transition-all `}>
                                By signing up for NFsTay, you confirm that you have read, understood, and agree to the NFsTay Protocol Docs, Disclaimer, Terms of Use, and Privacy Policy.
                            </label>

                        </div>








                    </div>
                </div>


            </Modal>
        </>
    )
}

export default LoginButton