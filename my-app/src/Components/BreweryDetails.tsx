import React from 'react';
import { Brewery } from './ListItem';


function BreweryDetails({name,brewery_type,city,state,street,postal_code, latitude, longitude}:Brewery){
    return(
        <div className='details-container'>
            <div className='details-header'>
                {name}
            </div>
            <div className='map-container'>
                {latitude} {longitude}
            </div>
        </div>
    )
}
export default BreweryDetails;