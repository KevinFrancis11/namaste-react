import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "heading tag");

const ele = (<span>React element1🚤</span>)


//JSX
//this is a react element
const jsxHeading = (
    <h1 id="heading" className="head">
        {ele}
        React element2 🚀
    </h1>
    );

const Title = () => (
    <h1 className="head">
        Namaste react using jsx 🚌
    </h1>
);


const number = 1000;
//functional component
//this is a component which has a jsx(react element) in it.
const HeadingComponent = () => (
    <div className="container">
        {jsxHeading}
        {Title()} {/* you can also call the function */}
        <Title />{/*  Rendering other components inside a component is known as !!!component composition!!!! */}
        <h1 className="heading">
            Namaste react functional component.🚀
        </h1>
    </div>
);




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); this is the code to render react element

//this is the code to render react component
root.render(<HeadingComponent />)

