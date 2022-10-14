import React, { useEffect } from "react"

interface props{
muscleDetail: any
}
export const MuscleDetail: React.FunctionComponent<props> = ({muscleDetail})=>{

useEffect(()=>{
  console.log(muscleDetail)
},[])

  return (
    <div>
      <p>{muscleDetail.name}</p>
    </div>
  )

}