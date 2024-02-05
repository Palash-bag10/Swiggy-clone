import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Kolkata</h3>
                <h5>Contact: palash-bag10</h5>
            </div>
        )
    }

}

export default UserClass;