import { useState } from "react";

const User = ({ name, role }) => {
   const [count, setCount] = useState(0);
   const [count2] = useState(1);

   return (
    <div className="user-card">
      <hr />
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: India</h3>
      <h4>Role: {role}</h4>
    </div>
   );
};

export default User;
