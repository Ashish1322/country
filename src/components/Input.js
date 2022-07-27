import React, { useState } from 'react'
import axios from 'axios'
import './input.css'
export default function Input({setCountries}) {

    
    const changeCountry = (e) => {
    
    axios.get(`https://restcountries.com/v3.1/name/${e.currentTarget.value}`).then( data=> setCountries(data.data))
        
        
    }
  return (
    <div className='search'>
      <form >
        <div className='innerBox'>
          
        <i className='lens' class="fa fa-search"></i>  <input onChange={e => changeCountry(e)} placeholder='Enter country name...' type="text" />
        </div>

      </form>
    </div>
  )
}
