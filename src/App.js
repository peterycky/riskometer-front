import React, { useState, useEffect } from "react";
import './App.css';

import PreloadScreen from './Components/PreloadScreen.js'
import InfectionInfo from './Components/InfectionInfo.js'
import NoInfection from './Components/NoInfection.js'
import axios from 'axios';

// import Button from "@material-ui/core/Button";

function App() {

  // const [gotData, setGotData] = useState(false);
  let screen
  const [dataAcquired, setDataAcquired ]= useState(false)
  const [data, setData] = useState({})
  const [transErr, setTransErr] = useState(false)

  useEffect(() => {
    console.log("Mounted, acquiring info...")
    
    const uri = window.location.search.slice(2);
    // console.log(window.location)
    // console.log(uri)
    let endpoint = 'https://jsonvir.iwareprint.eu/status/' + uri

    let query = () => {
      console.log('Sending request to server...')
      axios.get(endpoint)
      .then(response => {
        console.log(response.data)
        if (response.data.waiting === false) {
          setData(response.data)
          setDataAcquired(true)
          clearInterval(interval)
          console.log('Data acquired successfully')
        }
      })
      .catch(error => {
        // console.warn(error)
        setTransErr(true)
      });
    }

    const interval = setInterval(query(), 3000)

    // setTimeout(()=> {
      // setDataAcquired(true)
    // }, 10000)
  }, [])

  if(dataAcquired === true && data) {
    // console.log(data)
    data.activities.length === 0
      ? (screen = <NoInfection />)
      : (screen = <InfectionInfo list={data} />);
  } else {
    screen = <PreloadScreen err={transErr}/>
  }

  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;