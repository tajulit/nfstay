"use client"
import ShowPagination from '@/utils/showPagination';
import { useState } from 'react';

const PastProposal = () => {
    const pastProposals = [
        {
            nftId: 5238,
            name: "Villa Ibiza",
            type: "Holiday Home",
            date: "22 Aug, 2024",
            yes_votes: 80,
            no_votes: 20,
            total_owners: 300,
            voted: 100,
            proposal: 'Increase rent by 12.5%'
        },
        {
            nftId: 2630,
            name: "Apart. Berlin",
            type: "Holiday Home",
            date: "22 Aug, 2024",
            yes_votes: 200,
            no_votes: 50,
            total_owners: 600,
            voted: 250,
            proposal: 'Sell the property for $875,000'
        },
     
    ];

    const ITEMS_PER_PAGE = 5;
    const totalPages = Math.ceil(pastProposals.length / ITEMS_PER_PAGE);

    const [currentPage, setCurrentPage] = useState(1);

    // Get the current page's data
    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return pastProposals.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    };

    // Handle page change
    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Create the pagination range
    const getPaginationRange = () => {
        const pagination = [];
        const totalPageNumbersToShow = 5;

        if (totalPages <= totalPageNumbersToShow * 2) {
            // Show all pages if total pages are less than 10
            for (let i = 1; i <= totalPages; i++) {
            pagination.push(i);
            }
        } else if (currentPage <= totalPageNumbersToShow) {
            // Show first 5 pages and '...' then last 5
            for (let i = 1; i <= totalPageNumbersToShow; i++) {
                pagination.push(i);
            }
            pagination.push('...');
            for (let i = totalPages - totalPageNumbersToShow + 1; i <= totalPages; i++) {
                pagination.push(i);
            }
        } else if (currentPage > totalPageNumbersToShow && currentPage <= totalPages - totalPageNumbersToShow) {
            // Show first page, '...', middle range, '...' and last 5 pages
            pagination.push(1, '...');
            for (let i = currentPage - Math.floor(totalPageNumbersToShow / 2); i <= currentPage + Math.floor(totalPageNumbersToShow / 2); i++) {
                pagination.push(i);
            }
            pagination.push('...');
            for (let i = totalPages - totalPageNumbersToShow + 1; i <= totalPages; i++) {
                pagination.push(i);
            }
        } else {
            // Show last 5 pages and '...' before them
            pagination.push(1, '...');
            for (let i = totalPages - totalPageNumbersToShow + 1; i <= totalPages; i++) {
                pagination.push(i);
            }
        }

        return pagination;
    };

    return (
        <div className="flex gap-5 flex-col justify-between">
            <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                Past Proposals
            </h4>

            <div className="overflow-x-auto">
                <table className="w-full shrink-0 whitespace-nowrap 2xl:text-lg">
                    <thead>
                        <tr className="text-sm text-[#0C0839] opacity-40">
                            <th className="text-left p-4">NFT ID</th>
                            <th className="text-left p-4">Property Name</th>
                            <th className="text-left p-4">Type</th>
                            <th className="text-left p-4">Date</th>
                            <th className="text-left p-4">YES/NO</th>
                            <th className="text-left p-4">No. of Owners</th>
                            <th className="text-left p-4">Proposal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getPaginatedData().map((proposal, index) => (
                            <tr key={index} className={`text-[#0C0839] font-medium ${index < (pastProposals.length - 1) ? "border-b-2" : ""}`}>
                                <td className="text-left p-4">{proposal.nftId}</td>
                                <td className="text-left p-4">{proposal.name}</td>
                                <td className="text-left p-4">{proposal.type}</td>
                                <td className="text-left p-4">{proposal.date}</td>
                                <td className="text-left p-4">{proposal.yes_votes}/{proposal.no_votes}</td>
                                <td className="text-left p-4">{proposal.voted}/{proposal.total_owners}</td>
                                <td className="text-left p-4 text-[#8165EC]">{proposal.proposal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {/* <div className="flex justify-center items-center mt-4">
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} className="px-2 py-1 bg-gray-200 rounded">Previous</button>
                <div className="flex gap-2 mx-4">
                    {getPaginationRange().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && changePage(page)}
                            className={`px-3 py-1 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
                            disabled={typeof page !== 'number'}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} className="px-2 py-1 bg-gray-200 rounded">Next</button>
            </div> */}
            {
                ShowPagination({ currentPage: currentPage, totalPages: totalPages, handlePageChange: changePage })
            }
        </div>
    );
};

export default PastProposal;
