import Image from 'next/image'
import incomeGen from '../images/incomeGen.svg'
const IncomeGen = () => {
    return (
        <div id="hiw" className="flex flex-col gap-8 py-8 w-full ">
            <div className="flex items-center flex-col gap-5 self-center justify-center w-full md:max-w-[28rem] 2xl:max-w-[40rem]">
                <div className=" bg-[#954AFC1A] px-2 py-1 rounded-[50px] justify-center items-center inline-flex">
                    <span className="text-center text-violet-500 text-xs font-bold  leading-normal 2xl:text-lg">HOW DOES IT WORK</span>
                </div>
                <h1 className="text-[32px] leading-[48px] 2xl:text-5xl text-center font-bold">
                    Invest in income-generating
                    real estate, easily.
                </h1>
            </div>
            <div className="flex items-center justify-center w-full scale_in">
                <div className="flex items-center flex-col  md:flex-row justify-between w-full md:max-w-5xl 2xl:max-w-7xl gap-10 ">
                    <Image
                        src={incomeGen}
                        width={"auto"}
                        height={"auto"}
                        className="rounded-xl 2xl:w-full 2xl:h-full"
                        alt="Income Generating Real Estate "
                    />
                    <div className="flex flex-col gap-5  items-center md:items-start h-full w-full  justify-stretch ">
                        <ul className="numbers flex flex-col text-base font-semibold items-center w-full max-w-full sm:max-w-[16rem] 2xl:max-w-[30rem] 2xl:text-3xl md:items-start gap-3">
                            <li>Create your profile in 3 minutes</li>
                            <li>Choose property and invest</li>
                            <li>Withdraw or reinvest your monthly earnings</li>
                        </ul>
                        <button className={`w-fit text-sm 2xl:text-base border-none btn_primary_gradient whitespace-nowrap rounded-full px-6 py-1.5 font-medium text-white`}>
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IncomeGen