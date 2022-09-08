import axios from "axios"
import { useState } from "react"
import { Server } from "../components/globals"
import { RegisterPlayer } from "../services/auth"


export const RegisterPage =()=>{

const[success, setSuccess]=useState(false)

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
  }
  const signUpCall =async(e: any)=>{
    e.preventDefault()
    if(conf ===  formValues.password){
      await RegisterPlayer(formValues)
      setSuccess(true)
    }else{

    }
  }
  
  return(
    <div className="form-div">
      <form onSubmit={signUpCall}>
        <input type="text" placeholder="username" name="username" value={formValues.username} onChange={signUpFormVal} autoComplete="username"/>
        <input type="text" placeholder="email" name="email" value={formValues.email} onChange={signUpFormVal}/>
        <input type="password" placeholder="password" name="password" value={formValues.password}onChange={signUpFormVal} autoComplete='new-password'/>
        <input type="password" placeholder=" confirm password" name="confirmPassword" 
        onChange={confPasswordChange}/>
        <input type='submit'/>
      </form>
</div>

  )

}