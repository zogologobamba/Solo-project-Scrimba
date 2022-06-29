import React from "react"

export default function Cards(props){
    
    return (
        <div>
            
            <div className="destination" >
                <img src={props.item.imageUrl} className="destination--img" />
                <div className="destination--info">
                    <div>
                        <h3 className="location">{props.item.location}</h3>
                        <a href={props.item.googleMapsUrl} className="gray">View on Google Maps</a>  
                    </div>
                    <h1 className="title">{props.item.title}</h1>
                    <span className="bold">{props.item.startDate}</span>
                    <span className="bold"> - {props.item.endDate}</span>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}