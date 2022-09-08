import { stringify } from "querystring"
import { useState, useEffect } from "react"


interface Props{
logStatus: boolean,
setLogStatus:Function,
}


export const Home:  React.FunctionComponent<Props> = (props)=>{

interface form {
    username: String,
    password: String
}

const iniFormVal: form = {
  username: '',
  password: ''
}


const [formVal, setFormVal]= useState(iniFormVal)

const login = (e: any) =>{
  e.preventDefault()


}

const handleChange = (e: any)=>{
  e.preventDefault()
  setFormVal({...formVal, [e.target.name]: e.target.value})
  console.log(formVal)
}

const logInStuff =
<div className="form-div">
  <form onSubmit={login} >
    <input type="text" placeholder="Username" name="username" autoComplete="username" onChange={handleChange}/>
    <input type="password" placeholder="Password" name="password" autoComplete="current-password" onChange={handleChange}/>
    <input type="submit"/>
  </form>
</div>

return(
  <div className="home-page">
    {props.logStatus ? <p>logged in</p> : logInStuff}
  </div>
)
}