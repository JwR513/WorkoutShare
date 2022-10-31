
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'



interface Props{
  split: any,
  setSplitState: Function,
  setMuscles: Function,  
}

export const WorkoutCard: React.FunctionComponent<Props>=({split,setSplitState, setMuscles, })=>{

let navigate = useNavigate()


const stateSetter = async (e:any)=>{
  e.preventDefault()
  setSplitState(split)
  setMuscles(split.muscles)
  navigate(`/splits/${split.id}`)
}
  
  return(
    <div className="split-container">
      <form onClick={stateSetter} className='split-card'>
          <section >
            <div key ={split.id}>
              <p>{split.name}</p>
              <p>Number of Days: {split.muscles.length}</p>
              {/* <Link to='/mysplits'>{split.splitarea}</Link> */}
            </div>
          </section>
      </form>
    </div>
  )
}