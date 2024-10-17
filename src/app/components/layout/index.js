"use client"
import React, { useState } from 'react';
import Sidebar from '../sidebar';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../images/logo.svg"
import Header from '../header';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col w-full">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                   
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main className="w-full">
                        <div className="w-full p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </>
    )
}

export default Layout