import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const NotificationMenu = () => {
    // State to handle visibility of both dropdowns
    const [isDropdown1Open, setDropdown1Open] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown1Open(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    const notifications = [{
        title: "P2P Order Notifications",
        message: "No news to report.",
        time: "",
        is_active: false,
        icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1875 8.75342V11.8518L11.0933 11.4726C10.5408 11.2776 10.205 11.0934 10.205 10.1509C10.205 9.38175 10.7791 8.75342 11.4833 8.75342H12.1875Z" fill="#0C0839" />
            <path d="M15.795 15.8493C15.795 16.6184 15.2208 17.2468 14.5167 17.2468H13.8125V14.1484L14.9067 14.5276C15.4592 14.7226 15.795 14.9068 15.795 15.8493Z" fill="#0C0839" />
            <path d="M17.5391 2.16675H8.46079C4.51746 2.16675 2.16663 4.51758 2.16663 8.46092V17.5392C2.16663 21.4826 4.51746 23.8334 8.46079 23.8334H17.5391C21.4825 23.8334 23.8333 21.4826 23.8333 17.5392V8.46092C23.8333 4.51758 21.4825 2.16675 17.5391 2.16675ZM15.4483 13.0001C16.2933 13.2926 17.42 13.9101 17.42 15.8492C17.42 17.5176 16.12 18.8717 14.5166 18.8717H13.8125V19.5001C13.8125 19.9442 13.4441 20.3126 13 20.3126C12.5558 20.3126 12.1875 19.9442 12.1875 19.5001V18.8717H11.7975C10.0208 18.8717 8.57996 17.3659 8.57996 15.5242C8.57996 15.0801 8.93746 14.7117 9.39246 14.7117C9.83663 14.7117 10.205 15.0801 10.205 15.5242C10.205 16.4776 10.92 17.2467 11.7975 17.2467H12.1875V13.5742L10.5516 13.0001C9.70663 12.7076 8.57996 12.0901 8.57996 10.1509C8.57996 8.48258 9.87996 7.12841 11.4833 7.12841H12.1875V6.50008C12.1875 6.05591 12.5558 5.68758 13 5.68758C13.4441 5.68758 13.8125 6.05591 13.8125 6.50008V7.12841H14.2025C15.9791 7.12841 17.42 8.63425 17.42 10.4759C17.42 10.9201 17.0625 11.2884 16.6075 11.2884C16.1633 11.2884 15.795 10.9201 15.795 10.4759C15.795 9.52258 15.08 8.75342 14.2025 8.75342H13.8125V12.4259L15.4483 13.0001Z" fill="#0C0839" />
        </svg>
    },
    {
        title: "System Messages",
        message: "Login attempted from New IP",
        time: "11:25",
        is_active: true,
        icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5659 8.6776L15.47 3.00093C14.0834 1.89593 11.9167 1.8851 10.5409 2.9901L3.44504 8.6776C2.42671 9.4901 1.80921 11.1151 2.02587 12.3934L3.39087 20.5618C3.70504 22.3926 5.40587 23.8334 7.25837 23.8334H18.7417C20.5725 23.8334 22.3059 22.3601 22.62 20.5509L23.985 12.3826C24.18 11.1151 23.5625 9.4901 22.5659 8.6776ZM13.8125 19.5001C13.8125 19.9443 13.4442 20.3126 13 20.3126C12.5559 20.3126 12.1875 19.9443 12.1875 19.5001V16.2501C12.1875 15.8059 12.5559 15.4376 13 15.4376C13.4442 15.4376 13.8125 15.8059 13.8125 16.2501V19.5001Z" fill="#0C0839" />
        </svg>

    },
    {
        title: "Campaigns",
        message: "Sed dictum elementum eros, in interdum sem egestas a",
        time: "11:25",
        is_active: false,
        icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2475 12.4909C19.63 12.3284 18.9042 12.2417 18.0375 12.2417C16.835 12.2417 16.3909 12.5342 15.7734 13C15.7409 13.0217 15.7084 13.0542 15.6759 13.0867L14.6467 14.1809C13.7909 15.1017 12.22 15.1017 11.3534 14.1809L10.3242 13.0975C10.2917 13.0542 10.2592 13.0217 10.2267 13C9.59836 12.5342 9.15419 12.2417 7.96253 12.2417C7.09586 12.2417 6.37003 12.3175 5.75253 12.4909C3.17419 13.1842 3.17419 15.2317 3.17419 17.03V18.0375C3.17419 20.7567 3.17419 23.8334 8.97003 23.8334H17.03C20.8759 23.8334 22.8259 21.8834 22.8259 18.0375V17.03C22.8259 15.2317 22.8259 13.1842 20.2475 12.4909Z" fill="#0C0839" />
            <path d="M16.0225 2.16675H9.97754C5.18921 2.16675 5.18921 4.71258 5.18921 6.95508V10.9634C5.23254 10.9417 5.28671 10.9309 5.33004 10.9201C6.08838 10.7142 6.94421 10.6167 7.96254 10.6167C9.63088 10.6167 10.4217 11.1042 11.2017 11.7001C11.31 11.7759 11.4184 11.8734 11.5159 11.9817L12.5342 13.0542C12.6425 13.1734 12.8159 13.2384 13 13.2384C13.1842 13.2384 13.3575 13.1734 13.455 13.0651L14.495 11.9709C14.5817 11.8842 14.6792 11.7867 14.7875 11.7109C15.5892 11.1042 16.3692 10.6167 18.0375 10.6167C19.0559 10.6167 19.9117 10.7142 20.67 10.9201C20.7134 10.9309 20.7675 10.9417 20.8109 10.9634V6.95508C20.8109 4.71258 20.8109 2.16675 16.0225 2.16675ZM14.6792 9.20842H11.3209C10.9092 9.20842 10.5625 8.86175 10.5625 8.45008C10.5625 8.02758 10.9092 7.69175 11.3209 7.69175H14.6792C15.0909 7.69175 15.4375 8.02758 15.4375 8.45008C15.4375 8.86175 15.0909 9.20842 14.6792 9.20842ZM15.5242 6.18591H10.4759C10.0642 6.18591 9.72837 5.83925 9.72837 5.42758C9.72837 5.00508 10.0642 4.66925 10.4759 4.66925H15.5242C15.9359 4.66925 16.2717 5.00508 16.2717 5.42758C16.2717 5.83925 15.9359 6.18591 15.5242 6.18591Z" fill="#0C0839" />
        </svg>
    },
    {
        title: "Lorem Ipsum Dolar",
        message: "",
        time: "",
        is_active: false,
        icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.8333 23.8333H2.16663C1.72246 23.8333 1.35413 23.4649 1.35413 23.0208C1.35413 22.5766 1.72246 22.2083 2.16663 22.2083H23.8333C24.2775 22.2083 24.6458 22.5766 24.6458 23.0208C24.6458 23.4649 24.2775 23.8333 23.8333 23.8333Z" fill="#0C0839" />
            <path d="M10.5625 4.33341V23.8334H15.4375V4.33341C15.4375 3.14175 14.95 2.16675 13.4875 2.16675H12.5125C11.05 2.16675 10.5625 3.14175 10.5625 4.33341Z" fill="#0C0839" />
            <path d="M3.25 10.8334V23.8334H7.58333V10.8334C7.58333 9.64175 7.15 8.66675 5.85 8.66675H4.98333C3.68333 8.66675 3.25 9.64175 3.25 10.8334Z" fill="#0C0839" />
            <path d="M18.4166 16.2499V23.8333H22.75V16.2499C22.75 15.0583 22.3166 14.0833 21.0166 14.0833H20.15C18.85 14.0833 18.4166 15.0583 18.4166 16.2499Z" fill="#0C0839" />
        </svg>

    }



    ]




    return (

        <div className="relative" ref={dropdownRef}>
            <button
                className="hidden-arrow border-none outline-none  flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 "
               
                onClick={() => setDropdown1Open(!isDropdown1Open)}
                aria-expanded={isDropdown1Open}
                aria-controls="notification-dropdown"
            >
                <span className="">
                    <svg width="29" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_2794)">
                            <path d="M22.4615 15.3987V13.2586H20.7692V15.7413C20.7693 15.9608 20.8585 16.1713 21.0172 16.3265L23.3077 18.5667V19.8793H4.6923V18.5667L6.98284 16.3265C7.14154 16.1713 7.23071 15.9608 7.23076 15.7413V12.431C7.2284 11.2681 7.53986 10.1251 8.13368 9.11763C8.7275 8.11011 9.58264 7.2737 10.6127 6.69288C11.6428 6.11206 12.8114 5.8074 14.0004 5.80966C15.1895 5.81193 16.3568 6.12104 17.3846 6.70579V4.85613C16.5791 4.50733 15.7224 4.285 14.8462 4.19738V2.5H13.1538V4.19655C11.0677 4.40421 9.1344 5.36106 7.72777 6.88204C6.32113 8.40304 5.54108 10.3801 5.53846 12.431V15.3987L3.24792 17.639C3.08922 17.7942 3.00004 18.0046 3 18.2241V20.7068C3 20.9263 3.08914 21.1369 3.24782 21.2921C3.40651 21.4473 3.62174 21.5345 3.84615 21.5345H9.76922V22.362C9.76922 23.4595 10.215 24.512 11.0084 25.288C11.8018 26.064 12.8779 26.5 13.9999 26.5C15.122 26.5 16.1981 26.064 16.9916 25.288C17.785 24.512 18.2307 23.4595 18.2307 22.362V21.5345H24.1538C24.3783 21.5345 24.5934 21.4473 24.7521 21.2921C24.9108 21.1369 25 20.9263 25 20.7068V18.2241C24.9999 18.0046 24.9107 17.7942 24.752 17.639L22.4615 15.3987ZM16.5384 22.362C16.5384 23.0205 16.271 23.652 15.7949 24.1176C15.3189 24.5832 14.6732 24.8448 13.9999 24.8448C13.3267 24.8448 12.6811 24.5832 12.205 24.1176C11.7289 23.652 11.4615 23.0205 11.4615 22.362V21.5345H16.5384V22.362Z" fill="#0C0839" />
                            <path d="M22.4999 11.5C24.433 11.5 26 9.93297 26 7.99998C26 6.06699 24.433 4.5 22.4999 4.5C20.567 4.5 19 6.06699 19 7.99998C19 9.93297 20.567 11.5 22.4999 11.5Z" fill="#0C0839" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_2794">
                                <rect width="28" height="28" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
            </button>


            {isDropdown1Open && (
                <div id="notification-dropdown" className="absolute center z-20 mt-1 p-6 bg-white divide-y rounded-xl border-2 shadow-lg">
                    <div className="flex items-center justify-between gap-10 mb-4">
                        <h1 className="text-xl font-bold">Notifications</h1>
                        <button className="flex items-center gap-1 border-none  text-xs outline-none text-[#954AFC] whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M14.9998 5.5L5.83317 14.6667L1.6665 10.5" stroke="#954AFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3335 8.83337L12.0835 15.0834L10.8335 13.8334" stroke="#954AFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Mark all as read</button>
                    </div>
                    <ul className="list-none w-full  ">
                        {
                            notifications.map((notification, index) => (
                                <li key={index}>
                                    <a
                                        className="flex items-start gap-2 py-2 text-sm hover:bg-neutral-100 "
                                        href="#"
                                    >
                                        <div className="w-8 ">
                                            {notification.icon}
                                        </div>
                                        <div className="flex w-full items-center  gap-4 justify-between">
                                            <div className="flex flex-col gap-1 w-full">
                                                <p className="font-bold text-black">{notification.title}</p>
                                                <p className="text-sm opacity-60 truncate"  >{notification.message}</p>
                                            </div>
                                            <div className="flex flex-col h-full justify-between items-end gap-4">
                                                 <svg width="12" height="12" className={`${notification.is_active ? "visible" : "invisible"}`} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6" r="6" fill="#20E19F" />
                                                </svg>

                                                <small className={`opacity-60 text-xs ${notification.time != "" ? "visible" : "invisible"}`}>{notification?.time}</small>

                                            </div>

                                        </div>

                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex items-center justify-between gap-10 mt-4 pt-4">
                        <Link href="/notification" className="text-sm font-semibold underline">View All</Link>
                        <svg width="22" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path d="M12.22 2H11.78C11.2496 2 10.7409 2.21071 10.3658 2.58579C9.99072 2.96086 9.78 3.46957 9.78 4V4.18C9.77964 4.53073 9.68706 4.87519 9.51154 5.17884C9.33602 5.48248 9.08374 5.73464 8.78 5.91L8.35 6.16C8.04596 6.33554 7.70108 6.42795 7.35 6.42795C6.99893 6.42795 6.65404 6.33554 6.35 6.16L6.2 6.08C5.74107 5.81526 5.19584 5.74344 4.684 5.88031C4.17217 6.01717 3.73555 6.35154 3.47 6.81L3.25 7.19C2.98526 7.64893 2.91345 8.19416 3.05031 8.706C3.18717 9.21783 3.52154 9.65445 3.98 9.92L4.13 10.02C4.43228 10.1945 4.68362 10.4451 4.85905 10.7468C5.03448 11.0486 5.1279 11.391 5.13 11.74V12.25C5.1314 12.6024 5.03965 12.949 4.86405 13.2545C4.68844 13.5601 4.43521 13.8138 4.13 13.99L3.98 14.08C3.52154 14.3456 3.18717 14.7822 3.05031 15.294C2.91345 15.8058 2.98526 16.3511 3.25 16.81L3.47 17.19C3.73555 17.6485 4.17217 17.9828 4.684 18.1197C5.19584 18.2566 5.74107 18.1847 6.2 17.92L6.35 17.84C6.65404 17.6645 6.99893 17.5721 7.35 17.5721C7.70108 17.5721 8.04596 17.6645 8.35 17.84L8.78 18.09C9.08374 18.2654 9.33602 18.5175 9.51154 18.8212C9.68706 19.1248 9.77964 19.4693 9.78 19.82V20C9.78 20.5304 9.99072 21.0391 10.3658 21.4142C10.7409 21.7893 11.2496 22 11.78 22H12.22C12.7504 22 13.2591 21.7893 13.6342 21.4142C14.0093 21.0391 14.22 20.5304 14.22 20V19.82C14.2204 19.4693 14.3129 19.1248 14.4885 18.8212C14.664 18.5175 14.9163 18.2654 15.22 18.09L15.65 17.84C15.954 17.6645 16.2989 17.5721 16.65 17.5721C17.0011 17.5721 17.346 17.6645 17.65 17.84L17.8 17.92C18.2589 18.1847 18.8042 18.2566 19.316 18.1197C19.8278 17.9828 20.2645 17.6485 20.53 17.19L20.75 16.8C21.0147 16.3411 21.0866 15.7958 20.9497 15.284C20.8128 14.7722 20.4785 14.3356 20.02 14.07L19.87 13.99C19.5648 13.8138 19.3116 13.5601 19.136 13.2545C18.9604 12.949 18.8686 12.6024 18.87 12.25V11.75C18.8686 11.3976 18.9604 11.051 19.136 10.7455C19.3116 10.4399 19.5648 10.1862 19.87 10.01L20.02 9.92C20.4785 9.65445 20.8128 9.21783 20.9497 8.706C21.0866 8.19416 21.0147 7.64893 20.75 7.19L20.53 6.81C20.2645 6.35154 19.8278 6.01717 19.316 5.88031C18.8042 5.74344 18.2589 5.81526 17.8 6.08L17.65 6.16C17.346 6.33554 17.0011 6.42795 16.65 6.42795C16.2989 6.42795 15.954 6.33554 15.65 6.16L15.22 5.91C14.9163 5.73464 14.664 5.48248 14.4885 5.17884C14.3129 4.87519 14.2204 4.53073 14.22 4.18V4C14.22 3.46957 14.0093 2.96086 13.6342 2.58579C13.2591 2.21071 12.7504 2 12.22 2Z" stroke="#0B0924" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0B0924" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>


                    </div>
                </div>
            )}
        </div>



    );
};

export default NotificationMenu;