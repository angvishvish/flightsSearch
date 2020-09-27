import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import customSelect from "./Select";

class SearchFlightsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      priceRange: 250000
    };
  }

  handleSubmit = () => {
    setTimeout(() => {
			this.props.GetFlights(formValues);
			this.setState({ isSearching: false })
		}, 500);
  }

  inputRange = ({ input, placeholder, type, min, max, value, meta: { touched, error } }) => (
    <React.Fragment>
      <input {...input} placeholder={placeholder} type={type} min={min} max={max} value={value} step="1000" />
      {touched && error && <span className="form__form-group-error">{error}</span>}
      {this.state.priceRange}
    </React.Fragment>
  )

  defaultInput = ({ input, placeholder, type, meta: { touched, error } }) => (
    <React.Fragment>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span className="form__form-group-error">{error}</span>}
    </React.Fragment>
  )

  renderButton = ({ invalid }) => {
    if (invalid) {
      return <button disabled type="submit" className="btn btn-primary btn-block">Search</button>
    }
    return <button type="submit" className="btn btn-primary btn-block">Search</button>
  }

  render() {
    const { handleSubmit, onSubmit, cities, passengerOptionList } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="search-form margin-bottom-30">
        <div className="form-group">
          <Field
            name="from"
            component={customSelect}
            placeholder="Origin(eg. Pune)"
            options={cities}
          />
        </div>
        <div className="form-group">
          <Field
            name="to"
            component={customSelect}
            placeholder="Destination (eg. Mumbai)"
            options={cities}
          />
        </div>
        <div className="form-group date-field">
          <Field
            name="date"
            type="date"
            component={this.defaultInput}
            placeholder="Departure date"
          />
        </div>
        <div className="form-group">
          <Field
            name="passengers"
            component={customSelect}
            options={passengerOptionList}
            placeholder="Passengers"
          />
        </div>


        <div className="form-group">
          <h5>Refine Flight Search</h5>
          <Field
            id="priceRange"
            name="priceRange"
            type="range"
            min="1000"
            max="500000"
            value={this.state.priceRange}
            component={this.inputRange}
            placeholder="Passengers"
            onChange={(e)=> this.setState({ priceRange: e.target.value })}
          />
        </div>

        {this.renderButton(this.props)}
      </form>
    )
  }
}

export const validateForm = (formKey) => {
  const errors = {};
  if (!formKey.from) {
    errors.from = 'Enter or Select Origin';
  }

  if (!formKey.to) {
    errors.to = 'Enter or Select Destination';
  }

  if (!formKey.date) {
    errors.date = 'Please select departure date (eg. 01-10-2020)';
  }

  if (!formKey.passengers) {
    errors.passengers = 'Please select no. of passenger (e.g -> 1)';
  }

  return errors;
};

export default reduxForm({
  form: "flightSearchForm",
  validate: validateForm,
})(SearchFlightsForm);
