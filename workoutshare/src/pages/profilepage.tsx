import { useEffect, useState } from "react"
import axios from "axios"
import { Server } from "../components/globals"
import { userInfo } from "os"

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
    console.log(res.data)
  }

const updateProfile = async (e: any)=>{
  e.preventDefault()
  if(updatedInfo.confPass === updatedInfo.password){
      await axios.put(`${Server}/api/user/passUpdate/${userId}`, updatedInfo)
      console.log('password changed')
  }else{
    console.log('error passwords no matchie')
  }
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
        <form onSubmit={updateProfile}>
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