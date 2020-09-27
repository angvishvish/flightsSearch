import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import flightReducer from './FlightReducer';

export default combineReducers({
  flight: flightReducer,
  form: formReducer,
});
