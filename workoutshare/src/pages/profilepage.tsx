import { useState } from "react"
import axios from 'axios'

interface Props{
  logStatus: boolean,
  setLogStatus: Function
}

export const Profile: React.FunctionComponent<Props> = (props):JSX.Element =>{

const iniSignup = {
  username: String,
  email: String,
  password: String,
}
const[signUp, setSignUp] = useState(iniSignup)

const [formValues, setFormValues] = useState({
  username: '',
  email: '',
  password:'',
})
const [conf, setConf] =useState('')

const signUpFormVal = (e: any) =>{
  setFormValues({...formValues, [e.target.name]: e.target.value }) 
}
const confPasswordChange =(e: any)=>{
  setConf(e.target.value)
  console.log(conf)
}
const signUpCall =async(e: any)=>{
  e.preventDefault()
  if(conf ==  formValues.password){
    const res = await axios.post('http://localhost:8000/api/signup/', formValues)
    console.log(res)
  }
}

const signUpform = <div>
  <form onSubmit={signUpCall}>
    <input type="text" placeholder="username" name="username" value={formValues.username} onChange={signUpFormVal}/>
    <input type="text" placeholder="email" name="email" value={formValues.email} onChange={signUpFormVal}/>
    <input type="text" placeholder="password" name="password" value={formValues.password}onChange={signUpFormVal}/>
    <input type="text" placeholder=" confirm password" name="confirmPassword" 
    onChange={confPasswordChange}/>
    <input type='submit'/>
  </form>
</div>

  return(
    <div>
      <h1>This will be profile page</h1>
      {props.logStatus? <p>logged in</p> : signUpform}
    </div>
  )
} 
