
import PropertySkelton from "@/utils/propertySkelton"
import { properties } from "../components/marketPlace"
import PropertyCard from "../components/propertyCard"
import PropertiesLoadingSkelton from "@/utils/propertiesLoadingSkelton"
import img from "../images/room.png"

const FeaturedProperties = () => {

    const properties = [
        {
            id: "3213123",
            img: img,
            startingPrice: 1000,
            category: "Buy to let",
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
            id: "3213123",
            img: img,
            startingPrice: 1000,
            category: "Buy to let",
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
            id: "3213123",
            img: img,
            startingPrice: 1000,
            category: "Buy to let",
            title: "1-Bedroom studio apartment near of the city center",
            location: "Manchester, United Kingdom",
            exp_return: 12,
            dvd_yield: 8,
            dvd_freq: "Monthly",
            NFT_mins: 100,
            price: 1000,
            status: "Buy Now",
            link: "/marketplace"

        }
    ]





    return (
        <div className="w-full">
            <div className="pb-2.5 pt-6  xl:pb-1">
                <div className="mb-6 flex justify-between">
                    <div>
                        <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                            Featured Properties
                        </h4>
                    </div>

                </div>


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
        </div >
    )
}

export default FeaturedProperties