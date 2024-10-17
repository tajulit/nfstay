import PropertiesLoadingSkelton from "@/utils/propertiesLoadingSkelton"
import PropertyCard from "../components/propertyCard"
import Select from "./select"
import img from "../images/room.png"
const Marketplace = () => {

    const strategyType = {
        title: "Strategy type",
        options: [
            { value: "1", label: "Buy" },
            { value: "2", label: "Sell" },
        ],
        name: "type"

    }
    const searchByName = {
        title: "Search by name",
        options: [
            { value: "1", label: "Name" },
            { value: "2", label: "Title" },
        ],
        name: "search"
    }

    const country = {
        title: "Country",
        options: [
            { value: "1", label: "USA" },
            { value: "2", label: "Canada" },
            { value: "3", label: "India" },
            { value: "4", label: "Australia" },
        ],
        name: "country"
    }
    const priceRange = {
        title: "Price range",
        options: [
            { value: "1", label: "0-1000" },
            { value: "2", label: "1000-5000" },
            { value: "3", label: "5000-10000" },
            { value: "4", label: "10000-50000" },
            { value: "5", label: "50000-100000" },
            { value: "6", label: "100000-500000" },
            { value: "7", label: "500000-1000000" },
            { value: "8", label: "1000000-5000000" },
            { value: "9", label: "5000000-10000000" },
            { value: "10", label: "10000000-50000000" },
            { value: "11", label: "50000000-100000000" },
            { value: "12", label: "100000000-500000000" },
            { value: "13", label: "500000000-1000000000" },
        ],
        name: "price"
    }
    const priceLowToHigh = {
        title: "Price Low to High",
        options: [
            { value: "1", label: "Low to High" },
            { value: "2", label: "High to Low" },
        ],
        name: "price"
    }




    const properties = [
        {
            id: "123123",
            img: img,
            startingPrice: 1000,
            category: "But to let",
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            NFT_mins: 100,
            price: 1000,
            status: "Buy Now",
            link: "/marketplace"
        },
        {
            id: "123123",
            img: img,
            startingPrice: 1000,
            category: "Sold",
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            NFT_mins: 100,
            price: 1000,
            status: "Fully funded",
            link: "/marketplace"
        },
        {
            id: "123123",
            img: img,
            startingPrice: 1000,
            category: "Sold",
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            NFT_mins: 100,
            price: 1000,
            status: "Sold",
            link: "/marketplace"

        },
        {
            id: "123123",
            img: img,
            startingPrice: 1000,
            category: "Sold",
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            NFT_mins: 100,
            price: 1000,
            status: "Fully funded",
            link: "/marketplace"
        },
        {
            id: "123123",
            img: img,
            startingPrice: 1000,
            category: "But to let",
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            NFT_mins: 100,
            price: 1000,
            status: "Buy Now",
            link: "/marketplace"
        },
        {
            id: "123123",
            img: img,
            startingPrice: 1000,
            category: "Sold",
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            NFT_mins: 100,
            price: 1000,
            status: "Sold",
            link: "/marketplace"

        },
    ]




    return (
        <div className="w-full">
            <div className="pb-2.5 pt-6 flex flex-col gap-6 xl:pb-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex gap-2 flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                                Marketplace
                            </h4>
                        </div>
                        <p className="opacity-80 text-[#0C0839] 2xl:text-lg">Buy and Sell Real Estate NFTs Within Seconds</p>
                    </div>
                </div>
                {/* <div className="flex items-center flex-wrap gap-5">
                    <Select {...strategyType} />
                    <Select {...searchByName} />
                    <Select {...country} />
                    <Select {...priceRange} />
                    <Select {...priceLowToHigh} />

                    <button className="border-none outline-none text-[#954AFC] font-medium">Clear all filters</button>
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full  gap-5 h-fit">
                    <PropertiesLoadingSkelton>
                        {

                            properties.map((property, index) => (
                                <PropertyCard
                                    key={index}
                                    {...property}
                                />
                            ))

                        }
                    </PropertiesLoadingSkelton>
                </div>
            </div>
        </div>
    )
}

export default Marketplace