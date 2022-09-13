import axios from 'axios'
import { useState } from 'react'
import { CreateSplit } from '../services/auth'

interface Props{
  username: string
}

export const CreateSplitPage: React.FunctionComponent<Props> =({username})=>{

const[newSplit , setNewSplit ] = useState({})

const SubmitHandler = async()=>{
  CreateSplit()
}

const newSplitForm = (e: any) =>{
  setNewSplit({...newSplit, [e.target.name]: e.target.value }) 
}



  return(
    <div>
    <form onSubmit={SubmitHandler}>
      <input type="text" name="name" onChange={newSplitForm} />
      <select name="muscle" id="0"  onChange={newSplitForm}>
        <option value=""></option>
      </select>
      <select name="users" id="0">
        <option value=""></option>
      </select>
    </form>
    
    </div>
  )
}