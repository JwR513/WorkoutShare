
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MuscleCard } from "./musclecard";
import { MuscleDetail } from "./muscleDetail";




interface Props{
  splitState: any,
  muscles: any,
  setMuscleDetail: Function,

}


export const SplitDetail: React.FunctionComponent<Props>=({splitState, muscles, setMuscleDetail})=>{


let { splitId }:any = useParams()

useEffect(()=>{
},[splitState])

  const splitNotFound =()=>{
    if(splitState.id != parseInt(splitId)){
      return(
        <div>
          Split Not Found
        </div>
      )
    }else{
      return (
        <div>
          <h1>{splitState.name}</h1>
          <p>{splitState.splitarea}</p>
          <ul>
            {muscles.map((muscle: any)=>(
          <div key={muscle.id}>
            {<MuscleCard muscle={muscle}  setMuscleDetail={setMuscleDetail}/>}
          </div>  
        ))}
          </ul>
        </div>
      )
    }
  }

  return(
    <div>
      <h1>{splitNotFound()}</h1>
    </div>
  )

}