import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { TupleType, TupleTypeNode } from "typescript";


interface Props{
  splitState: any,
  userInfo: any,
}


export const SplitDetail: React.FunctionComponent<Props>=({splitState, userInfo})=>{


let { splitId }:any = useParams()

useEffect(()=>{

},[splitState])

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