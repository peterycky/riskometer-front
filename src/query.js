function query(params) {

  const endpoint = `https://jsonvir.iwareprint.eu/status/${params.uri}`

  console.log("Sending request to server at: ", endpoint);
  
  fetch(endpoint)
    .then(resp => {
      resp.json().then(data => {
        if (data.waiting === false) {
          params.data(data)
          params.dataAcquired(true)
          console.log("Data acquired successfully")
        } else {
          params.transError(false)
          setTimeout(() => query(params), 3000)
        }
      });
    })
    .catch(error => {
      console.warn(error)
      params.transError(true)
      setTimeout(() => query(), 3000)
    });
  };

export default query