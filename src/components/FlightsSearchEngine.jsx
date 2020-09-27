import React, { Component } from "react";
import { connect } from "react-redux";

import FlightDetail from "./FlightDetail";
import SearchFlightsForm from "./SearchFlightsForm";
import GetFlights from "../actions/FlightActions";

class FlightsSearchEngine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSearching: false
		};
	}


	handleSubmit = (formValues) => {
		this.setState({ isSearching: true });
		setTimeout(() => {
			this.props.GetFlights(formValues);
			this.setState({ isSearching: false })
		}, 1000);
	}

	renderFlightResults = ({ availableFlights, flightDetails, isSameLocation, noOfPassenger }) => {
		if (isSameLocation) {
			return (
				<div className="header">
					{ isSameLocation ? 'Origin and Destination cannot be same' : ''}
				</div>
			)
		}

		if (this.state.isSearching) {
			return (
				<h3 className="header text-center">
					<i className="fas fa-circle-notch text-blue fa-spin" />
					Searching ...
				</h3>
			);
		}

		if (availableFlights.length) {
			return (
				<React.Fragment>
					<h4 className="text-blue">
						From: {flightDetails.from}{` `} To:{` `}{flightDetails.to}
					</h4>
					{
						availableFlights.map((flight, index) => (
							<FlightDetail flightDetails={flightDetails} flight={flight} key={index} />
						))
					}
				</React.Fragment>
			)
		}
		if (!availableFlights.length) {
			return (
				<h4 className="header text-center text-red">
					No flight Match!!
				</h4>
			)
		}

	}

	render() {
		const { availableCities, passengerOptionList } = this.props;
		return (
			<div className="row">
				<aside className="col-md-4">
					<ul className="sidebar-tabs">
						<li className="active">One way</li>
					</ul>

					<div className="aside-container">

						<SearchFlightsForm
							passengerOptionList={passengerOptionList}
							cities={availableCities}
							onSubmit={this.handleSubmit}
						/>
					</div>
				</aside>
				<div className="col-md-8">
					{this.renderFlightResults(this.props)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const stateFlight = state.flight;
	return {
		availableFlights: stateFlight.availableFlights,
		flightDetails: stateFlight.flightDetails,
		availableCities: stateFlight.cities,
		passengerOptionList: stateFlight.passengerOptionList,
		noOfPassenger: stateFlight.noOfPassenger,
		isSameLocation: stateFlight.isSameLocation,
		priceRange: stateFlight.priceRange
	}
};

const mapDispatchToProps = dispatch => ({
	GetFlights: (payload) => {
		dispatch(GetFlights(payload));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightsSearchEngine);
