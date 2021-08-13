import firebase from "../Firebase/Firebase";

 
// data fetch

export const fetchdata = (userid)=>{
try {
  return  firebase.firestore().collection('Weight').where('userid','==',userid).get()
  .then((snapshot)=>{
   const alldata= snapshot.docs.map((weight)=>{
      return{...weight.data(),
        id:weight.id} 
    })
         alldata.sort((a,b)=>b.Timestamp-a.Timestamp)
          return alldata

  })


} catch (error) {
    console.log(error.message)
}
 
  
  }
  
    
