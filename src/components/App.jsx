import React from "react";
import Login from "./Login";

var isRegistered = false;

function App() {
  return (
    <div className="container">
      {isRegistered ? <Login flag={isRegistered} /> : <Login flag={isRegistered} />}
    </div>
  );
}

export default App;
