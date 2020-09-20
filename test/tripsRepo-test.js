import { expect } from 'chai';
import TripsRepo from '../src/tripsRepo.js'

describe('Traveler', function() {
  let tripsRepo;
  let travelerInfo;
  let tripsData;
  // let destinations;

  beforeEach(function() {
    travelerInfo = {
      "id": 33,
      "name": "Selene Kleyn",
      "travelerType": "relaxer"
    }

    tripsData = [
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
          "status": "approved",
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
          "userID": 39,
          "destinationID": 33,
          "travelers": 2,
          "date": "2020/04/15",
          "duration": 12,
          "status": "approved",
          "suggestedActivities": []
        }
      ]

      tripsRepo = new TripsRepo(travelerInfo, tripsData);

      // destinations = [
      //   {
      //     "id": 29,
      //     "destination": "Willemstad, Curaçao",
      //     "estimatedLodgingCostPerDay": 80,
      //     "estimatedFlightCostPerPerson": 1100,
      //     "image": "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
      //     "alt": "brightly colored buildings near body of water"
      //   },
      //   {
      //     "id": 33,
      //     "destination": "Brussels, Belgium",
      //     "estimatedLodgingCostPerDay": 1000,
      //     "estimatedFlightCostPerPerson": 110,
      //     "image": "https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      //     "alt": "brown concrete gate"
      //   },
      // ]
    })

    it('is a function', function() {
      expect(TripsRepo).to.be.a('function');
    });

    it('should be an instance of TripsRepo', function() {
      expect(tripsRepo).to.be.an.instanceof(TripsRepo);
    });

    it('should initialize with an id', function() {
      expect(tripsRepo.travelerID).to.equal(33);
    })

    it('should return an array of trips for a specific traveler', function() {
      tripsRepo.findTravelersTrips();
      expect(tripsRepo.findTravelersTrips().length).to.equal(6);
    })
  })
