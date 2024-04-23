import "./TripStyles.css"
import TripData from "./TripData";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can Discover unique
                destinations using Google Maps
            </p>
            <div className="tripcard">
                <TripData
                image={"18.avif"}
                url="https://en.wikipedia.org/wiki/Lonavala"
                Heading="Lonavala"
                text="Situated in the Sahyadri
                 range of the Western Ghats 
                 close to Pune and Mumbai, 
                 Lonavala is the most visited 
                 hill station in Maharashtra 
                 and the place to be during 
                 monsoons. With lots of waterfalls,
                  lakes and hills around, it is a 
                  popular destination for camping, 
                  trekking and other adventure sports."
                />
                <TripData
                image={"19.jpg"}
                url="https://en.wikipedia.org/wiki/Raigad_Fort"
                Heading="Raigad"
                text="Raigad is a hill fort situated 
                at about 25 Km from Mahad in the 
                Raigad district. Chhatrapati Shivaji 
                renovated this fort and made it his 
                capital in 1674 AD. The rope-way 
                facility is available at Raigad Fort, 
                to reach at the fort from ground in 
                few minutes."
                />
                <TripData
                image={"20.webp"}
               url="https://en.wikipedia.org/wiki/Bhimashankar_Temple"
                Heading="Bhimashakar"
                text="Bhimashankar, located about 100 km 
                from Pune and 223 km from Mumbai, is a 
                popular temple town. It is among one of 
                the twelve traditional 'Jyotilingam' 
                shrines of Lord Shiva in India."
                />
            </div>
        </div>
    )
}
export default Trip;