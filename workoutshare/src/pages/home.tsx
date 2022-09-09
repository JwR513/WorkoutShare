import axios from "axios"
import { useState, useEffect } from "react"
import { Server } from '../components/globals'
import {SignInUser } from "../services/auth"



interface Props{
logStatus: boolean,
setLogStatus:Function,
}


export const Home:  React.FunctionComponent<Props> = (props)=>{


const iniFormVal = {
  username: '',
  password: ''
}

const [formVal, setFormVal]= useState(iniFormVal)

const handleChange = (e: any)=>{
  e.preventDefault()
  setFormVal({...formVal, [e.target.name]: e.target.value})
}

const login = async(e: any) =>{
  e.preventDefault()
  const res = await SignInUser(formVal)
  props.setLogStatus(true)
  
}

const logInStuff =
<div className="form-div">
  <form onSubmit={login} >
    <input type="text" placeholder="Username" name="username" autoComplete="username" onChange={handleChange}/>
    <input type="password" placeholder="Password" name="password" autoComplete="current-password" onChange={handleChange}/>
    <input type="submit"/>
  </form>
</div>


const splits = <div></div>

return(
  <div className="home-page">
    {props.logStatus ? <p>logged in</p> : logInStuff}
  </div>
)
}