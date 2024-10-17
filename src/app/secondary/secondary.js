'use client'

import PropertiesLoadingSkelton from "@/utils/propertiesLoadingSkelton"
import PropertyCard from "../components/propertyCard"
import Select from "../marketplace/select"
import { useEffect, useState } from "react"
import { getRandomFutureTime } from "./getTime"
import img from "../images/room.png"







const Secondary = () => {

    const [filters, setFilters] = useState({
        strategyType: "",
        searchByName: "",
        country: "",
        priceRange: "",
        priceLowToHigh: ""
    })
    const [filteredProperties, setFilteredProperties] = useState([]);

    const strategyType = {
        title: "Strategy type",
        options: [
            { value: "buy", label: "Buy" },
            { value: "sell", label: "Sell" },
        ],
        name: "strategyType"

    }
    const searchByName = {
        title: "Search by name",
        options: [
            { value: "name", label: "Name" },
            { value: "title", label: "Title" },
        ],
        name: "searchByName"
    }

    const country = {
        title: "Country",
        options: [
            { value: "usa", label: "USA" },
            { value: "canada", label: "Canada" },
            { value: "india", label: "India" },
            { value: "australia", label: "Australia" },
            { value: "united kingdom", label: "United Kingdom" }
        ],
        name: "country"
    }
    const priceRange = {
        title: "Price range",
        options: [
            { value: "0-1000", label: "0-1000" },
            { value: "1000-5000", label: "1000-5000" },
            { value: "5000-10000", label: "5000-10000" },
            { value: "10000-50000", label: "10000-50000" },
            { value: "50000-100000", label: "50000-100000" },
            { value: "100000-500000", label: "100000-500000" },
            { value: "500000-1000000", label: "500000-1000000" },
            { value: "1000000-5000000", label: "1000000-5000000" },
            { value: "5000000-10000000", label: "5000000-10000000" },
            { value: "10000000-50000000", label: "10000000-50000000" },
            { value: "50000000-100000000", label: "50000000-100000000" },
            { value: "100000000-500000000", label: "100000000-500000000" },
            { value: "500000000-1000000000", label: "500000000-1000000000" },

        ],
        name: "priceRange"
    }
    const priceLowToHigh = {
        title: "Price Low to High",
        options: [
            { value: "low", label: "Low to High" },
            { value: "high", label: "High to Low" },

        ],
        name: "priceLowToHigh"
    }



    const properties = [
        {
            id: "32313",
            img:img,
            category: "Rental Property",
            auctionEndTime: getRandomFutureTime(),
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            bid_percent: "10% below the market price",
            price: 1000,
            status: "Buy Now",
            link: "/secondary"
        },
        {
            id: "32314",
            img:img,

            category: "Rental Property",
            auctionEndTime: getRandomFutureTime(),
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            bid_percent: "10% below the market price",
            price: 1000,
            status: "Buy Now",
            link: "/secondary"
        },
        {
            id: "32315",
            img:img,

            category: "Rental Property",
            auctionEndTime: getRandomFutureTime(),
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            bid_percent: "10% below the market price",
            price: 1000,
            status: "Buy Now",
            link: "/secondary"

        },
        {
            id: "32316",
            img:img,

            category: "Rental Property",
            auctionEndTime: getRandomFutureTime(),
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            bid_percent: "10% below the market price",
            price: 1000,
            status: "Buy Now",
            link: "/secondary"
        },
        {
            id: "32317",
            img:img,

            category: "Rental Property",
            auctionEndTime: getRandomFutureTime(),

            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            bid_percent: "10% below the market price",
            price: 1000,
            status: "Buy Now",
            link: "/secondary"
        },
        {
            id: "32318",
            img:img,

            category: "Rental Property",
            auctionEndTime: getRandomFutureTime(),
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            bid_percent: "10% below the market price",
            price: 1000,
            status: "Buy Now",
            link: "/secondary"

        },
    ]
    useEffect(() => {
        let filtered = properties;

        if (filters.strategyType) {
            filtered = filtered.filter(
                (property) => property.category.toLowerCase() === filters.strategyType
            );
        }
        if (filters.searchByName) {
            filtered = filtered.filter(
                (property) =>
                    property.title.toLowerCase().includes(filters.searchByName.toLowerCase())
            );
        }
        if (filters.country) {
            filtered = filtered.filter((property) =>
                property.location.toLowerCase().includes(filters.country)
            );
        }
        if (filters.priceRange) {
            const [min, max] = filters.priceRange.split("-").map(Number);
            filtered = filtered.filter(
                (property) => property.price >= min && property.price <= max
            );
        }
        if (filters.priceLowToHigh) {
            filtered = filtered.sort((a, b) =>
                filters.priceLowToHigh === "low" ? a.price - b.price : b.price - a.price
            );
        }

        setFilteredProperties(filtered);
    }, [filters]);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleClearFilter = () => {
        setFilters({
            strategyType: "",
            searchByName: "",
            country: "",
            priceRange: "",
            priceLowToHigh: "",
        });
    }


    return (
        <div className="w-full">
            <div className="pb-2.5 pt-6 flex flex-col gap-6 xl:pb-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex gap-2 flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                                Secondary Market
                            </h4>
                        </div>
                        <p className="opacity-80 text-[#0C0839] 2xl:text-lg">Buy and Sell Real Estate NFTs Within Seconds</p>
                    </div>
                </div>
                <div className="flex items-center flex-wrap gap-5">
                    <Select {...strategyType} value={filters.strategyType} handleValueChange={handleFilterChange} />
                    <Select {...searchByName} value={filters.searchByName} handleValueChange={handleFilterChange} />

                    <Select {...country} value={filters.country} handleValueChange={handleFilterChange} />
                    <Select {...priceRange} value={filters.priceRange} handleValueChange={handleFilterChange} />
                    <Select {...priceLowToHigh} value={filters.priceLowToHigh} handleValueChange={handleFilterChange} />

                    <button onClick={handleClearFilter} className="border-none outline-none text-[#954AFC] font-medium 2xl:text-lg">Clear all filters</button>
                </div>

                {
                    filteredProperties.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full  gap-5 h-fit">
                            <PropertiesLoadingSkelton>
                                {

                                    filteredProperties.map((property, index) => (
                                        <PropertyCard
                                            key={index}
                                            {...property}
                                        />
                                    ))




                                }
                            </PropertiesLoadingSkelton>
                        </div>
                    ) : (
                        <div className="text-center text-[#954AFC] font-medium 2xl:text-lg">No properties found</div>
                    )
                }
            </div>
        </div>
    )
}

export default Secondary