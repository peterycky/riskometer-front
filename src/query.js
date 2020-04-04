  async function query(uri) {
    const endpoint = `https://jsonvir.iwareprint.eu/status/${uri}`;

    console.log("Sending request to server at: \n", endpoint);

    const resp = await fetch(endpoint);

    return resp.json();
  }

export default query