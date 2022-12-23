import React from 'react';

export interface Brewery {
    name :string;
    brewery_type:string;
    city:string;
    state:string;
    street:string;
    postal_code:string;
    website_url:string;
    latitude:string;
    longitude:string;
    selectedBrewery: number;
    setSelectedBrewery: Function;
    index: number;
}

function ListItem(
    {name, index, brewery_type, city, state, street, postal_code, website_url,selectedBrewery, setSelectedBrewery }:Brewery) {
     return(
        <div onClick={()=>{setSelectedBrewery(index)}}className='list-item-container'>
            <div className='li-title'>
                {name}
            </div >
            <div className='li-type'>
                {brewery_type}
            </div>
        </div>
     )
}

export default ListItem;