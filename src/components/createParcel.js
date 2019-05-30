import React, { Component } from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";

const CreateParcel = props => {
  const { handleSubmit, onChange, isProcessing } = props;
  let Loader = require("react-loader");
  return (
    <div className="container">
      <form className="form-control form-container" onSubmit={handleSubmit}>
        <h3>Place your parcel delivery order</h3>

        <input
          className="form-control text-field"
          placeholder="description"
          name="parcel_description"
          type="text"
          required={true}
          onChange={onChange}
        />
        <input
          className="form-control text-field"
          placeholder="recipient"
          name="recipient"
          type="text"
          required={true}
          onChange={onChange}
        />
        <input
          className="form-control text-field"
          placeholder="recipient contact"
          name="contact"
          type="text"
          required={true}
          onChange={onChange}
          pattern="^!*([0-9]!*){10,15}$"
          title="Contact should have atleast 10 digits and atmost 15 digits"
        />
        <Loader loaded={!isProcessing} />
        <input
          className="form-control text-field"
          placeholder="pick up location"
          name="pickup_location"
          type="text"
          required={true}
          onChange={onChange}
        />
        <input
          className="form-control text-field"
          placeholder="destination"
          name="destination"
          type="text"
          required={true}
          onChange={onChange}
        />
        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Create Parcel"
          />
        </div>
        <Link to="/dashboard">Cancel</Link>
      </form>
    </div>
  );
};

export default CreateParcel;
