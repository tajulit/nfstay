"use client"
import Image from "next/image"
import Table from "../components/table"
import img from "../images/profile.svg"
import { useState } from "react"

const TopStateAgent = () => {

    const columns = ["Username", "Shares Sold", "Value Raised", "Commission Received"]
    const rows = [
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,

        },
        {
            logo: img,
            username: "John Doe",
            location: "Stockholm, Sweden",
            share_sold: `$850,230`,
            value: `8.28%`,
            commission: `+ 51.4%`,
        },





    ]

    const itemsPerPage = 5;
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

        // 
        return (
            <tr className="border-t-2 border-b-2">
                <td colSpan={columns.length} className="text-[#0C0839] text-center font-bold 2xl:text-lg py-4 ">No data available</td>
            </tr>
        )
    }

    const renderPagination = () => {
        const pageNumbers = [];
        const totalPagesToShow = 4; // You can adjust how many pages you want to show before and after the current page

        if (totalPages <= totalPagesToShow) {
            // If total pages are less than or equal to total pages to show, show all
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const halfPageCount = Math.floor(totalPagesToShow / 2);

            // Show the first page, some pages around the current page, and the last page
            if (currentPage <= halfPageCount + 1) {
                // Current page is near the start
                for (let i = 1; i <= totalPagesToShow; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - halfPageCount) {
                // Current page is near the end
                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = totalPages - totalPagesToShow + 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                // Current page is in the middle
                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = currentPage - halfPageCount; i <= currentPage + halfPageCount; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            }
        }

        // return (
        //     <div className="flex justify-center mt-4 w-full">
        //         {pageNumbers.map((page, index) => (
        //             <button
        //                 key={index}
        //                 className={`px-4 py-2 mx-1 transition-all rounded-full font-bold 2xl:text-lg ${currentPage === page ? "text-[#954AFC] bg-[#F7F6FF]" : "text-black"
        //                     }`}
        //                 onClick={() => handlePageChange(page)}
        //                 disabled={page === "..."} // Disable ellipsis
        //             >
        //                 {page}
        //             </button>
        //         ))}
        //     </div>
        // );
    };


    return (
        <Table title="Top Estate Agents" columns={columns} rows={renderRows} pagination={renderPagination} />
    )
}

export default TopStateAgent