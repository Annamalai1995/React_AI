// import { useState } from "react"

import { useState } from "react"


     
 export let UseStateCount=()=>
    {
        const[count,setCount]=useState(0)
        const count1=()=>
        {
            setCount(count+200)
        }
        const count2=()=>
        {
            setCount(0)

        }
        return(
            <>
            <button onClick={count1} onDoubleClick={count2}>Click</button>
            <span>{count}</span>
            </>
        )
    }    

    
