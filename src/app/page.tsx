import Banner from "@/compnents/Home/Banner/Banner";
import NewsCategory from "@/compnents/Home/NewsCategory/NewsCategory";


export default function Home() {
  return (
    <div>
      {/* hero banner */}
     <div>
       <Banner></Banner>
     </div>
     {/* news category */}
     <div>
      <NewsCategory></NewsCategory>
     </div>
    </div>
  );
}
