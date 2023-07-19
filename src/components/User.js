import React , {useState} from "react";

const User = ({name}) => {
    const [count1] = useState(1);
    const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>Count : {count1}</h1>
      <h1>Count : {count2}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : MP</h3>
      <h4>Contact : paragjain528@gmail.com</h4>
    </div>
  );
};

export default User;


// useState hook in functional component
