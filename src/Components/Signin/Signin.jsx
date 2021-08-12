import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Signin.css";
function Signin() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const userlogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signin">
      <form onSubmit={userlogin}>
        <h4>SignIn</h4>
        <div className="form-floating ">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="username"
            required
            autoComplete="off"
            value={user}
            onChange={(e) => setuser(e.target.value.trim())}
          />
          <label>User Name</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            
            value={password}
            onChange={(e)=>setpassword(e.target.value.trim())}
          />
          <label >Password</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-info ">
            SignIn
          </button>
        </div>
        <div className="d-flex justify-content-center">
        <p className='text-white'>Don't Have an Account? </p> <Link to='/signup' className='text-dark'>SignUp</Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
