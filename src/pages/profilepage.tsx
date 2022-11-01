import { useEffect, useState } from "react"
import axios from "axios"
import { Server } from "../components/globals"
import { updateProfile } from "../services/auth"


interface Props{
  logStatus: boolean,
  setUserInfo: Function,
  userInfo: any
}

export const Profile: React.FunctionComponent<Props> = ({userInfo, setUserInfo}):JSX.Element =>{

const updateForm = {
  confPass: '',
  password: ''
}


const [ updatedInfo, setUpdatedInfo] =useState(updateForm)

  let userId = localStorage.getItem('userId')


  const getUserInfo=async()=>{
    let res = await axios.get(`${Server}/api/user/wsplits/${userId}`)
    setUserInfo(res.data)
  }

const updatedProfile = async (e: any)=>{
  e.preventDefault()
  updateProfile(updatedInfo)
}

const handleChange = (e: any)=>{
  e.preventDefault()
  setUpdatedInfo({ ...updatedInfo , [e.target.name]: e.target.value})
}


  useEffect(()=>{
    if(userId){
    getUserInfo()
    }
  },[userId])



  const userInfoDis = ()=>{
    if(userInfo){
      return(
      <div>
        <h2>{userInfo.username}</h2>
        <form onSubmit={updatedProfile}>
          <input type="password" name="password" placeholder="New Password" onChange={handleChange} autoComplete='password'/>
          <input type="password" name="confPass" placeholder="Confirm Password" onChange={handleChange}  autoComplete='password'/>
          <button type="submit">Submit Changes</button>
        </form>

        {/* <button onClick={}>Delete Profile</button> */}
      </div>
      )
    }
  }
  

return (
<div>
  {userInfoDis()}
</div>
)
} 