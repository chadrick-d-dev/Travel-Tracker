import moment from "moment";
class Traveler {
  constructor(traveler, travelerTrips) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.todaysDate = moment().format("YYYY/MM/DD");
    // this.allDestinations = destinations;
    this.allTravelerTrips = travelerTrips;
    // this.pastTrips = [];
    // this.currentTrips = [];
    // this.futureTrips = [];
    // this.pendingTrips = [];
    // this.pastYearTrips = [];
    // this.totalSpentThisYear = 0;
  }
  // getAllTravelersTrips() {
  //   // I need the array of trips, then i need to go through that array and look for a userID that a traveler id
  // }
  //
  // findPastTrips() {
  //
  // }
  //
  // findCurrentTrips() {
  //
  // }
  //
  // findFutureTrips() {
  //
  // }
  //
  // findPendingTrips() {
  //
  // }
  //
  // findTotalSpentThisYear() {
  //
  // }
}

export default Traveler;
