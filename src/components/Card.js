import React from 'react'
import './card.css'
export default function Card({item}) {

  // Fetching Currrency Details
  var currenyName = null
  if (item.currencies)
  {
  var key = Object.keys(item.currencies)[0]
  currenyName = item.currencies[key]
  console.log(currenyName)
  }

  var text= "";
  try{
    text = item.name.common + " is a "
    if( item.independent)
    {
      text+= "independent country."
    }
    else
    {
      text+= "not a independent country. "
    }

    if(item.unMember)
    {
      text+= " " + item.name.common + " is one of the members of United Nations. "
    }
    if(item.capital)
    {
      text+=" " + (item.capital)[0] + " is the capital of " + item.name.common  + "."
    }


    
  }
  catch{

  }
  return (
    <div className="center">
    <div className="card">
      <div className="additional">
        <div className="user-card">
          <div className="level center">{item.region}</div>
          <div className="points center">{ currenyName ? currenyName.symbol + " " : ""} { currenyName ? currenyName.name : ""} </div>
         <img id='flag' width="85%" src={item.flags.svg} alt="" />
           
         
        </div>
        <div className="more-info">
          <h1>{item.name.common}</h1>
          <div className="coords">
            <span> <i className='fa fa-clock-o'></i> {(item.timezones)[0]}</span>
            <span> <a href={item.maps.googleMaps} target="_blank" style={{textDecoration: "none",color: "inherit"}}> <i className='fa fa-map-marker'></i>  Google Map  </a></span>
          </div>
         
          <div className="stats">
            <div>
              <div className="title">Area</div>
              <i className="fa fa-area-chart" />
              <div className="value">{item.area} km<sup>2</sup></div>
            </div>
           
            <div>
              <div className="title">Population</div>
              <i className="fa fa-group" />
              <div className="value">{ ((item.population)/1000000000).toFixed(2)}B+  <sup></sup></div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="general">
        <h1>{item.name.common}</h1>
        <p>
         {text}
      
          
        </p>
        <span className="more">Mouse over the card for more info</span>
      </div>
    </div>
  
  </div>
  
  )
}
