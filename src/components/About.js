import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is About Router Page</h2>

            {/* <User name={"Palash Bag (Function)"} /> */}
            <UserClass name={"Palash Bag (Class)"} />
        </div>
    )
}

export default About;