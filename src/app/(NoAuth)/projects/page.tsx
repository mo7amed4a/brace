import ProjectCard from '@/components/cards/ProjectCard'
import { projects } from '@/components/Home/ProjectsSection'
import React from 'react'

export default function page() {

  return (
    <div className='max-w-7xl mx-auto'>
      <h4 className='text-center font-bold md:text-lg lg:text-2xl py-20'>Our projects</h4>
      <div className='grid md:grid-cols-2 gap-6 px-4'>
        {
          projects?.map((project)=> (
              <ProjectCard key={project.link}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.image}
                  imageAlt="Al Rayan Logo"
                  link={project.link}
                  />
          ))
        }
      </div>
    </div>
  )
}
