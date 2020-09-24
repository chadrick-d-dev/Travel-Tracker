class TripsRepo {
  constructor(travelerInfo, tripsData) {
    this.allTrips = tripsData;
    this.travelerID = travelerInfo.id;
  }
  findTravelersTrips() {
    const soManyTrips = this.allTrips;
    const travelerTrips =
    soManyTrips.filter(trip => this.travelerID === trip.userID);
    return travelerTrips;
  }
}

export default TripsRepo
