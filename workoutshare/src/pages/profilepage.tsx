import { useEffect, useState } from "react"
import axios from 'axios'
import { Server } from "../components/globals"

interface Props{
  logStatus: boolean,
  setLogStatus: Function,
  username: string
}

export const Profile: React.FunctionComponent<Props> = ({logStatus, username, setLogStatus}):JSX.Element =>{


//this feels like a super suboptimal way to do this but it was the easiest way I could think of
// may change later

// const getUser = async()=>{
//   let userId 
//   if(logStatus){

//     let res = await axios.get(`${Server}/users/`)
//     const users = res.data

//   users.forEach( (user: any) => {
//     if(user.username === username){
//       setCurrentUser({
//         username: user.username,
//         email: user.email,
//         id
//       })
//     }
//   });
// }
// let res = await axios.get(`${Server}/users/${userId}`)
// currentUser = res.data
// }



// useEffect(()=>{
  
// },[])

const loggedIn = 
<div>
  
</div>

  return(
    <div>
      <h1>This will be profile page</h1>
    </div>
  )
} 
