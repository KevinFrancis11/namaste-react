import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-container">
            <h1>About Page</h1>
            <User name={"Kevin Francis(function)"}/>

            <UserClass name={"Kevin Francis(class)"} location={"Kerala"}/>
        </div>
    )
}

export default About;