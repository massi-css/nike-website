import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts"
import SuperQuality from "./components/SuperQuality"
import Services from "./components/Services"
import SpecialOffer from "./components/SpecialOffer"
import CostumerReviews from "./components/CostumerReviews"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"
import Nav from "./components/Nav";



const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide: padding-r padding-b"><Hero/></section>
    <section className="padding"> <PopularProducts/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding-x py-10"><Services/></section>
    <section className="padding"><SpecialOffer/></section>
    <section className="bg-pale-blue padding"><CostumerReviews/></section>
    <section className="padding-x sm:py-32 px-16 w-full"><Subscribe/></section>
    <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
  </main>
);

export default App;
