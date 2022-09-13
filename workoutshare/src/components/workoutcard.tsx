import { Link, Navigate } from "react-router-dom"
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


interface Props{
  split: any,
  setSplitState: Function,
  setUsersInfo: Function
  
}

export const WorkoutCard: React.FunctionComponent<Props>=({split,setSplitState, setUsersInfo})=>{

  let navigate = useNavigate()
  
  const users = split.users
  const muscle = split.splitarea
  let arr: any = []


  const getInfo = async () =>{
    let res = await axios.all(users.map((endpoint: string) =>axios.get(endpoint)))
    setUsersInfo(res)
  }

const stateSetter = async (e:any)=>{
  e.preventDefault()
  setSplitState(split)
  getInfo()
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