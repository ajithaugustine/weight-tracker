import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../Firebase/Firebase";
import {fetchdata} from '../../Services/Services'
import "./Home.css";

function Home() {

    const [weight, setweight] = useState('')
    const [userid, setuserid] = useState('')
    const [data, setdata] = useState([])
     const date = new Date()
  const history = useHistory();

  useEffect(() => {
    const userauth=async()=>{
     await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          setuserid(uid)
          fetchdata(uid).then((res)=>{
           return setdata(res)
          })
          
        } else {
          console.log('unauthorized')
          return history.push("/");
        }});
    }

  userauth()
    
  }, []);

    //  logout
    const signout = () => {
      firebase
        .auth()
        .signOut().then(()=>[
         history.push('/')
         
        ])
      
    };


  const submitData = (e) => {
    e.preventDefault();
//    sending data

    firebase.firestore().collection('Weight').add({
        userid,
        weight,
        CreatedAt:date.toLocaleString(),
        Timestamp:date.getTime()

    }).then(()=>{ 
      fetchdata(userid).then((res)=>{
        setdata(res)
        console.log(res)
      })
   
    }).catch((err)=>console.log(err.message))
    
  };
    // delete data....
    const deletedata=(id)=>{
      firebase.firestore().collection('Weight').doc(id).delete().then(()=>{
         
        fetchdata(userid).then((res)=>{
          setdata(res)
          console.log(res)
        })
       
      }).catch((err)=>{
        console.log(err.message)
      })
    }


    return (
      <div>
        <div className="logout">
        <i className="fas fa-sign-out-alt" onClick={signout}></i>  
        </div>
      <div className="home">
        <form  onSubmit={submitData}>
          <h5>Weight Tracker</h5>
          <div className="form-floating ">
          <input
            type="number"
            className="form-control"
            required
            autoComplete="off"
            value={weight}
            onChange={(e)=>setweight(e.target.value)}
          />
          <label >Weight(Kg)</label>
        </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-info mt-3">
              Submit
            </button>
          </div>
        </form>

       {/* listing data */}

        <div className="list">

           {data? <ul>
                    {
                        data.map((item,index)=>{
                            return <li key={index}>
                    <span>{item.weight}</span>
                    <i className="fas fa-trash delete" onClick={()=>deletedata(item.id)} ></i>
                    </li>
                        })
                    }
                </ul>:<h1></h1>}
        </div>
      </div>
    </div>
  );
}

export default Home;
