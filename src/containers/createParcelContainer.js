import React, { Component } from "react";
import { connect } from "react-redux";
import CreateParcel from "../components/createParcel";
import { parcelCreateAction } from "../actions/parcelCreateAction";

export class CreateParcelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parcel_description: "",
      recipient: "",
      contact: "",
      pickup_location: "",
      destination: "",
      isLoading: false,
      errors: {
        username: "",
        password: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginSuccess === true) {
      const { history } = this.props;

      history.push("/");
    }
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      errors: {
        parcel_description: "The parcel description is required"
      }
    });
    const data = {
      parcel_description: this.state.parcel_description,
      recipient: this.state.recipient,
      contact: this.state.contact,
      pickup_location: this.state.pickup_location,
      destination: this.state.destination
    };
    this.props.parcelCreateAction(data, this.props);
  }

  render() {
    return (
      <CreateParcel
        onChange={this.onChange}
        isProcessing={this.props.isProcessing}
        errors={this.state.errors}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export const mapStateToProps = state => ({
  isProcessing: state.parcel_create.isProcessing,
  createArticleSuccess: state.parcel_create.createArticleSuccess
});

export default connect(
  mapStateToProps,
  { parcelCreateAction }
)(CreateParcelContainer);
