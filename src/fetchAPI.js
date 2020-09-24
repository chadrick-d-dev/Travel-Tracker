const fetchApi = {
  getAllInfo() {
    let travelerID = 2;
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
  },

  postTrip(currentTraveler, destinationSelector, numberOfTravelersInput, tripDateInput, tripDurationInput) {
   console.log(currentTraveler);
   let postData = {
     id: Date.now(),
     userID: currentTraveler.id,
     destinationID: parseInt(destinationSelector.value),
     travelers: parseInt(numberOfTravelersInput.value),
     date: tripDateInput.value.replace(/-/g, '/'),
     duration: parseInt(tripDurationInput.value),
     status: 'pending',
     suggestedActivities: [],
   };

   let postString = JSON.stringify(postData)

   return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
     method: 'POST',
     body: postString,
     headers: {
       'Content-Type':'application/json'
     }})
     .then(response => response.json())
     .then(response => console.log(`Object with id ${postData.id} successfully posted, newResource: ${JSON.stringify(postData)}`))
     .catch(err => console.log('Danger, there was a malfunction with your attempt at success... in posting.'));
    }

}

export default fetchApi;
