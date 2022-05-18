import React from 'react'
import  Fade  from 'react-reveal/Fade'

function Section(props) {
  return (
    <div className={props.class}>
    <Fade bottom>
    <div className="itemText">
         <h1>{props.title}</h1>
         <p>{props.desc}</p>
     </div>
    </Fade>
   
  <Fade bottom>
  <div className="buttonWrap">
         <button className='left'>Custom</button>
         {props.rBtn ?  <button className='right'>{props.rBtn}</button> : null}
        
         <div className="downArrow">
     </div>
     </div>
  </Fade>
     

    
    </div>
  )
}

export default Section
