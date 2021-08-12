import React,{useState} from "react";
import {Link} from "react-router-dom"
import "./Signup.css";
function Signup() {
    const [user, setuser] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpass, setconfirmpass] = useState('')

    const userRegister=(e)=>{
         e.preventDefault()
       if(password !== confirmpass) return alert('password do not match')
       console.log(user)
    }

  return (
    <div className="signup">
      <form onSubmit={userRegister}>
        <h4>SignUp</h4>

        <div className="form-floating ">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="username"
            required
            autoComplete="off"
            value={user}
            onChange={(e)=>setuser(e.target.value.trim())}
          />
          <label >User Name</label>
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

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingCPassword"
            placeholder="Confirm Password"
            required
            value={confirmpass}
            onChange={(e)=>setconfirmpass(e.target.value.trim())}
          />
          <label >Confirm Password</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-info ">
           SignUp
          </button>
        </div>
        <div className="d-flex justify-content-center">
        <p className='text-white'>Already Have an Account? </p> <Link to='/' className='text-dark'>SignIn</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
