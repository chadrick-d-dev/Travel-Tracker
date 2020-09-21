import moment from "moment";
class Traveler {
  constructor(traveler, travelerTrips, destinationsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.todaysDate = moment().format("YYYY/MM/DD");
    this.destinations = destinationsData;
    this.trips = travelerTrips;
    this.presentTrips = this.findPresentTrips();
    this.pastTrips = this.findPastTrips();
    // this.futureTrips = [];
    // this.pendingTrips = [];
    // this.thisYearsCompletedTrips = [];
    // this.totalSpentThisYear = 0;
  }
  findPresentTrips() {
    return this.trips.filter(trip => {
      let endDate = moment(new Date(trip.date)).add(trip.duration, 'days');
      return trip.status !== "pending" && moment(new Date(this.todaysDate)).isBetween(new Date(trip.date), new Date(endDate));
    })
  }

  findPastTrips() {
    return this.trips.filter(trip => {
      let endDate = moment(new Date(trip.date)).add(trip.duration, 'days');
      return trip.status !== "pending" && moment(new Date(endDate)).isBefore(new Date(this.todaysDate));
    })
  }
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
