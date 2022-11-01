import axios from "axios"
import { useState, useEffect } from "react"
import { Server } from '../components/globals'
import {CheckSession, SignInUser } from "../services/auth"
import  { WorkoutCard } from '../components/workoutcard'


interface Props{
logStatus: boolean,
deleted:any,
splits: any,
setLogStatus:Function,
setSplitState: Function,
setMuscles: Function,
setDeleted: Function,
GetSplits: Function,
}



export const Home:  React.FunctionComponent<Props> = ({setLogStatus, logStatus ,setSplitState,setMuscles,deleted, splits,GetSplits})=>{

  

const iniFormVal = {
  email: '',
  password: ''
}

const [formVal, setFormVal]= useState(iniFormVal)


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
},[setLogStatus, deleted, splits])

const logInStuff =
<div className="form-div">
  <h3>Welcome To WorkoutShare</h3>
  <h4>Login below or navigate to the signup page to create a new account</h4>
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