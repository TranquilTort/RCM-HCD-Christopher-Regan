import React, {useEffect, useState} from 'react';
import { Brewery } from './ListItem';
import GoogleMap from './MapDisplay';



function BreweryDetails({name,brewery_type,city,state,street,postal_code, latitude, longitude}:Brewery){
    return(
        <div className='details-container'>
            <div className='details-header'>
                {name}
            </div>
            <div className='map-container'>
                <GoogleMap key={latitude} lat={Number(latitude)} lng={Number(longitude)} />
            </div>
        </div>
    )
}
export default BreweryDetails;