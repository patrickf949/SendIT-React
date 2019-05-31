import React, { Component } from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParcelsAction } from "../actions/getParcelsAction";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.goToParcel = this.goToParcel.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getParcelsAction(this.props.match.params.id);
  }
  goToParcel(id) {
    this.props.history.push("/parcels/" + id);
  }

  render() {
    const { parcels } = this.props;
    console.log("Dem parcels", parcels);
    let s = 1;
    const parcelsList = parcels.parcels
      ? parcels.parcels.map(parcel => {
          return (
            <tr onClick={() => this.goToParcel(parcel.parcel_id)}>
              <td>{s++}</td>
              <td className="not1">{parcel.recipient}</td>
              <td>{parcel.parcel_description}</td>
              <td className="not">{parcel.pickup_location}</td>
              <td>{parcel.destination}</td>
              <td>{parcel.current_location}</td>
              <td className="not">{parcel.price ? parcel.price : "N/A"}</td>
              <td className="not1">
                {parcel.weight_kgs ? parcel.weight_kgs + " kgs" : "N/A"}
              </td>
              <td className="status">{parcel.status}</td>
            </tr>
          );
        })
      : null;
    const parcelsContainer = parcelsList ? (
      <table id="client_table">
        <thead>
          <tr>
            <td>No.</td>
            <td className="not1">Recipient</td>
            <td>Product</td>
            <td className="not">PickUp Location</td>
            <td className="status">Destination</td>
            <td>Location</td>
            <td className="not">Price(UGX)</td>
            <td className="not1">Weight(kg)</td>
            <td>Status</td>
          </tr>
        </thead>

        <tbody id="tbody">{parcelsList}</tbody>
      </table>
    ) : (
      <div className="container">
        You currently have no parcel delivery orders
      </div>
    );

    return (
      <div className="container">
        <div className="content">
          <div>&nbsp;</div>
          <div />

          <h3 id="usernametag">Hello </h3>
          <hr />
          <p>To Create a new parcel delivery order click the button below</p>
          <Link to="/create-parcel">
            <button>Create an Order</button>
          </Link>

          <p>Take a look at your parcel delivery orders</p>
          <p>
            Click individual parcel delivery orders to view their current
            location and/ or edit them
          </p>

          <hr />
          <div id="api_reply" />
          {parcelsContainer}
          <div>&nbsp;</div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  parcels: state.get_parcels.parcels
});

export default withRouter(
  connect(
    mapStateToProps,
    { getParcelsAction }
  )(Dashboard)
);
