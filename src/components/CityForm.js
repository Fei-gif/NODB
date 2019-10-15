import React from "react";

export default class CityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            cityImage: "",
            administrativeLevel: "",
            population: 0,
            infor: ""
        };
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const {
            cityName,
            cityImage,
            administrativeLevel,
            population,
            infor
        } = this.state;

        return (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    this.props.postCity(
                        cityName,
                        cityImage,
                        administrativeLevel,
                        population,
                        infor
                    );
                    this.setState({
                        cityName: "",
                        cityImage: "",
                        administrativeLevel: "",
                        population: 0,
                        infor: ""
                    });
                }}>
                <label>City Name</label>
                <input value={this.state.cityName}
                    onChange={e =>
                        this.universalInput("cityName", e.target.value)} />

                <label>City Image</label>
                <input
                    value={this.state.cityImage}
                    onChange={e => this.universalInput("cityImage", e.target.value)} />

                <label>AdministrativeLevel</label>
                <input
                    value={this.state.administrativeLevel}
                    onChange={e => this.universalInput("administrativeLevel", e.target.value)} />

                <label>Population</label>
                <input
                    value={this.state.populationNumber}
                    onChange={e =>
                        this.universalInput("populationNumber", e.target.value)
                    } />

                <label>Infor</label>
                <input
                    value={this.state.infor}
                    onChange={e => this.universalInput("infor", e.target.value)} />
                <button>Submit</button>
                <button>Delete</button>

            </form>


        );
    }
}