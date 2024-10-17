import Image from "next/image";
import Strip from "./strip";
import PropertyCard from "./propertyCard";
import img from "../images/room.png";

const MarketPlace = () => {
  const properties = [
    {
      id: 1,
      img: img,
      startingPrice: 1000,
      category: "Rental Property",
      title: "1-Bedroom studio apartment near of the city center",
      location: "Manchester, United Kingdom",
      exp_return: 12,
      dvd_yield: 8,
      dvd_freq: "Monthly",
      NFT_mins: 100,
      price: 1000,
      status: "Buy Now",
      link: "#",
    },
    {
      id: 2,
      img: img,
      startingPrice: 1000,
      category: "Rental Property",
      title: "1-Bedroom studio apartment near of the city center",
      location: "Manchester, United Kingdom",
      exp_return: 12,
      dvd_yield: 8,
      dvd_freq: "Monthly",
      NFT_mins: 100,
      price: 1000,
      status: "Fully funded",
      link: "#",
    },
    {
      id: 3,
      img: img,
      startingPrice: 1000,
      category: "Rental Property",
      title: "1-Bedroom studio apartment near of the city center",
      location: "Manchester, United Kingdom",
      exp_return: 12,
      dvd_yield: 8,
      dvd_freq: "Monthly",
      NFT_mins: 100,
      price: 1000,
      status: "Sold",
      link: "#",
    },
  ];

  return (
    <div id="marketplace" className="flex flex-col  gap-8 py-8 w-full">
      <div className="flex items-center flex-col gap-5 self-center justify-center w-full max-w-sm 2xl:max-w-2xl">
        <div className="flex flex-col p-4 items-center justify-center gap-2">
          <h1 className="text-[32px] leading-[48px] text-center font-bold 2xl:text-5xl">
            Marketplace
          </h1>
          <p className="text-[18px] font-medium text-[rgba(11,8,36,0.53)] text-center 2xl:text-2xl">
            Locate your ideal property and buy your share today.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center self-center w-full p-4 sm:p-0 max-w-6xl 2xl:max-w-[90rem] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full  gap-5 h-fit">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
