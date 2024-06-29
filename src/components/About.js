
import UserClass from "./UserClass"
import React from "react";
import UserContext from "../utils/UserContext";
import { Component} from "react";
import User from "../components/User";  

class  About extends Component {
    constructor(props) {
        super(props);

        // console.log("parent componentDidMount");
    }
    render() {
        // console.log("Parent -render");

    return (
        <div className="About-section  py-10">
            <h1 className="p-5 m-5 font-extrabold justify-center flex text-3xl">About Me</h1>
            <div>
                
               <UserContext.Consumer>
                { ({loggedInUser}) => <h1>{loggedInUser}</h1> }
               </UserContext.Consumer>
            </div>
            <h2 className="p-5 m-5 border border-solid hover:border-black"> I am "Swayam" Mishra Learning React From Akshay Saini </h2>
            <UserClass/>
            
        </div>
    );
}
}

export default About