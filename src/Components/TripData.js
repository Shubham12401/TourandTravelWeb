import "./TripStyles.css"

function TripData(props){
    return(
        <div className="t-card">
            <div className="t-image">
            <a href={props.url}><img src={props.image} alt="image"/></a>
            </div>
            <h4>{props.Heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default TripData;