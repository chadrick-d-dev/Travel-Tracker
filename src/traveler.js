import moment from "moment";
class Traveler {
  constructor(traveler, travelerTrips, destinationsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.todaysDate = moment().format("YYYY/MM/DD");
    this.destinations = destinationsData;
    this.trips = travelerTrips;
    this.presentTrips = [];
    this.pastTrips = [];
    this.futureTrips = [];
    this.pendingTrips = [];
  }

  findPresentTrips() {
    let presentTrips = this.trips.filter(trip => {
      let endDate = moment(new Date(trip.date)).add(trip.duration, 'days');
      return trip.status !== "pending" && moment(new Date(this.todaysDate)).isBetween(new Date(trip.date), new Date(endDate));
    })
    return this.presentTrips = presentTrips;
  }

  findPastTrips() {
    let pastTrips = this.trips.filter(trip => {
      let endDate = moment(new Date(trip.date)).add(trip.duration, 'days');
      return trip.status !== "pending" && moment(new Date(endDate)).isBefore(new Date(this.todaysDate));
    })
    return this.pastTrips = pastTrips;
  }

  findFutureTrips() {
    let futureTrips = this.trips.filter(trip => {
      return trip.status !== "pending" && moment(new Date(trip.date)).isAfter(new Date(this.todaysDate));
    })
    return this.presentTrips = futureTrips;
  }

  findPendingTrips() {
    let pendingTrips = this.trips.filter(trip => {
      return trip.status === "pending";
    })
    return this.pendingTrips = pendingTrips;
  }

  findYearToDateTrips() {
    let yearToDateTrips = this.trips.filter(trip => {
      let yearToDate = moment(new Date(this.todaysDate)).subtract(1, "years");
      let endDate = moment(new Date(trip.date)).add(trip.duration, 'days');
      return trip.status !== "pending" && moment(new Date(endDate)).isBetween(new Date (yearToDate), new Date(this.todaysDate)) && moment(new Date(trip.date)).isBetween(new Date(yearToDate), new Date(this.todaysDate));
    })
    return this.yearToDateTrips = yearToDateTrips;
  }

  findDestination(destinationID) {
    return this.destinations.find(destination => destination.id === destinationID);
  }

  calculateYearTripCost() {
    let pastYearTrips = this.findYearToDateTrips();
    return pastYearTrips.reduce((yearTripSum, trip) => {
      const tripDestination = this.findDestination(trip.destinationID);
      return yearTripSum += ((trip.travelers * tripDestination.estimatedFlightCostPerPerson) + (trip.duration * tripDestination.estimatedLodgingCostPerDay))
    }, 0)
  }

  calculateYearAgentFee() {
    let yearTripCost = this.calculateYearTripCost();
    return yearTripCost * 0.1;
  }

  calculateYearTotalSpent() {
    let yearTripCost = this.calculateYearTripCost();
    let yearAgentFee = this.calculateYearAgentFee()
    return yearTripCost + yearAgentFee;
  }
}

export default Traveler;
