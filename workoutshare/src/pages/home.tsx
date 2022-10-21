import axios from "axios"
import { useState, useEffect } from "react"
import { Server } from '../components/globals'
import {CheckSession, SignInUser } from "../services/auth"
import  { WorkoutCard } from '../components/workoutcard'


interface Props{
logStatus: boolean,
setLogStatus:Function,
setSplitState: Function,
setMuscles: Function,
deleted:any,
setDeleted: Function,
}



export const Home:  React.FunctionComponent<Props> = ({setLogStatus, logStatus ,setSplitState,setMuscles,deleted })=>{

  

const iniFormVal = {
  email: '',
  password: ''
}

const [formVal, setFormVal]= useState(iniFormVal)
const [splits, setSplits]= useState([])

const GetSplits = async () => {
  const res = await axios.get(`${Server}/api/split/`)
  setSplits(res.data)
}

const handleChange = (e: any)=>{
  e.preventDefault()
  setFormVal({...formVal, [e.target.name]: e.target.value})
}

const login = async(e: any) =>{
  e.preventDefault()
  await SignInUser(formVal)
  await setLogStatus(true)
  GetSplits()
}


useEffect(()=>{
  let token = localStorage.getItem('token')
    if(token){
    CheckSession()
    setLogStatus(true)
    GetSplits()
    }    
},[setLogStatus, deleted])

const logInStuff =
<div className="form-div">
  <form onSubmit={login} >
    <input type="text" placeholder="Email" name="email" autoComplete="email" onChange={handleChange}/>
    <input type="password" placeholder="Password" name="password" autoComplete="current-password" onChange={handleChange}/>
    <input type="submit"/>
  </form>
</div>

const splitsDisplay = 
<section className="split-card-container">
  <h3>Split Feed</h3>
  <div className="split-feed">
    {splits.map((split: any)=>(
    <div key={split.id}>
    <WorkoutCard split={split} setSplitState={setSplitState} setMuscles={setMuscles}
  />
    </div>
    ))}   
  </div>
</section>

return(
  <div className="home-page">
    {logStatus ? splitsDisplay : logInStuff}
  </div>
)
}