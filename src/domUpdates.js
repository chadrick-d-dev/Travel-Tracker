import Traveler from './traveler.js'
import TripsRepo from './tripsRepo.js'
import fetchAPI from './fetchAPI.js'
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

  displayNewTripCost(currentTraveler, numberOfTravelersInput, destinationSelector, tripDurationInput, destinationsData) {
    let tripDestination = destinationsData.find(destination => destination.id === parseInt(destinationSelector.value));
    let tripCost = ((parseInt(numberOfTravelersInput.value) * tripDestination.estimatedFlightCostPerPerson) + (parseInt(tripDurationInput.value) * tripDestination.estimatedLodgingCostPerDay));
    let agentFee = (tripCost * 0.1);
    let total = (tripCost + agentFee);
    document.querySelector(".new-trip-cost").innerText = `$${tripCost}.00`;
    document.querySelector(".new-trip-agent-fee").innerText = `$${agentFee}.00`;
    document.querySelector(".new-trip-total").innerText = `$${total}.00`;
  }

}

export default domUpdates;
