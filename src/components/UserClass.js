import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "http://dummy-photo.com",
      },
    };

     console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
      console.log(this.props.name + "child component did mount");
    // Api call here !
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

     console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} alt="img" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : paragjain528@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did Mount      ------>  just like useEffect hook
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      componentDid Update
 *
 *
 *
 *
 */
