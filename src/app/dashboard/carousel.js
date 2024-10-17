import Image from "next/image"
import mobile from "../images/carousel_mobile.svg"
import dividend from "../images/dividend.svg"
import portfolio from "../images/portfolio.svg"
import hero from "../images/hero_bg.jpg"

const Carousel = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center  flex-col md:flex-row self-center gap-5 md:gap-16 justify-between w-full overflow-hidden  isolate relative rounded-3xl px-8 ">
        <Image
          src={hero}
          layout="fill"
          className="absolute inset-0 -z-[1]"
          objectFit="cover"
          alt="Hero"
        />
        <div className="flex flex-col md:w-2/3 gap-8 py-4 pt-8 md:pt-0">
          <h1 className="font-bold text-5xl">
            Buy Your First Real Estate in Seconds
          </h1>
          <p className="text-lg text-[#0B0924]">
            The world&apos;s highest yield generator NFT backed by Real Estate.
          </p>
          <button className="px-4 py-2 bg-[#954AFC] text-white rounded-full w-fit font-medium text-sm 2xl:text-lg">Get Started</button>
        </div>
        <div className="flex h-full md:w-1/2 relative">
          <Image src={mobile} width={200} height={100} className="h-full max-w-full mt-8 2xl:w-[400px]" alt="Mobile" />

          <Image
            src={dividend}
            width={250}
            height={51}
            className="absolute bottom-0 left-0 move_right_to_left 2xl:w-[400px]"
            alt="Dividend"
          />
          <Image
            src={portfolio}
            width={250}
            height={51}
            className="absolute top-6 right-0 move_left_to_right 2xl:w-[400px]"
            alt="Portfolio"
          />



        </div>
      </div>
    </div>
  )
}

export default Carousel