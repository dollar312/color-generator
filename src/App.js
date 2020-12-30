import React, { useState , useEffect} from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] =  useState('')
  const [error, setError] = useState(false)
  const [list,   setList] = useState(new Values('#f15025').all(10))
  const handleSummit = (e)=>{
    e.preventDefault()
    try{
      let colorToLock = new Values(color).all(10)
      setList(colorToLock)
      setError(false)
    }catch(err){
      setColor("#f15025")
      setError(true)
    }
    
  }
  return (
    <>
    <container className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSummit}>
        <input type="text" value={color} onChange={(e)=>{
          setColor(e.target.value)
        }} placeholder="#f15025" className={error === true && "error"}/>
        <button className="btn" type="submit">Submit</button>
      </form>
    </container>
    <section className="colors">
      
     {list.map((color,index)=>{
       return <SingleColor key={index} {...color} index={index}/>
     })}
       </section>
    </>
  )
}

export default App
