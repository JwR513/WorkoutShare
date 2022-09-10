import axios from "axios"
import { useState, useEffect } from "react"
import { Server } from '../components/globals'
import {SignInUser } from "../services/auth"
import  { WorkoutCard } from '../components/workoutcard'




interface Props{
logStatus: boolean,
setLogStatus:Function,
setUsername: Function
}


export const Home:  React.FunctionComponent<Props> = ({setLogStatus, setUsername, logStatus})=>{


const iniFormVal = {
  username: '',
  password: ''
}

const [formVal, setFormVal]= useState(iniFormVal)
const [splits, setSplits]= useState([])


const GetSplits = async () => {
  const res = await axios.get(`${Server}/splits/`)
  setSplits(res.data)
}

const handleChange = (e: any)=>{
  e.preventDefault()
  setFormVal({...formVal, [e.target.name]: e.target.value})
}

const login = async(e: any) =>{
  e.preventDefault()
  await SignInUser(formVal)
  setUsername(formVal.username)
  
  setLogStatus(true)
  GetSplits()
}


useEffect(()=>{
    let token =localStorage.getItem('token')
    if(token){
    setLogStatus(true)
    }
    GetSplits()
},[])


const logInStuff =
<div className="form-div">
  <form onSubmit={login} >
    <input type="text" placeholder="Username" name="username" autoComplete="username" onChange={handleChange}/>
    <input type="password" placeholder="Password" name="password" autoComplete="current-password" onChange={handleChange}/>
    <input type="submit"/>
  </form>
</div>


const splitsDisplay = 
<div>
  <h1>Split Feed</h1>
  <WorkoutCard splits={splits}/>
</div>

return(
  <div className="home-page">
    {logStatus ? splitsDisplay : logInStuff}
  </div>
)
}