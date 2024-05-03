import { useState } from 'react'

const Button=({onClick,text})=> <button onClick={onClick}>{text}</button>
const StatisticsLine=({text,value})=>
 <tr>
  <td>{text}</td> 
  <td> {value}</td>
  </tr>


const Statistics=({good,neutral,bad})=>{
  const all=good+bad+neutral 
  const average=(good-bad)/all
  const positive=((good/all)*100)+'%'
  if (all>0){
  return(
    <>
      <h2>statistics</h2>
      <table>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={all}/>
      <StatisticsLine text="average" value={average}/>
      <StatisticsLine text="positive" value={positive}/>
      </table>
    </>
  )}
  return(
  <p>No feedback given</p>
  )
}


const App=()=> {
  const[good,setGood]=useState(0)
  const[neutral,setNeutral]=useState(0)
  const[bad,setBad]=useState(0)

  const incrementHandler=(increase,setIncrease)=>()=>setIncrease(increase+1)
  
  return(
    <>
      <h1>give feedback</h1>
      <Button onClick={incrementHandler(good,setGood)} text="good"/>
      <Button onClick={incrementHandler(neutral,setNeutral)} text="neutral"/>
      <Button onClick={incrementHandler(bad,setBad)} text="bad"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </>
  )



 

  }

 
 
      
      
   
     
       
   

export default App
