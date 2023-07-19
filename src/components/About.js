import React from "react";
import UserClass from "./UserClass";
import { render } from "react-dom";


class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }


  componentDidMount() {                        
    console.log("parent component did mount");
  }


  render() {

    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Hello React Web Series</h2>
        <UserClass name={"First"} location={"MP"} />
      </div>
    );
  }
}

export default About;


