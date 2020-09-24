
// ************ IMPORTED FILES *************** //

import './css/styles.scss';
import fetchAPI from './fetchAPI.js'
import TripsRepo from './tripsRepo.js';
import Traveler from './traveler.js';
import domUpdates from './domUpdates.js'
// ************ QUERY SELECTORS *************** //

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
let tripDateInput = document.querySelector(".trip-date-input");
let tripDurationInput = document.querySelector(".trip-duration-input");
let numberOfTravelersInput = document.querySelector(".number-of-travelers-input");
let destinationSelector = document.querySelector(".destination-selector");
let estimatedCostsButton = document.querySelector(".estimated-costs-button");
let submitTripButton = document.querySelector(".submit-trip-button");
let signInPageView = document.querySelector(".sign-in-page-view");
let usernameInput = document.querySelector(".username-input");
let passwordInput = document.querySelector(".password-input");
let signInButton = document.querySelector(".sign-in-button");

// ************ GLOBAL VARIABLES *************** //
let travelersData;
let destinationsData;
let tripsData;
let travelerInfo;
let destination;
let trips;
let currentTraveler;

// ************ EVENT LISTENERS *************** //
window.onload = getPageData();
signInButton.addEventListener("click", signInShowMain);
planNewTripButton.addEventListener("click", showPlanNewTripView);
viewTripHistoryButton.addEventListener("click", showTripHistoryView);
// planNewTripView.addEventListener("click", enableSubmitClick);
estimatedCostsButton.addEventListener("click", clickEstimateCosts);
submitTripButton.addEventListener("click", clickSubmitTrip);



// ************ FETCH REQUESTS/MAIN DATA *************** //

//will need to refactor this function when receiving different travelerIDs and move this into sign in click
function getPageData() {
  return fetchAPI.getAllInfo().then(allData => {
    travelersData = allData[0].travelers;
    tripsData = allData[1].trips;
    destinationsData = allData[2].destinations;
    travelerInfo = allData[3];
    let tripRepository = new TripsRepo(travelerInfo, tripsData);
    let travelerTrips= tripRepository.findTravelersTrips();
    currentTraveler = new Traveler(travelerInfo, travelerTrips, destinationsData);
    getCurrentTravelerInfo();
    console.log(currentTraveler);
    applyTravelerInfo(currentTraveler);

  })
}

function signInShowMain() {
  let userView = document.querySelector(".user-view");
  userView.classList.remove("hidden");
  signInPageView.classList.add("hidden");
}

function showPlanNewTripView() {
  planNewTripView.classList.remove("hidden");
  viewTripHistoryButton.classList.remove("hidden");
  tripHistoryView.classList.add("hidden");

  planNewTripButton.classList.add("hidden");
  console.log(currentTraveler)
}

function showTripHistoryView() {
  tripHistoryView.classList.remove("hidden");
  planNewTripButton.classList.remove("hidden");
  planNewTripView.classList.add("hidden");
  viewTripHistoryButton.classList.add("hidden");
}

function clickEstimateCosts() {
  if (tripDateInput.value !== "mm/dd/yyyy" && tripDurationInput.value !== "" && numberOfTravelersInput.value !== "" && destinationSelector.value !== "0") {
    domUpdates.displayNewTripCost(currentTraveler, numberOfTravelersInput, destinationSelector, tripDurationInput, destinationsData);
    submitTripButton.disabled = false;
  }
}

function clickSubmitTrip() {
  if (tripDateInput.value !== "mm/dd/yyyy" && tripDurationInput.value !== "" && numberOfTravelersInput.value !== "" && destinationSelector.value !== "0") {
  showTripHistoryView();
  }
}
function getCurrentTravelerInfo() {
  currentTraveler.findPresentTrips();
  currentTraveler.findPastTrips();
  currentTraveler.findFutureTrips(); currentTraveler.findPendingTrips();
  currentTraveler.findYearToDateTrips();
}

function applyTravelerInfo(currentTraveler) {
  domUpdates.welcomeTraveler(currentTraveler);
  domUpdates.displayYearTotal(currentTraveler);
}
