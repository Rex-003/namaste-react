import { useState } from "react";
const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);
  const incCount = () => {
    return setCount(count + 1);
  };
  const resCount = () => {
    return setCount(0);
  };
  return (
    <div className="user-card">
      <h1>count: {count} </h1>
      <button onClick={incCount}>count</button>{" "}
      <button onClick={resCount}>reset</button>
      <h1>count: {count2} </h1>
      <h1>Name : {name}</h1>
      <h2>Location : {location}</h2>
      <h3>Age: 22</h3>
    </div>
  );
};
export default User;
