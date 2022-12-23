import React from 'react';
import {useState} from 'react'
import ListItem from './ListItem';

interface Brewery {
    name :string;
    brewery_type:string;
    city:string;
    state:string;
    street:string;
    postal_code:string;
    website_url:string;
    key: number;
}
interface ListContainerProps {
    breweries: Array<Brewery>
  }

function ListContainer({breweries}: ListContainerProps) {
    const breweriesList = breweries.map((element, index)=>
        <ListItem {...element} key={index} /> 
    )
    console.log('inside list',breweries)
    return(
        <div className='page-container'>
            <div className='header-container'>

            </div>
            <div style={{width:"100%", height:"100%", display:"flex"}}>
                <div className="list-container">
                    {breweriesList}
                </div>
                <div className='details-container'>

                </div>
            </div>
        </div>
    )
}
export default ListContainer;