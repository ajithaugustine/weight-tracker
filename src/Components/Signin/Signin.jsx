import React from "react";
import {useHistory} from "react-router-dom"
import firebase from "../../Firebase/Firebase";
import "./Signin.css";
function Signin() {
const history = useHistory()
  const userlogin = (e) => {
      e.preventDefault()
      firebase.auth().signInAnonymously()
      .then((user) => {
        console.log(user)
        history.push('/home')
      })
      .catch((error) => {     
       console.log(error.meassage)
      });
  };



  return (
    <div className="signin">
      <form onSubmit={userlogin}>
        <h4>SignIn </h4>    
        <div className="d-flex justify-content-center">
          <button type='submit' className="btn btn-info ">
            SignIn
          </button>
        </div>  
      </form>
    </div>
  );
}

export default Signin;
