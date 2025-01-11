import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props){
        super(props);

        console.log("Parent Constructor")

    }

    componentDidMount(){
        console.log("Parent componentDidMount");
        
    }

    render() {
        console.log("Parent Render");
        
        return (
            <div className="about-container">
                <h1>About page</h1>
                <UserClass name={"Kevin Francis(class)"} location={"Kerala"} />
            </div>
        )
    }
}

export default About;


// const About = () => {
//     return (
//         <div className="about-container">
//             <h1>About Page</h1>
//             <UserClass name={"Kevin Francis(class)"} location={"Kerala"}/>
//         </div>
//     )
// }

// export default About;