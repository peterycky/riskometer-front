import React, { useState, useEffect } from "react";
import './App.css';

import PreloadScreen from './Components/PreloadScreen.js'
import InfectionInfo from './Components/InfectionInfo.js'
import NoInfection from './Components/NoInfection.js'
import query from "./query"

// import Button from "@material-ui/core/Button";

function App() {
  const [dataAcquired, setDataAcquired ]= useState(false)
  const [data, setData] = useState({})
  const [transErr, setTransErr] = useState(false)

  useEffect(() => {
    console.log("Mounted, acquiring info...")

    const params = {
      uri: window.location.search.slice(2),
      data: setData,
      dataAcquired: setDataAcquired,
      transError: setTransErr
    }

    query(params)

  }, [])

  return (
    <div className="App">
      {
        dataAcquired && data ? (
          data.activities.length === 0 ? <NoInfection /> : <InfectionInfo list={data} />
        ) : <PreloadScreen err={transErr} />
      }
    </div>
  );
}

export default App;