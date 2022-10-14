import { useNavigate } from "react-router-dom"

interface props {
muscle:  any,
setMuscleDetail: Function
}


export const MuscleCard: React.FunctionComponent<props> =({muscle, setMuscleDetail})=>{
const navigate = useNavigate()

const navigator =()=>{
setMuscleDetail(muscle)
navigate(`/muscleDetail/${muscle.id}`)
}


  return (
  <form onClick={navigator} className='muscle-card'>
    <div>
      <p>{muscle.id}</p>
      <p>{muscle.name}</p>
    </div>
  </form>
  )

}