import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default"
            }
        }
        // console.log(this.props.name + " Child Construntor")
    }

    async componentDidMount() {
        // console.log(this.props.name + " child Component Did Mount")
        const data = await fetch("https://api.github.com/users/palash-bag10");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json)
    }

    render() {

        // console.log(this.props.name + " Child Render")

        return (
            <div className="user-card">
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h5>Contact: palash-bag10</h5>
            </div>
        )
    }

}

export default UserClass;