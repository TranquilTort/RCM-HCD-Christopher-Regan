import React from 'react';
import {useState} from 'react'
import ListItem, {Brewery} from './ListItem';
import BreweryDetails from './BreweryDetails';


interface ListContainerProps {
    breweries: Array<Brewery>
  }

function ListContainer({breweries}: ListContainerProps) {
    const [selectedBrewery, setSelectedBrewery] = useState(0);
    const breweriesList = breweries.map((element, i)=>
        <ListItem {...element} key={i} index={i} selectedBrewery={selectedBrewery} setSelectedBrewery={setSelectedBrewery}/> 
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
                    <BreweryDetails {...breweries[selectedBrewery]}/>
                    
                </div>
            </div>
        </div>
    )
}
export default ListContainer;