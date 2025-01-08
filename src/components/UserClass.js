import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            count: 0,
            count2: 1,
        };
    }

    render(){
        const {name, location} = this.props;
        const {count, count2} = this.state;
        return(
            <div className="user-card">
                <h1>Count= {count}</h1> {/* or {this.state.count}*/}
                <h1>Count2= {count2}</h1> 
                <h2>Name: {name}</h2>  {/**or {this.props.name} */}        
                <h3>Location: {location}</h3>
                <h4>Contact: kevinfrancis967@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;