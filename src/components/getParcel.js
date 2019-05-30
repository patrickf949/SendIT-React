import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../styles/home.scss";
import { getParcelAction } from "../actions/getParcelAction";

export class GetParcel extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getParcelAction(this.props.match.params.id);
  }

  render() {
    const { parcel } = this.props;
    console.log("THis is the guy", parcel);

    const oneParcel = parcel.Parcel ? parcel.Parcel[0] : null;
    const parcelContent = oneParcel ? (
      <div className="container">
        <form className="form-control form-container">
          <h3>{parcel.message}</h3>
          <span>Parcel Description</span>
          <input
            className="form-control text-field"
            name="parcel_description"
            type="text"
            value={oneParcel.parcel_description}
            readOnly
          />
          <span>Price</span>
          <input
            className="form-control text-field"
            name="parcel_description"
            type="text"
            value={
              oneParcel.price ? "UGX. " + oneParcel.price : "Not yet Priced"
            }
            readOnly
          />
          <span>Weight</span>
          <input
            className="form-control text-field"
            name="parcel_description"
            type="text"
            value={
              oneParcel.weight_kgs
                ? oneParcel.weight_kgs + " Kgs"
                : "Not yet Weighed"
            }
            readOnly
          />
          <span>Date of Creation</span>
          <input
            className="form-control text-field"
            name="parcel_description"
            type="text"
            value={oneParcel.date_created}
            readOnly
          />
          <span>Status</span>
          <input
            className="form-control text-field"
            name="parcel_description"
            type="text"
            value={oneParcel.status}
            readOnly
          />
          <span>Estimated Delivery Date</span>
          <input
            className="form-control text-field"
            name="parcel_description"
            type="text"
            value={oneParcel.date_to_be_delivered}
            readOnly
          />
          <span>Recipient</span>
          <input
            className="form-control text-field"
            name="recipient"
            type="text"
            value={oneParcel.recipient}
            readOnly
          />
          <span>Recipient Contact</span>
          <input
            className="form-control text-field"
            name="contact"
            type="text"
            readOnly
            value={oneParcel.recipient_contact}
          />
          <span>Current location</span>
          <input
            className="form-control text-field"
            name="pickup_location"
            type="text"
            readOnly
            value={oneParcel.current_location}
          />
          <span>Pick Up location</span>
          <input
            className="form-control text-field"
            name="pickup_location"
            type="text"
            readOnly
            value={oneParcel.pickup_location}
          />
          <span>Destination</span>
          <input
            className="form-control text-field"
            name="destination"
            type="text"
            readOnly
            value={oneParcel.destination}
          />
        </form>
      </div>
    ) : (
      <div className="container content">
        The Parcel you have requested does not exist
      </div>
    );
    return <div className="container">{parcelContent}</div>;
  }
}

export const mapStateToProps = state => ({
  parcel: state.get_parcel.parcel
});

export default withRouter(
  connect(
    mapStateToProps,
    { getParcelAction }
  )(GetParcel)
);
