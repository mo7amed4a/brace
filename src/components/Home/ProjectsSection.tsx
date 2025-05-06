import React from 'react'
import Project, { Project as ProjectType } from './Project'

export const projects:ProjectType[] = [
  {
    title: "BMS",
    logo: "/projects/bms.png",
    image: "/projects/project-2.png",
    subtitle: "Sales Representative Application",
    description: "The app aims to enable sales representatives to perform their tasks with ease and speed. It is a comprehensive tool that helps manage customer data, issue invoices, and monitor inventory.",
    link: "/projects/bms",
    color: "to-[#722238]/40 from-[#722238]/20"
  },
  {
    title: "STS",
    logo: "/projects/sts.png",
    image: "/projects/project-3.png",
    subtitle: "SAMA TOURISM SYSTEM",
    description: "The app aims to enable sales representatives to perform their tasks with ease and speed. It is a comprehensive tool that helps manage customer data, issue invoices, and monitor inventory.",
    link: "/projects/sts",
    color: "to-[#642B0E]/40 from-[#642B0E]/20"
  },
  {
    title: "Al-Rayan",
    logo: "/projects/rayan-2.png",
    image: "/projects/Mask.png",
    subtitle: "Sales Representative Application",
    description: "The app aims to enable sales representatives to perform their tasks with ease and speed. It is a comprehensive tool that helps manage customer data, issue invoices, and monitor inventory.",
    link: "/projects/rayan",
    color: "to-[#489255]/40 from-[#489255]/20"
  },
]
export default function ProjectsSection() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col gap-20 p-4 py-20'>
      <div className='flex flex-col items-center text-center gap-3'>
        <h3 className='font-bold text-3xl'>Projects</h3>
        <p>The work that we are proud of.</p>
      </div>
      <div className='grid gap-10'>
        {projects?.map((project) => <Project  key={project.title} project={project}/>)}
      </div>
    </div>
  )
}
