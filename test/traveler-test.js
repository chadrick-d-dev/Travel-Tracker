import { expect } from 'chai';
import Traveler from '../src/traveler.js'

describe('Traveler', function() {
  let travelerInfo;
  let traveler;
  let trips;
  let destinations;

  beforeEach(function() {
    travelerInfo = {
      "id": 33,
      "name": "Selene Kleyn",
      "travelerType": "relaxer"
    };

    destinations = [
      {
        "id": 29,
        "destination": "Willemstad, Curaçao",
        "estimatedLodgingCostPerDay": 80,
        "estimatedFlightCostPerPerson": 1100,
        "image": "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
        "alt": "brightly colored buildings near body of water"
      },
      {
        "id": 33,
        "destination": "Brussels, Belgium",
        "estimatedLodgingCostPerDay": 1000,
        "estimatedFlightCostPerPerson": 110,
        "image": "https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "brown concrete gate"
      },
      {
        "id": 36,
        "destination": "Reykjavík, Iceland",
        "estimatedLodgingCostPerDay": 900,
        "estimatedFlightCostPerPerson": 120,
        "image": "https://images.unsplash.com/photo-1515005319369-c4406c3f832b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        "alt": "frozen river in the middle of rock mountains"
      }
    ];

    trips = [
      {
        "id": 12,
        "userID": 33,
        "destinationID": 33,
        "travelers": 6,
        "date": "2020/09/19",
        "duration": 6,
        "status": "approved",
        "suggestedActivities": []
        },
        {
          "id": 30,
          "userID": 33,
          "destinationID": 29,
          "travelers": 1,
          "date": "2020/05/17",
          "duration": 5,
          "status": "approved",
          "suggestedActivities": []
        },
        {
          "id": 31,
          "userID": 33,
          "destinationID": 36,
          "travelers": 3,
          "date": "2020/12/19",
          "duration": 15,
          "status": "approved",
          "suggestedActivities": []
        },
        {
          "id": 38,
          "userID": 33,
          "destinationID": 33,
          "travelers": 3,
          "date": "2021/02/18",
          "duration": 15,
          "status": "pending",
          "suggestedActivities": []
        },
        {
          "id": 32,
          "userID": 33,
          "destinationID": 36,
          "travelers": 5,
          "date": "2019/10/31",
          "duration": 6,
          "status": "pending",
          "suggestedActivities": []
        },
        {
          "id": 109,
          "userID": 33,
          "destinationID": 29,
          "travelers": 1,
          "date": "2019/07/02",
          "duration": 20,
          "status": "approved",
          "suggestedActivities": []
        },
        {
          "id": 110,
          "userID": 33,
          "destinationID": 33,
          "travelers": 2,
          "date": "2020/04/15",
          "duration": 12,
          "status": "approved",
          "suggestedActivities": []
        }
      ];

      traveler = new Traveler(travelerInfo, trips, destinations);
    })

    describe('Properties and funcitonality', function() {
      it('is a function', function() {
        expect(Traveler).to.be.a('function');
      });

      it('should be an instance of Traveler', function() {
        expect(traveler).to.be.an.instanceof(Traveler);
      });

      it('should initialize with an id', function() {
        traveler;
        expect(traveler.id).to.equal(33);
      })

      it('should initialize with a name', function() {
        traveler;
        expect(traveler.name).to.deep.equal("Selene Kleyn");
      })

      it('should initialize with a traveler type', function() {
        expect(traveler.type).to.deep.equal("relaxer");
      })

      it('should initialize with todays date', function() {
        expect(traveler.todaysDate).to.deep.equal("2020/09/21");
      })

      it('should initialize an array of all a travelers trips', function() {
        expect(traveler.trips.length).to.deep.equal(7);
      })

      it('should initialize with all destinations', function() {
        expect(traveler.destinations.length).to.deep.equal(3);
      })
    })

    describe('Seperate trips by time and status of trips', function() {
      it('should add array of present trips that are not pending to presentTrips', function() {
        expect(traveler.presentTrips.length).to.equal(1);
      })

      it('should add array of past trips that are not pending to pastTrips', function() {
        expect(traveler.pastTrips.length).to.equal(3);
      })

      it('should add array of future trips that are not pending to futureTrips', function() {
        expect(traveler.futureTrips.length).to.equal(1);
      })

      it('should add array of pending trips regardless of their date to pendingTrips', function() {
        expect(traveler.pendingTrips.length).to.equal(2);
      })

      it('should add array of all nonpending trips completed in the last year to date', function() {
        expect(traveler.yearToDateTrips.length).to.equal(2);
      })
    })
    describe('Get travel costs for year', function() {
      it('should return value for total spent on approved trips in the last year to date', function() {
        expect(traveler.yearTripCost).to.equal(13720);
      })

      it('should return value for total spent on approved trips in the last year to date', function() {
        expect(traveler.yearAgentFee).to.equal(1372);
      })

    })
  })
