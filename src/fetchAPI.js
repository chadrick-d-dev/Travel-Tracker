const fetchApi = {
  getAllInfo() {
    let travelerID = Math.floor((Math.random() * 50) + 1);
    return Promise.all([this.getTravelers(), this.getTrips(), this.getDestinations(), this.getTraveler(travelerID)])
  },

  getTravelers() {
    const travelersGalore = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers`)
      .then(response => response.json())
    return travelersGalore;
  },

  getTraveler(id) {
    const loneTraveler = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
        .then(response => response.json())
    return loneTraveler;
  },

  getDestinations() {
    const greatTrips = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
      .then(response => response.json())
    return greatTrips;
  },

  getTrips() {
    const bestDestinations = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`)
      .then(response => response.json())
    return bestDestinations;
  }
}


export default fetchApi;
