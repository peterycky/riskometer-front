import React, { useState, useEffect } from "react";
import './App.css';

import PreloadScreen from './Components/PreloadScreen.js'
import InfectionInfo from './Components/InfectionInfo.js'
import NoInfection from './Components/NoInfection.js'

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
    let endpoint = 'https://jsonvir.iwareprint.eu/status/' + uri

    let query = () => {
      console.log("Sending request to server...");
      fetch(endpoint)
        .then(resp => {
           resp.json().then(data => {
            if (data.waiting === false) {
              setData(data);
              setDataAcquired(true);
              console.log("Data acquired successfully");
            } else {
              setTransErr(false)
              setTimeout(() => query(), 3000);
            }
          });
        })
        .catch(error => {
          console.warn(error)
          setTransErr(true);
          setTimeout(() => query(), 3000);
        });
    };

    query();
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