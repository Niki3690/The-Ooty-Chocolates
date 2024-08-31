import React from 'react'
import Carasoul from "./Carasoul"
import Homemade from './Homemade'

const Home = () => {
  return (
    <div>
      <Carasoul />
      <div className='home mt-3'>
        <h1 className='pt-5'>Homemade Fresh Chocolates</h1>
        <div className='line pb-5'>
          <div className='hr mb-3'></div>
        </div>
      </div>
      <Homemade />
    </div>
  )
}

export default Home
