import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 1,
        };
         console.log("Child Constructor");
        
    }

    componentDidMount(){
        console.log("Child componentDidMount");    
    }

    render() {
        const { name, location } = this.props;
        const { count } = this.state;
            console.log("Child render")
        return (
            <div className="user-card">
                <h1>Count= {count}</h1> {/* or {this.state.count}*/}
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                 }}>
                    Increase
                 </button>
                <h2>Name: {name}</h2>  {/**or {this.props.name} */}
                <h3>Location: {location}</h3>
                <h4>Contact: kevinfrancis967@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;