import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Weather extends Component {
  
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header>
            {this.props.city && this.props.country && (
              <p>
                Location: {this.props.city}, {this.props.country}
              </p>
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {this.props.temperature && (
                <p>Temperature: {this.props.temperature}</p>
              )}
            </Card.Title>
            <Card.Text>
              {this.props.description && (
                <p>Description: {this.props.description}</p>
              )}
              {this.props.error && <p>{this.props.error}</p>}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
          </Card.Footer>
        </Card>
        {/* {this.props.city && this.props.country && (
          <p>
            Location: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>} */}
      </div>
    );
  }
}

export default Weather;
