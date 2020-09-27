import React, { Component } from "react";

class FlightDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { flight, flightDetails } = this.props;
		return (
			<div className="flight-detail row">
				<div className="col-md-8 padding-20">
					<p className="flight-price text-black">
						Price: <i className="fa fa-inr text-blue" aria-hidden="true"></i>
						{flight.fare.toString()} X {flightDetails.noOfPassenger} = 
						Total: <i className="fa fa-inr text-blue" aria-hidden="true"></i> {flight.totalprice.toString()}
					</p>
					<p>{flight.flight_id}</p>
					<p>{flight.source_code}{" "}{">"}{" "}{flight.destination_code}</p>
					<p>
						<i className="fas fa-plane-departure text-blue fa-1x"></i> Depart: {flight.departs_at}</p>
					<p>
						<i className="fas fa-plane-arrival text-blue fa-1x"></i> Arrive: {flight.arrives_at}</p>
					</div>
					<div className="col-md-4 padding-20 text-center">
						<i className="fab fa-fly fa-4x text-blue padding-20"></i>
						<br /><button className="btn btn-success btn-block">Book this flight</button>
					</div>
			</div>
		)
	}
}

export default FlightDetail;