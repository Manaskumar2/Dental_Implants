import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import CardSection from "./components/CardSection/CardSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import MeetDoctors from "./components/MeetDoctors/MeetDoctors";
import GallerySection from "./components/GallerySection/GallerySection";
import MainContact from "./components/Contact/MainContact";
import Footer from "./components/Footer/Footer";
import CarePage from "./components/CarePage/CarePage";
import Customers from "./components/Customers/Customers";
import Navbar from "./components/Navbar/Navbar";

function App() {
 return (
  <>
   <Navbar />
   <HeroSection />
   <CardSection />
   <ServicesSection />
   <MeetDoctors />
   <GallerySection />
   <Customers />
   <CarePage />
   <MainContact />
   <Footer />
  </>
 );
}

export default App;
