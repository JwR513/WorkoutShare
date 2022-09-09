import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

interface Props{
  logStatus: boolean,
  setUsername: Function,
}


export const Nav: React.FunctionComponent<Props> =({setUsername, logStatus})=>{

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
    navigate('/')
  }

  return(
    <div className="nav-contents">
    <nav className="nav-bar">
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <button onClick={handleClick}></button>
    </nav>
    {clicked ?  <div className="terinary-div">
        <Link to='/profile'>My Profile</Link>
        <Link to='/mysplits'>My splits</Link>
        <button onClick={logOut}>Log Out</button>
      </div> : <p></p> }
    </div>
  )
}