/* eslint linebreak-style: ["error", "windows"] */

import FlightsJson from '../jsonData/data.json';

export const availableCities = () => {
  const source = FlightsJson.map((flight) => flight.source);
  const destination = FlightsJson.map((flight) => flight.destination);
  const cities = [...new Set(source, destination)];
  const cityOptions = [];
  cities.forEach((city) => {
    cityOptions.push({
      label: city,
      value: city,
    });
  });
  return cityOptions;
};

export const passengerOptionList = () => {
  const passengerLabels = [];
  for (let index = 1; index <= 10; index += 1) {
    passengerLabels.push({
      label: index,
      value: index,
    });
  }
  return passengerLabels;
};

export const INITIAL_STATE = {
  cities: availableCities(),
  passengerOptionList: passengerOptionList(),
  availableFlights: [],
  flightDetails: {
    from: 'Delhi',
    to: 'Pune',
    date: '26-09-2020',
    noOfPassenger: 1,
  },
  isSameLocation: false,
  priceRange: 500000,
};
