//React Hook = special function that allows functional components
// to use React features without writing class Components.
// (useState, useEffect, useContext, useReduce, useCallback, and more...)

// useState() = A react hook that allows the creation of a stateful variable
// And a setter function to update its value in the virtual DOM.
// [name, setName]
import { useState } from "react";

function UseState() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("SpongeBob");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>
  );
}

export default UseState;
