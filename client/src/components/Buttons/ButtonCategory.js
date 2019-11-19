import React from "react";

class Buttons extends React.Component {

    state = {
        nonprofits: []
    }
    handleClick = (event) => {
        console.log(event.target.value);
        const name = event.target.value;
        fetch(`/api/get-np-by-category/category/${name}`)
            .then(res => res.json())
            .then((data) => {
                this.props.setnonprofits(data);
                console.log("data: ",data);
            })
            .catch(err => console.error(err))
    }

    render() {

        return (

            <div className="jumbotron">

                <h3 className="display-4">Please choose a category of interest</h3>
                <button value="Poverty and Hunger" name="Poverty and Hunger" onClick={this.handleClick}>Poverty</button>
                <button value="Education and Academia" name="Education and Academia" onClick={this.handleClick}>Education</button>
                <button value="Human Rights and Civil Liberties, Immigration" name="Human Rights and Civil Liberties, Immigration" onClick={this.handleClick}>Immigration</button>
                <button value="Homelessness" name="Homelessness" onClick={this.handleClick}>Homelessness</button>
                <button value="Economic Development" name="Economic Development" onClick={this.handleClick}>Economic Development</button>
                <button value="Environment and Ecology" name="Environment and Ecology" onClick={this.handleClick}>The Environment</button>
                <button value="Human Rights and Civil Liberties, Immigration" name="Human Rights and Civil Liberties, Immigration" onClick={this.handleClick}>Human Rights</button>
                <button value="Animal Welfare" name="Animal Welfare" onClick={this.handleClick}>Animal Rights</button>
                <button value="Disaster Relief, International Relief Organization" name="Disaster Relief, International Relief Organization" onClick={this.handleClick}>Disaster Relief</button>
            </div>
        )
    }
}

export default Buttons;