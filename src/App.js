import React, { Component } from "react";
import axios from "axios";
import CityForm from "./components/CityForm";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCites: []
    };
    this.getAllCites = this.getAllCites.bind(this);
    this.postCity = this.postCity.bind(this);
  }

  componentDidMount() {
    this.getAllCites();
  }

  getAllCites() {
    axios
      .get("/api/all_cities")
      .then(response => {
        this.setState({
          allCites: response.data
        });
      })
      .catch(err => console.log(err));
  }

  postCity(
    cityName,
    cityImage,
    administrativeLevel,
    population,
    infor
  ) {
    const newCity = {
      cityName,
      cityImage,
      administrativeLevel,
      population,
      infor
    };

    axios.post("/api/add_city", newCity).then(response => {
      this.setState({
        allCites: response.data
      });
    });
  }

  render() {
    const { allCites } = this.state;
    const mappedCites = allCites.map(city => {
      return (
        <div key={city.id}>
          <div className="heading">{city.city}</div>
          <div className="subheading">{city.administrativeLevel}</div>
          <div className="body">{city.infor}</div>
          <div className="image-container">

            <img src={city.image} alt="city for Chinesecity" />
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <CityForm postCity={this.postCity} />
        <div>{mappedCites}</div>
      </div>
    );
  }
}

export default App;
