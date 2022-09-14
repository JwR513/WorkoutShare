import axios from 'axios'
import { useState } from 'react'
import { CreateSplit } from '../services/auth'

interface Props{
  username: string,
  muscleInfo: any, 
  splitUserInfo: any
}

export const CreateSplitPage: React.FunctionComponent<Props> =({username, muscleInfo, splitUserInfo})=>{

const[newSplit , setNewSplit ] = useState({})

const SubmitHandler = async()=>{
  setNewSplit({...newSplit, owner: username})
  CreateSplit()
}

const newSplitForm = (e: any) =>{
  setNewSplit({...newSplit, [e.target.name]: e.target.value }) 
  
}





  return(
    <div>
    <form onSubmit={SubmitHandler}>
      <input type="text" name="name" onChange={newSplitForm} placeholder="Split Name"/>
      <select name="muscle" defaultValue='0' onChange={newSplitForm}>
        {muscleInfo.map((muscle:any)=>(
          <option  key={muscle.id} value={muscle.id}>{muscle.name}</option>
        ))}
      </select>
    </form>
    </div>
  )
}