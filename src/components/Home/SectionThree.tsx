import React from 'react'
import Logo from '../layout/logo'
import Counter from './Counter'

export default function SectionThree() {
  return (
    <div className='flex flex-col md:flex-row p-4 md:justify-around gap-10 lg:h-[70vh] min-h-screen items-center py-20'>
      <div className='gap-5 flex flex-col lg:ps-20 items-center md:items-start text-center md:text-start'>
        <span className='text-3xl lg:text-4xl font-bold lg:w-3/4 leading-relaxed'>Achieve your goals With Brace</span>
        <div className='border border-gray-600 p-4 h-56 md:h-64 md:w-64 flex items-center justify-center w-52 rounded-lg from-[#1F1E1F] to-[#2D2C2C] bg-gradient-to-r '>
          <Logo className='size-28'/>
        </div>
      </div>
      <div className='grid gap-5'>
        <div className='grid'>
          <span className='text-3xl lg:text-6xl font-bold bg-gradient-to-r from-[#FDBB9B] to-[#F78D57] text-transparent bg-clip-text'>
            %<Counter value={100}/>+
          </span>
          <span className='text-xl'>INcrease in our clients returns</span>
        </div>
        <div className='grid'>
          <span className='text-3xl lg:text-6xl font-bold bg-gradient-to-r from-[#FDBB9B] to-[#F78D57] text-transparent bg-clip-text'>
            %<Counter value={100}/>+
          </span>
          <span className='text-xl'>INcrease in our clients returns</span>
        </div>
        <div className='grid'>
          <span className='text-3xl lg:text-6xl font-bold bg-gradient-to-r from-[#FDBB9B] to-[#F78D57] text-transparent bg-clip-text'>
            %<Counter value={100}/>+
          </span>
          <span className='text-xl'>INcrease in our clients returns</span>
        </div>
      </div>
    </div>
  )
}
