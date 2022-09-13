import axios from 'axios'
import { useState } from 'react'
import { CreateSplit } from '../services/auth'

interface Props{
  username: string,
  muscleInfo: any
}

export const CreateSplitPage: React.FunctionComponent<Props> =({username, muscleInfo})=>{

const[newSplit , setNewSplit ] = useState({})

const SubmitHandler = async()=>{
  CreateSplit()
}

const newSplitForm = (e: any) =>{
  setNewSplit({...newSplit, [e.target.name]: e.target.value }) 
  console.log(newSplit)
}





  return(
    <div>
    <form onSubmit={SubmitHandler}>
      <input type="text" name="name" onChange={newSplitForm} placeholder="Split Name"/>
      <select name="muscle" onChange={newSplitForm}>
        {muscleInfo.map((muscle:any)=>(
          <option  key={muscle.id} value={muscle.id}>{muscle.name}</option>
        ))}
      </select>
      <select name="users" id="0" onChange={newSplitForm}>
        
      </select>
    </form>
    
    </div>
  )
}