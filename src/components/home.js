import React from 'react'
import '../App.css'
import Section from './Section';
import Data from '../data'

function Home() {
  return (
      <div className='container'>

      {Data.map(data => {
          return <Section title={data.title} desc={data.desc} class={data.class} lBtn={data.leftbtn} rBtn={data.rightbtn}  />
      }) }
          
      </div>
  )
}

export default Home;
