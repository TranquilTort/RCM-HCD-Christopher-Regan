import React from 'react';

interface ListItemProps {
    name :string;
    brewery_type:string;
    city:string;
    state:string;
    street:string;
    postal_code:string;
    website_url:string;
    key: number;
    
}

function ListItem(
    {name, brewery_type, city, state, street, postal_code, website_url, }:ListItemProps) {
     return(
        <div className='list-item-container'>
            {name}
        </div>
     )
}

export default ListItem;