import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface props{
muscleDetail: any,
splitState: any
}
export const MuscleDetail: React.FunctionComponent<props> = ({muscleDetail, splitState})=>{

  let navigate = useNavigate()

  return (
    <div className="split-deets">
      <div >
        <p>{muscleDetail.name}</p>
        <p>{muscleDetail.porp}</p>
      </div>
      <button onClick={()=>{navigate(`/splits/${splitState.id}`)}}>
        <h3>{splitState.name}</h3>
        <p>{splitState.id}</p>
      </button>
    </div>
  )

}