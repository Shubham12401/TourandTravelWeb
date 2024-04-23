import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
function Service(){
    return(
        <>
        <Navbar/>
      <Hero
      cname="hero-mid"
      heroImg="2.jpg"
      title="Service"
   
      btnClass="hide"
      />
      <Trip/>
      <Footer/>
        </>
    )
}
export default Service;