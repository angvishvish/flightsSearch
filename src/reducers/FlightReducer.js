import FETCH_FLIGHTS from '../actions/types';
import FlightsJson from '../jsonData/data.json';
import { INITIAL_STATE } from './helper';

export default function flightReducer(state = INITIAL_STATE, action) {
  const actionPayload = action.payload;
  switch (action.type) {
    case FETCH_FLIGHTS: {
      const flights = FlightsJson.filter((flight) => (
        flight.source === actionPayload.from.value)
        && flight.destination === actionPayload.to.value
        && (flight.fare < actionPayload.priceRange));

      if (actionPayload.passengers) {
        flights.map((flight) => {
          flight.totalprice = flight.fare * actionPayload.passengers.value;
          return flight.totalprice;
        });
      }
      return {
        ...state,
        availableFlights: flights,
        priceRange: actionPayload.priceRange,
        flightDetails: {
          from: actionPayload.from.value,
          to: actionPayload.to.value,
          date: actionPayload.date,
          noOfPassenger: actionPayload.passengers.value,
        },
        isSameLocation: actionPayload.to.value === actionPayload.from.value,
      };
    }
    default:
      return state;
  }
}
