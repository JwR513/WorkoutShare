import {  useState } from "react";
import { MuscleCard } from "./musclecard";
import { updateSplit,createSplitMuscle,AddMuscle, DeleteSplitAndAssociation } from "../services/auth";
import { useNavigate, useParams } from "react-router-dom";


interface Props{
  splitState: any,
  muscles: any,
  setMuscleDetail: Function,
  setDeleted: Function,
}


export const SplitDetail: React.FunctionComponent<Props>=({splitState, muscles, setMuscleDetail, setDeleted})=>{

let navigate = useNavigate()

let { splitId }:any = useParams()
let muscleId = localStorage.getItem('muscleId')


const [ editing, setEdit ]= useState(false)
const [newName, setNewName]=useState('')
const [muscleState,setMuscleState]=useState({
  name: '',
  porp: ''
})



const onEdit =()=>{
  setEdit(true)
}

const handleChange=(e: any)=>{
  e.preventDefault()
  setNewName(e.target.value)
}

const submitHandler= async(e: any)=>{
  updateSplit(newName)
  navigate(`/`)
}

const addMuscleSubmitHandler =(e: any)=>{
e.preventDefault()
AddMuscle(muscleState)
createSplitMuscle({splitId:splitId,
muscleId: muscleId})
setDeleted(true)
navigate('/')
}

const handleMuscleChange=(e: any)=>{
setMuscleState({...muscleState,[e.target.name]: e.target.value})
}

const deleteSplit = ()=>{
    DeleteSplitAndAssociation(splitId)
    setDeleted(true)
    navigate('/')
}

  const splitNotFound =()=>{
    if(splitState.id !== parseInt(splitId)){
      return(
        <h1>
          Split Not Found
        </h1>
      )
    }else{
      return (
        <div>
          <h2>{splitState.name}</h2>
          <button onClick={onEdit}>Edit</button>
          <ul>
            {muscles.map((muscle: any)=>(
          <div key={muscle.id}>
            {<MuscleCard muscle={muscle}  setMuscleDetail={setMuscleDetail} />}
          </div>  
            ))}
          </ul>
              <h4>Add a Day </h4>
              <form onSubmit={addMuscleSubmitHandler}>
                <input type="text"  name="name" onChange={handleMuscleChange} placeholder="Name"/>
                <input type="text" name="porp" onChange={handleMuscleChange} placeholder="Push or Pull"/>
                <button type="submit">Add</button>
              </form>
          <div> 

          </div>
        </div>
      )
    }
  }
  const notEdit = 
  <div>{splitNotFound()}</div>

  const edit =
  <div>
    <h3>Current Name: {splitState.name}</h3>
    <form onSubmit={submitHandler}>
      <input type='text' placeholder="New Split Name" name="name" onChange={handleChange}/>
      <button type="submit" >Submit Changes</button>
    </form>
    <button onClick={deleteSplit}>Delete Split</button>
  </div>
  

  return(
    <div>
    {editing ? edit : notEdit}
    {/* {edit} */}
    </div>
  )

}