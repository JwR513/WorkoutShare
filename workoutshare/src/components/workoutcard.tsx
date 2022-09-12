import { Link, Navigate } from "react-router-dom"
import { useNavigate} from 'react-router-dom'


interface Props{
  split: any,
  setSplitState: Function,
  
}

export const WorkoutCard: React.FunctionComponent<Props>=({split,setSplitState})=>{

  let navigate = useNavigate()

const stateSetter =(e:any)=>{
  e.preventDefault()
  setSplitState(split)
  navigate(`/splits/${split.id}`)
}
  
  return(
    <div className="split-container">
    <form onSubmit={stateSetter}>
      <button type='submit'>
        <section >
          <div key ={split.id}>
            <p>{split.id}</p>
            <p>{split.name}</p>
            <p>Created by: {split.owner}</p>
            {/* <Link to='/mysplits'>{split.splitarea}</Link> */}
          </div>
        </section>
      </button>
    </form>
    </div>
  )
}