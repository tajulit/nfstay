
import Advantages from "./components/advantages";
import Benefits from "./components/benefits";
import CopyRight from "./components/copyRight";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Hero from "./components/hero";
import IncomeGen from "./components/incomeGen";
import MarketPlace from "./components/marketPlace";
import Navbar from "./components/navbar";
import NewsLetter from "./components/newsLetter";
import RealEstate from "./components/realEstate";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen">
      <Navbar />
      <div className="flex flex-col ">
        <Hero />
        <RealEstate />
        <IncomeGen />
        <Advantages />
        <MarketPlace />
        <Benefits />
        <Faq />
        <NewsLetter />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
}
