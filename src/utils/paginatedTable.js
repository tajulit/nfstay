"use client"
import TableForm from "@/app/components/table/table";
import Image from "next/image";
import { useState } from "react";
import ShowPagination from "./showPagination";

const PaginatedTable = ({ columns, rows, showNumbers = true, itemsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(rows.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return; // Prevent invalid pages
        setCurrentPage(page);
    };

    // Get rows for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRows = rows.slice(startIndex, startIndex + itemsPerPage);





    const renderRows = () => {
        const cellPercentage = 100 / columns?.length
        return (
          
                    currentRows.map((row, key) => (
                        <tr key={key} className={`text-[#0C0839] font-bold 2xl:text-lg ${key < (currentRows.length - 1) ? "border-b-2" : ""}`}>

                            <td className="flex items-center w-fit gap-2 p-4 ">
                                {
                                    showNumbers && <span className="mr-5">{startIndex + key + 1}</span>
                                }
                                <div className="h-9 w-full max-w-9 flex-min-w-max">

                                    <Image src={row.logo} width={60} height={60} className="max-w-full h-9 rounded-full object-cover " alt="Row" />
                                </div>
                                <p className=" font-bold text-black  flex flex-col w-fit">
                                    {row.property}

                                </p>
                            </td>

                            <td className="text-center p-4">
                                {row.date}
                            </td>
                            <td className="text-center p-4">${row.price}</td>
                            <td className="text-center p-4">${row.nfts}</td>
                            <td className="text-center p-4">${row.payout}</td>



                            <td className={`text-center p-4 ${row.status.toLowerCase() == "pending" ? "text-[#43CD61]" : "text-red-400"}`}>
                                {row.status}
                            </td>


                            <div className="flex items-center gap-3 pr-4">
                                <button type="button" className="py-1.5 px-4 rounded-lg bg-[#954AFC] whitespace-nowrap font-medium text-white">Claim & Reinvest</button>
                                <button className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 5 5" fill="none">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 5 5" fill="none">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 5 5" fill="none">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                    </svg>
                                </button>
                            </div>
                        </tr>
                    ))
               
        )

    }



    return (
        <TableForm columns={columns} rows={renderRows} pagination={() => ShowPagination({ currentPage: currentPage, totalPages: totalPages, handlePageChange: handlePageChange })} />
    )
}

export default PaginatedTable