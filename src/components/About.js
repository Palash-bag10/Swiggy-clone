import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount")
    }

    render() {
        // console.log("Parent Render")
        return(
            <div>
                <h1>About</h1>
                <h2>This is About Router Page</h2>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h2 className=" font-bold text-2xl text-blue-500">{loggedInUser}</h2>}
                </UserContext.Consumer>

                {/* <User name={"Palash Bag (Function)"} /> */}
                <UserClass name={"First"} />
            </div> 
        )
    }

}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is About Router Page</h2>

//             {/* <User name={"Palash Bag (Function)"} /> */}
//             <UserClass name={"Palash Bag (Class)"} />
//         </div>
//     )
// }

export default About;