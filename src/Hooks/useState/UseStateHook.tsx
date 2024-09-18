/*
Definition: useState is a hook that returns an array with two elements:


*/

import { useState } from "react";

const UseStateHook = () => {
  const [user, setUser] = useState({ name: '', age: 65 });

  const updateName = (name: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: name,
    }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => updateName('Mursalin')}>Update Name</button>
    </div>
  );
};

export default UseStateHook;
