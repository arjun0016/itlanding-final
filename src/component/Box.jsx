import React from 'react'
import "../styles/box.css"

const Box = ({title,desc,src}) => {
  return (
    <div className='box-content'>
        
        <span>
          {src}
        </span>
        <h1>{title}</h1>
        <p>{desc}</p>      
    </div>
  )
}

export default Box
