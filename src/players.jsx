import { useState } from "react"

export default function (){

 let [runs ,setRuns] =useState(0)

const handleSingle  = () =>{
         const updateRun = runs+1;
         setRuns (updateRun);
}

const handleSix = () =>{
    const updateRun = runs + 6 ;
    setRuns (updateRun);
}

const handleFour =() =>{
    const updateRun = runs + 4 ;
    setRuns(updateRun);
}


    return(
        <div>

            <h2>set a players </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum, quibusdam et aliquid, voluptatum pariatur harum fugiat deleniti nostrum dolores nisi sapiente fuga, necessitatibus voluptate? Saepe recusandae adipisci possimus tempore?</p>
            <h1>score:{runs}</h1>

            {
                runs > 50 &&  <p> you gain hufcensure</p>
            }
            <button onClick={handleSingle}>singles </button>
            <button onClick={handleFour}>four  </button>
            <button onClick={handleSix}> six </button>
        </div>
    )
}