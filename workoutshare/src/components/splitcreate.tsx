import { useState } from 'react'
import { createSplit } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import { createUserSplit } from '../services/auth'


interface Props{
}

export const CreateSplitPage: React.FunctionComponent<Props> =()=>{
  const nav = useNavigate()

const[splitName , setSplitName ] = useState({})

const nameHandler = (e: any)=>{
  e.preventDefault()
  setSplitName({[e.target.name]:e.target.value})
}



const CreateSplit = async (e: any) => {
  e.preventDefault()
  await createSplit(splitName)
  let splitId = localStorage.getItem('splitId')
  let userId =localStorage.getItem('userId')
  const body ={
    userId: userId,
    splitId: splitId
  }
  createUserSplit(body)
  nav('/')
}

  return(
    <div>
    <form onSubmit={CreateSplit}>
      <input type="text" name="name" onChange={nameHandler} placeholder="Split Name"/>
      <button type='submit'>Submit</button>

    </form>
    </div>
  )
}