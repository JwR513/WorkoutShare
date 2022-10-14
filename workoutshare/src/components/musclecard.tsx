import { useNavigate } from "react-router-dom"

interface props {
muscle:  any
}


export const MuscleCard: React.FunctionComponent<props> =({muscle})=>{
const navigate = useNavigate()

const navigator =()=>{

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