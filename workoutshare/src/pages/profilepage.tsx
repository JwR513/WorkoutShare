import { useState } from "react"
import axios from 'axios'

interface Props{
  logStatus: boolean,
  setLogStatus: Function
}

export const Profile: React.FunctionComponent<Props> = (props):JSX.Element =>{

  return(
    <div>
      <h1>This will be profile page</h1>
      
    </div>
  )
} 
