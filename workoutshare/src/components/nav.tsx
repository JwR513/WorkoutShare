import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

interface Props{
  logStatus: boolean,
  setUsername: Function,
  setLogStatus: Function,
}


export const Nav: React.FunctionComponent<Props> =({setUsername, logStatus, setLogStatus})=>{

const [clicked, setclicked]= useState(false)

let navigate =useNavigate()

  const handleClick = ()=>{
    if(clicked){
      setclicked(false)
    }else{
      setclicked(true)
    }
  }

  const logOut =()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setUsername('')
    setLogStatus(false)
    navigate('/')
  }

  const logged =
  <div className="nav-contents">  
    <nav className="nav-bar">
      <Link to='/'>Home</Link>
      <button onClick={handleClick}>Profile</button>
      </nav>
      {clicked ?  <div className="terinary-div">
          <Link to='/profile'>My Profile</Link>
          <Link to='/mysplits'>My splits</Link>
          <button onClick={logOut}>Log Out</button>
        </div> : <p></p> }
      
  </div>   


  const loggedOut = 
  <nav className="nav-bar">
    <Link to='/'>Home</Link>
    <Link to='/register'>Sign Up</Link>
  </nav>
  

  return(
  <div>
    {logStatus? logged : loggedOut}
  </div>
  )
}