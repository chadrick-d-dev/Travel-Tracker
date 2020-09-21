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
    this.futureTrips = this.findFutureTrips();
    this.pendingTrips = this.findPendingTrips();
    this.yearToDateTrips = this.findYearToDateTrips();
    this.yearTripCost = this.calculateYearTripCost();
    this.yearAgentFee = this.calculateYearAgentFee();
    this.totalSpentThisYear = 0;

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

  findFutureTrips() {
    return this.trips.filter(trip => {
      return trip.status !== "pending" && moment(new Date(trip.date)).isAfter(new Date(this.todaysDate));
    })
  }

  findPendingTrips() {
    return this.trips.filter(trip => {
      return trip.status === "pending";
    })
  }

  findYearToDateTrips() {
    return this.trips.filter(trip => {
      let yearToDate = moment(new Date(this.todaysDate)).subtract(1, "years");
      let endDate = moment(new Date(trip.date)).add(trip.duration, 'days');
      return trip.status !== "pending" && moment(new Date(endDate)).isBetween(new Date (yearToDate), new Date(this.todaysDate)) && moment(new Date(trip.date)).isBetween(new Date(yearToDate), new Date(this.todaysDate));
    })
  }

  calculateYearTripCost() {
    let pastYearTrips = this.findYearToDateTrips();
    return pastYearTrips.reduce((yearTripSum, trip) => {
      const tripDestination = this.destinations.find(destination => destination.id === trip.destinationID);
      return yearTripSum += ((trip.travelers * tripDestination.estimatedFlightCostPerPerson) + (trip.duration * tripDestination.estimatedLodgingCostPerDay))
    }, 0)
  }

  calculateYearAgentFee() {
    return this.yearTripCost * 0.1;
  }

}

export default Traveler;
