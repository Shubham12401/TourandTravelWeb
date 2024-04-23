import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About(){
    return(
        <>
        <Navbar/>
      <Hero
      cname="hero-mid"
      heroImg="13.jpg"
      title="About"
   
      btnClass="hide"
      
      />
      <AboutUs/>
      <Footer/>
        </>
    )
}
export default About;