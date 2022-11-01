import { useState } from "react"
import { Navigate } from "react-router-dom"
import { RegisterUser} from "../services/auth"
import { useNavigate } from "react-router-dom"

export const RegisterPage =()=>{


 const navigate = useNavigate()

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
      await RegisterUser(formValues)
      setSuccess(true)
      navigate('/')
    }else{

    }
  }
  
  return(
    <div className="form-div">
      <form onSubmit={signUpCall}>
        <input type="text" placeholder="username" name="username" value={formValues.username} onChange={signUpFormVal} autoComplete="username"/>
        <input type="text" placeholder="email" name="email" value={formValues.email} onChange={signUpFormVal} autoComplete="email"/>
        <input type="password" placeholder="password" name="password" value={formValues.password}onChange={signUpFormVal} autoComplete='new-password'/>
        <input type="password" placeholder=" confirm password" name="confirmPassword"  autoComplete="new-password"
        onChange={confPasswordChange}/>
        <input type='submit'/>
      </form>
</div>

  )

}