/* eslint arrow-body-style: ["error", "never"] */
/* eslint-env es6 */

import FETCH_FLIGHTS from './types';

export default function GetFlights(payload) {
  return {
    type: FETCH_FLIGHTS,
    payload,
  };
}
