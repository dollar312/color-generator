import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb , weight , index, hexColor}) => {
  const [alert, setAlert]= useState(false)
  useEffect(() => {
   const setTime = setTimeout(() => {
     setAlert(false)
   }, 3000);
   return () => clearTimeout(setTime)
  }, [alert])
  const bcg = rgb.join(",")
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}
  onClick={()=>{
    setAlert(true)
    navigator.clipboard.writeText(rgbToHex(...rgb))
  }}>
   <p className="precent-value">{weight} %</p>
   <p className="color-value">{rgbToHex(...rgb)}</p>
   {alert && <p className="alert">Copied to ClipBoard</p>}
   </article>
}

export default SingleColor
