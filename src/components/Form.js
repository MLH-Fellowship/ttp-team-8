import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  formStyle={
    textAlign: "center"
  }
  render() {
    return (
      <form onSubmit={this.props.getWeather} style={this.formStyle}>
          <div>
            <div>
            <input type="text" name="city" placeholder="city..." />
            </div>
            <input type="text" name="country" placeholder="country..." />
          </div>
        <button> Get Weather </button>
      </form>
    );
  }
}
export default Form;
