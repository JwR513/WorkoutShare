import axios from "axios"
import { useEffect, useState } from "react"
import { Server} from '../components/globals'
interface props {
  logStatus: boolean
}

//work in progress. Will work on this page more once finished with the rest of the project
export const PersonalSplits: React.FunctionComponent<props> =({logStatus})=>{

  let userId = localStorage.getItem('userId')

  const [splits, setSplits] = useState()

  // const getMySplits = async()=>{
  //   let res = await axios.get(`${Server}/api/user/wsplits/${userId}`)
  //   setSplits(res.data.splits)
  //   console.log(splits)
  // }


  useEffect(()=>{   
    // getMySplits()
    // getMySplits()
  },[logStatus])

//   const splitsPres =
//   <div className="split-feed">
//     {splits.map((split: any)=>(
//     <div key={split.id}>
//     <p>{split.name}</p>
//     </div>
//     ))}   
// </div>
    
  

  return(
    <div>
      {/* {splits ? splitsPres : <p>No splits Present</p>} */}
    </div>
  )
}