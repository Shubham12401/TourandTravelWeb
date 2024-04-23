import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact(){
    return(
        <>
        
        <Navbar/>
      <Hero
      cname="hero-mid"
      heroImg="5.jpg"
      title="Contact"
   
      btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
        </>
    )
}
export default Contact;