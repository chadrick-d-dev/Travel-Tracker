import Traveler from './traveler.js';
import TripsRepo from './tripsRepo.js';
import fetchApi from './fetchAPI.js';
import destinationsData from './scripts.js';
import currentTraveler from './scripts.js';

const domUpdates = {

  welcomeTraveler(currentTraveler) {
    let welcomeBanner = document.querySelector(".welcome-banner");
    let firstName = currentTraveler.name.split(" ")[0];
    welcomeBanner.innerText = `Welcome ${firstName}!`;
  },

  displayYearTotal(currentTraveler) {
    let yearTotalInDollars = currentTraveler.calculateYearTotalSpent().toFixed(2);
    document.querySelector(".year-travel-cost-amount").innerText = `$${yearTotalInDollars}`;
  },

  displayPastTrips(tripCardGrid, currentTraveler) {
    tripCardGrid.innerHTML = "";
    let pastTrips = currentTraveler.pastTrips;
    let pastTripCard = pastTrips.forEach(pastTrip => {
      let tripDestination = currentTraveler.findDestination(pastTrip.destinationID);
      tripCardGrid.innerHTML += `<section class="trip-info-card">
        <p><label for="destination-name">Destination: </label>${tripDestination.destination}</p>
        <p><label for="trip-date">Date: </label>${pastTrip.date}</p>
        <p><label for="trip-duration">Duration: </label>${pastTrip.duration}</p>
        <p><label for="number-of-Travelers">Travelers: </label>${pastTrip.travelers}</p>
        </section>`
    })
  },

  displayPresentTrips(tripCardGrid, currentTraveler) {
    tripCardGrid.innerHTML = "";
    let presentTrips = currentTraveler.presentTrips;
    let presentTripCard = presentTrips.forEach(presentTrip => {
      let tripDestination = currentTraveler.findDestination(presentTrip.destinationID);
      tripCardGrid.innerHTML += `<section class="trip-info-card">
        <p><label for="destination-name">Destination: </label>${tripDestination.destination}</p>
        <p><label for="trip-date">Date: </label>${presentTrip.date}</p>
        <p><label for="trip-duration">Duration: </label>${presentTrip.duration}</p>
        <p><label for="number-of-Travelers">Travelers: </label>${presentTrip.travelers}</p>
        </section>`
    })
  },

  displayFutureTrips(tripCardGrid, currentTraveler) {
    tripCardGrid.innerHTML = "";
    let futureTrips = currentTraveler.futureTrips;
    let futureTripCard = futureTrips.forEach(futureTrip => {
      let tripDestination = currentTraveler.findDestination(futureTrip.destinationID);
      tripCardGrid.innerHTML += `<section class="trip-info-card">
        <p><label for="destination-name">Destination: </label>${tripDestination.destination}</p>
        <p><label for="trip-date">Date: </label>${futureTrip.date}</p>
        <p><label for="trip-duration">Duration: </label>${futureTrip.duration}</p>
        <p><label for="number-of-Travelers">Travelers: </label>${futureTrip.travelers}</p>
        <p><label for="trip-status">Status: </label>${futureTrip.status}</p>
        </section>`
    })
  },

  displayPendingTrips(tripCardGrid, currentTraveler) {
    tripCardGrid.innerHTML = "";
    let pendingTrips = currentTraveler.pendingTrips;
    let pendingTripCard = pendingTrips.forEach(pendingTrip => {
      let tripDestination = currentTraveler.findDestination(pendingTrip.destinationID);
      tripCardGrid.innerHTML += `<section class="trip-info-card">
        <p><label for="destination-name">Destination: </label>${tripDestination.destination}</p>
        <p><label for="trip-date">Date: </label>${pendingTrip.date}</p>
        <p><label for="trip-duration">Duration: </label>${pendingTrip.duration}</p>
        <p><label for="number-of-Travelers">Travelers: </label>${pendingTrip.travelers}</p>
        <p><label for="trip-status">Status: </label>${pendingTrip.status}</p>
        </section>`
    })
  },

  noTripsMessage(tripCardGrid) {
    tripCardGrid.innerHTML = "";
    tripCardGrid.innerHTML += `<section class="no-trips-message">
      <p>The World is Waiting for You! No trip history of this type.<p>
    </section>`
  },

  showPlanTripTitle() {
    document.querySelector(".page-view-title").innerText = "Plan Your Next Adventure";
  },

  showTripHistoryTitle() {
    document.querySelector(".page-view-title").innerText = "Trip History";
  },

  displayNewTripCost(currentTraveler, numberOfTravelersInput, destinationSelector, tripDurationInput, destinationsData) {
    let tripDestination = destinationsData.find(destination => destination.id === parseInt(destinationSelector.value));
    let tripCost = ((parseInt(numberOfTravelersInput.value) * tripDestination.estimatedFlightCostPerPerson) + (parseInt(tripDurationInput.value) * tripDestination.estimatedLodgingCostPerDay));
    let agentFee = (tripCost * 0.1);
    let total = (tripCost + agentFee);
    document.querySelector(".new-trip-cost").innerText = `$${tripCost}.00`;
    document.querySelector(".new-trip-agent-fee").innerText = `$${agentFee}.00`;
    document.querySelector(".new-trip-total").innerText = `$${total}.00`;
  },

  resetPlanTripForm() {
    document.querySelector(".plan-new-trip-form").reset();
  }
}

export default domUpdates;
