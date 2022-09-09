import { Link } from "react-router-dom"

interface Props{
  splits: any
}


export const WorkoutCard: React.FunctionComponent<Props>=({splits})=>{

  return(
    <div>
    {splits.map((split: any)=>(
    <section key={split.id}>
      <div key ={split.id}>
        <p>{split.name}</p>
        <p>Created by: {split.owner}</p>
        {/* <Link to='/mysplits'>{split.splitarea}</Link> */}
      </div>
    </section>
    ))}
    </div>
  )
}