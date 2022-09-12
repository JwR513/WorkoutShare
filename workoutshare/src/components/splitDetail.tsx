import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { TupleType, TupleTypeNode } from "typescript";


interface Props{
  splitState: any
}


export const SplitDetail: React.FunctionComponent<Props>=({splitState})=>{
let { splitId }:any = useParams()
const [muscles, setMuscles]= useState([])


const users = splitState.users
const muscle = splitState.splitarea
let arr: any = []




const getInfo = async () =>{
  let res = await axios.all(users.map((endpoint: string) =>axios.get(endpoint)))
  res.forEach((response: any)=>{
    arr.push(response.data)
  })
  let names :any= []
  arr.forEach((element:any) => {
    names.push(element.username)
  });

}

useEffect(()=>{
  console.log(splitState)
  getInfo()
  },[])



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
          <h3>Author: {splitState.owner}</h3>
          <p>{splitState.splitarea}</p>
          <div>
            {}
          </div>
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