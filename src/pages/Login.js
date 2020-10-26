import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userContext = useContext(UserContext);
  const history = useHistory();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      userContext.setIsAuth(true);
      history.push("/shopping");
    } catch (err) {
      if (err.response) {
        setErrorLogin(true);
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div className="container mt-5 w-50">
      {errorLogin && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={onEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={onPasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
