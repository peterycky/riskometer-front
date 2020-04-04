import React, { useState, useEffect } from "react"
import './App.css'

import PreloadScreen from './Components/PreloadScreen.js'
import InfectionInfo from './Components/InfectionInfo.js'
import NoInfection from './Components/NoInfection.js'
import query from "./query"

// import Button from "@material-ui/core/Button";

function App() {
  const [dataAcquired, setDataAcquired ]= useState(false)
  const [data, setData] = useState({})
  const [transErr, setTransErr] = useState()

  useEffect(() => {
    console.log("Mounted, acquiring info...")
    const uri = window.location.search.slice(2)

    function queryConstrue() {
      query(uri)
        .then(data => {
          setTransErr()

          if (!data.waiting) {
            setData(data)
            setDataAcquired(true)
            console.log("Data acquired successfully")
          } else {
            setTimeout(queryConstrue(), 3000)
          }
        })
        .catch(error => {
          setTransErr(error)
          setTimeout(queryConstrue(), 3000)
        });
    }

    uri.length === 40 ? queryConstrue() : setTransErr('invalid URL')
  }, [])

  useEffect(() => {
    if (transErr) {
      console.warn(transErr)
    }
  }, [transErr]);

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

export default App