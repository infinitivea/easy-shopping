import React from "react";

function Register() {
  return (
    <div className="container mt-5 w-50">
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
