import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import PassRecovery from "./PassRecovery";
import Description from "./Description";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [userIsRegistered, register] = useState(true);

  function toogleLogin() {
    register(!userIsRegistered);
  }

  function handleUserChange(event) {
    const { name, value } = event.target;
    console.log(value);

    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitLogin(event) {
    console.log(user);
    event.preventDefault();
    // Add any further logic for login or registration here
  }

  return (
    <div className="login-container">
      <Description text="Organize yourself and share your ideas!" />
      <form onSubmit={submitLogin}>
        <Input
          name="username"
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={handleUserChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleUserChange}
        />
        {!userIsRegistered && (
          <Input
            name="password"
            type="password"
            placeholder="Confirm Password"
            value={user.password}
            onChange={handleUserChange}
          />
        )}
        <Button type="submit" text={userIsRegistered ? "Login" : "Register"} />
        {userIsRegistered && <PassRecovery />}
        <Button
          type="button"
          text={userIsRegistered ? "Sign up" : "or Login"}
          onClick={toogleLogin}
        />
      </form>
    </div>
  );
}

export default Login;
