import React, { useState } from "react";

function App() {

  const [isMouseOver, setMouseOver] = useState(false);

  function Hover() {
    setMouseOver(true);
  }
  function MouseOut() {
    setMouseOver(false);
  }

  const [heading, newHeading] = useState("")
  const [heading1, newHeading1] = useState("")

  function setHeading(event) {
    newHeading(event.target.value)
  }
  function setHeading1(event) {
    newHeading1(event.target.value)
  }

  return (
    <div className="container">
      <h1>Hello, {heading +" "+ heading1}</h1>

      <form className="form">

        <input onChange={setHeading} type="text" placeholder="Username" />
        <input onChange={setHeading1} type="text" placeholder="Lastname" />
        <input type="mail" placeholder="Email" />

        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          type="submit"
          onMouseOver={Hover}
          onMouseOut={MouseOut}>Submit</button>

      </form>
    </div>
  );
}
export default App;
