import React from 'react';
import { Brewery } from './ListItem';
import GoogleMap from './MapDisplay';



function BreweryDetails({name,brewery_type,city,state,street,postal_code, latitude, longitude}:Brewery){
    console.log(process.env.REACT_APP_API_KEY)
    return(
        <div className='details-container'>
            <div className='details-header'>
                {name}
            </div>
            <div className='map-container'>
                <GoogleMap lat={37.7749} lng={-122.4194} />
            </div>
        </div>
    )
}
export default BreweryDetails;