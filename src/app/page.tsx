import Banner from "@/compnents/Home/Banner/Banner";
import ContactUs from "@/compnents/Home/ContactUs/ContactUs";
import Features from "@/compnents/Home/Features/Features";
import NewsCategory from "@/compnents/Home/NewsCategory/NewsCategory";
import RecentTech from "@/compnents/Home/RecentTech/RecentTech";
import Testimonials from "@/compnents/Home/Testimonials/Testimonials";


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
     {/* features */}
     <div>
      <Features></Features>
     </div>
     {/* Recent tech */}
     <div>
    <RecentTech></RecentTech>
     </div>
     {/* testimonial */}
     <div>
      <Testimonials></Testimonials>
     </div>
     <div>
      <ContactUs></ContactUs>
     </div>
    </div>
  );
}
