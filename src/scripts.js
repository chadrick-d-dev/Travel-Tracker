
// ************ IMPORTED FILES *************** //
// import Traveler from './traveler';
// import Destination from './destination';
// import Trip from './trip';


// ************ QUERY SELECTORS *************** //


// ************ GLOBAL VARIABLES *************** //
let allTravelers = [];
let allDestinations = [];
let allTrips = [];
let traveler;
let destination;
let trip;

// ************ EVENT LISTENERS *************** //


// ************ FETCH REQUESTS/MAIN DATA *************** //
function checkData() {
  Promise.all([getTravelers(), getDestinations(), getTrips()])
    .then(data => loadServerInfo(data))
    .catch(error => console.log(error))
}

function getTravelers {
  fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function getTrips {
  fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function getDestinations {
  fetch("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function loadServerInfo(allData) {
  allTravelers = allData[0];
  allDestinations = allData[1];
  allTrips = allData[2]);
  traveler = new Traveler(allTravelers[Math.floor(Math.random() * allUsersData.length)]);
}
