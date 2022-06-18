import React, { useState } from "react";
import LoginForm from "./LoginForm";
import   "./App.css"
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin@143",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");

    }
  };
  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      <h1>This is Login Page</h1>
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// function App() {
//   const adminUser = {
//     email: "admin@admin.com",
//     password: "admin@143"
//   }
//   const [user, setUser] = useState({name: "", email: ""})
//   const [error, setError] = useState("");
//   const Login = details => {
//     console.log(details);
//   }
//   return <div className="App">

//   </div>;
// }

// export default App;
