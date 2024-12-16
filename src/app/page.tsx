import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
import Product from "./Components/Product";
import Slides from "./Components/Slides";
import SecondSlides from "./Components/SecondSlides";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <SubHero />
      <Product/>
      <Slides />
      <SecondSlides />   
      {/* <Footer /> */}
    </div>
  );
}
