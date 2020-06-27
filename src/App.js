import React, { Component } from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";


const API_KEY = "7fec35e807f5266daecf0ea2c67f65e9";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter value",
      });
    }
  };

  render() {
    const pageStyle={
      backgroundImage: "url(https://image.freepik.com/free-photo/rain-drops-car-glass_1339-5021.jpg)",
      backgroundRepeat  : 'no-repeat',
      backgroundSize: 'cover',      
    }
    const layout={
      padding:"30px"
    }
    return (
      <div style={pageStyle}>
      <div>
        <div style={layout}>
        <Titles />
        </div>
        <div style={layout}>
        <Form getWeather={this.getWeather} />
        </div>
        <div style={layout}>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
