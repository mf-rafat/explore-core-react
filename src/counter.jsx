import { useState } from "react"


export default function counter(){

    const [count , setCount  ] = useState(0)
 
    const handleAdd = () => {
        const newCount = count + 1;
         setCount (newCount);
    }

    const countStyle ={
        border : '1px solid yellow',
        borderRadius: '10px',
        backgroundColor :'green',
        marginTop : '20px',
        padding:'20px',
        color:'white',
        textAlign:'center',
        
    }


    return(
        <div style={countStyle}>
            <h3>count number: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
} 