
// ************ IMPORTED FILES *************** //
// import Traveler from './traveler';
// import Destination from './destination';
// import Trip from './trip';
import './css/styles.scss';
// import domUpdates from './domUpdates'
// ************ QUERY SELECTORS *************** //
let welcomeBanner = document.querySelector(".welcome-banner");
let signOutButton = document.querySelector(".sign-out-button");
let yearTravelCostAmount = document.querySelector(".year-travel-cost-amount");
let pageViewTitle = document.querySelector(".page-view-title");
let planNewTripButton = document.querySelector(".plan-new-trip-button");
let viewTripHistoryButton = document.querySelector(".view-trip-history-button");
let tripHistoryView = document.querySelector(".trip-history-view");
let tripTimeButtonNav = document.querySelector(".trip-by-time-button-navigator");
let pastTripsButton = document.querySelector(".view-past-trips-button");
let presentTripsButton = document.querySelector(".view-present-trips-button");
let futureTripsButton = document.querySelector(".view-future-trips-button");
let pendingTripsButton = document.querySelector(".view-pending-trips-button");
let tripCardGrid = document.querySelector(".trip-card-grid");
let planNewTripView = document.querySelector(".plan-new-trip-view");
let datePickerInput = document.querySelector(".date-picker-input");
let tripDurationInput = document.querySelector(".trip-duration-input");
let numberOfTravelersInput = document.querySelector(".number-of-travelers-input");
let destinationSelector = document.querySelector(".destination-selector");
let newTripCost = document.querySelector(".new-trip-cost");
let newTripAgentFee = document.querySelector(".new-trip-agent-fee");
let newTripTotal = document.querySelector(".new-trip-total");
let submitTripButton = document.querySelector(".submit-trip-button");
let signInPageView = document.querySelector(".sign-in-page-view");
let usernameInput = document.querySelector(".username-input");
let passwordInput = document.querySelector(".password-input");
let signInButton = document.querySelector("sign-in-button");


// ************ GLOBAL VARIABLES *************** //
let allTravelers;
let destinations;
let allTrips;
let traveler;
let destination;
let trip;

// ************ EVENT LISTENERS *************** //
window.onload = pageLoader();

// ************ FETCH REQUESTS/MAIN DATA *************** //
function promiseFulfiller() {
  let travelerID = Math.floor((Math.random() * 50) + 1);
  Promise.all([getTravelers(), getTrips(), getDestinations(), getTraveler(travelerID)])
    .then(promise => {
      allTravelers = promise[0].travelers;
      allTrips = promise[1].trips;
      destinations = promise[2].destinations;
      traveler = promise[3];
      }
    )
}

function getTravelers() {
  const travelersGalore = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers`)
    .then(response => response.json())
  return travelersGalore;
}

function getTraveler(id) {
  const loneTraveler = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
      .then(response => response.json())
  return loneTraveler;
}

function getTrips() {
  const greatTrips = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
    .then(response => response.json())
  return greatTrips;
}

function getDestinations() {
  const bestDestinations = fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`)
    .then(response => response.json())
  return bestDestinations;
}

function pageLoader() {
  promiseFulfiller();
  console.log(allTravelers);
}

function getArray(data) {
  let nestedObjectData = Object.values(data);
  let unnestedArray = nestedObjectData.flatMap(array => {
    return array;
  })
  return unnestedArray;
}
