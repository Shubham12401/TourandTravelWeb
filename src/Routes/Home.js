
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";

function Home(){
    return(
        <>
        <Navbar/>
      <Hero
      cname="hero"
      heroImg="4.jpg"
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination."
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
        </>
    )
}
export default Home;