import { useEffect, useState } from "react"
import axios from 'axios'
import { Server } from "../components/globals"

interface Props{
  logStatus: boolean,
  setLogStatus: Function,
  username: string
}

export const Profile: React.FunctionComponent<Props> = ({logStatus, username, setLogStatus}):JSX.Element =>{
let currentUser = {}

const getUser = async()=>{
  if(logStatus){
  let res = await axios.get(`${Server}/users/`)
  const users = res.data
  users.forEach( (user: any) => {
    if(user.username === username){
      currentUser = user
    }
  });

  console.log(res.data)
  console.log(username)
  console.log(currentUser)
}
}

useEffect(()=>{
  getUser()
  
},[])

const loggedIn = 
<div>
  <h1></h1>
</div>

  return(
    <div>
      <h1>This will be profile page</h1>
      
    </div>
  )
} 
