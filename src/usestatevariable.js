import { useState } from "react";
export function UsestateHooks()
{
    
   // const[getvariablename,setvariablename]=useState()
   const [names,setNames]=useState();   //Deva 
   const  result=()=>
   {
         //deva
    alert(names+"Has Successfully added")


    }
    const change=(temp)=>
    {

        setNames(temp.target.value)

    }

    return(
        <>
        <input type="text" placeholder="Enter the name"name="{names}"onChange={change} />
        <button onClick={result}>Action</button>
        </>

    )
}