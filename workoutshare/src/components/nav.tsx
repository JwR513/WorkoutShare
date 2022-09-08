import { Link } from "react-router-dom"
import { useState } from "react"
export const Nav =()=>{

const [clicked, setclicked]= useState(false)

  const handleClick = ()=>{
    if(clicked){
      setclicked(false)
    }else{
      setclicked(true)
    }
  }
  return(
    <div className="nav-contents">
    <nav className="nav-bar">
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <button onClick={handleClick}>a</button>
    </nav>
    {clicked ?  <div className="terinary-div">
        <Link to='/profile'>My Profile</Link>
        <Link to='/mysplits'>My splits</Link>
      </div> : <p></p> }
    </div>
  )
}