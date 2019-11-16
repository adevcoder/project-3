import React from "react";
import axios from "axios"

class Buttons extends React.Component {

    handleClick = (event, value) => {
        event.preventDefault();
        axios.get('/api/get-np-by-category/category/:category', value)
        .then(() => {
            console.log(value);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {

        return (

            <div className="jumbotron">

                <h2 className= "display-4">Please choose category of your interest</h2>

                <button value="Poverty and Hunger" onClick={this.handleClick}>Poverty</button>
                <button value="Education and Academia" onClick={this.handleClick}>Education</button>
                <button value="Human Rights and Civil Liberties, Immigration" onClick={this.handleClick}>Immigration</button>
                <button value="Homelessness" onClick={this.handleClick}>Homelessness</button>
                <button value="Economic Development" onClick={this.handleClick}>Economic Development</button>
                <button value="Environment and Ecology" onClick={this.handleClick}>The Environment</button>
                <button value="Human Rights and Civil Liberties, Immigration" onClick={this.handleClick}>Human Rights</button>
                <button value="Animal Welfare" onClick={this.handleClick}>Animal Rights</button>
                <button value="Disaster Relief, International Relief Organization" onClick={this.handleClick}>Disaster Relief</button>
            </div>
        )
    }
}

export default Buttons;