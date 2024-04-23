import DestinationData from "./DestinationData";
import "./DestinationStyles.css"
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity To
                see a lot,within a time frame.
            </p>
                
                  <DestinationData
                  className="first-des"
                  Heading="Mahabaleshwar"
                  text="Mahabaleshwar is a hill station located
                  in the Western Ghats, in Satara district 
                  of Maharashtra. Apart from its strawberries, 
                  Mahabaleshwar is also well known for its numerous 
                  rivers, magnificent cascades and majestic 
                  peaks. It is among the most sought after weekend
                   getaways from Pune & Mumbai, located about 
                   120km south-west of Pune and 285km from Mumbai."
                   img1={"14.jpeg"}
                   img2={"15.jpg"}
                  />
                  <DestinationData
                  className="first-des-reverse"
                  Heading="Ajanta and Ellora Caves"
                  
                   img1={"16.webp"}
                   img2={"17.webp"}
                   text="Ajanta and Ellora caves, considered to be
                   one of the finest examples of ancient rock-cut
                    caves, are located near Aurangabad in Maharashtra,
                     India. Ajanta and Ellora caves complex is 
                     adorned with beautiful sculptures, paintings,
                      and frescoes and include Buddhist monasteries,
                       Hindu and Jain temples. The Ajanta caves 
                       are 29 in number and were built between 
                       the 2nd century BC and 6th century AD,
                        whereas the Ellora Caves are more spread 
                        out and 34 in number and dates to the
                         period between 6th and 11th Century AD."
                  />
                </div>
              

    )
}
export default Destination;