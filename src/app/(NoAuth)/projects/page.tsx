import ProjectCard from '@/components/cards/ProjectCard'
import React from 'react'

export default function page() {
  return (
    <div className='max-w-7xl mx-auto'>
      <h4 className='text-center font-bold md:text-lg lg:text-2xl py-20'>Our projects</h4>
      <div className='grid md:grid-cols-2 gap-6 px-4'>
        <ProjectCard
            title="Al Rayan - Sales Rep App"
            description="The Rayan application is designed to empower sales representatives by streamlining their daily tasks, making their workflow not only easier but also significantly faster. This all-in-one platform acts as a robust tool that facilitates the management of customer data, simplifies the invoicing process, and provides real-time inventory tracking."
            imageSrc="/projects/project-1.png"
            imageAlt="Al Rayan Logo"
            />
        <ProjectCard
            title="Al Rayan - Sales Rep App"
            description="The Rayan application is designed to empower sales representatives by streamlining their daily tasks, making their workflow not only easier but also significantly faster. This all-in-one platform acts as a robust tool that facilitates the management of customer data, simplifies the invoicing process, and provides real-time inventory tracking."
            imageSrc="/projects/project-2.png"
            imageAlt="Al Rayan Logo"
            color='to-[#391818]'
            />
        <ProjectCard
            title="Al Rayan - Sales Rep App"
            description="The Rayan application is designed to empower sales representatives by streamlining their daily tasks, making their workflow not only easier but also significantly faster. This all-in-one platform acts as a robust tool that facilitates the management of customer data, simplifies the invoicing process, and provides real-time inventory tracking."
            imageSrc="/projects/project-3.png"
            imageAlt="Al Rayan Logo"
            color="to-[#64290D]"
            />
      </div>
    </div>
  )
}
