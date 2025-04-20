import React from 'react'
import Project from './Project'

export default function ProjectsSection() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col gap-20 p-4 py-20'>
      <div className='flex flex-col items-center text-center gap-3'>
        <h3 className='font-bold text-3xl'>Projects</h3>
        <p>The work that we are proud of.</p>
      </div>
      <div className='grid gap-10'>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}
