
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import axios from 'axios';

function App() {
  const [countries,setCountries] = useState([])

 

  return (
    <div className="App">
      <h1 style={{marginTop: "30px"}}>Country Bank</h1>
      <Input setCountries = {setCountries} />

      <div className='cards'>
      {
        countries.map( (item,index) =>   <Card item={item} key={index} />)
      }
      </div>
    </div>
  );
}

export default App;
