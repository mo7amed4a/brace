import React from 'react'
import Project, { Project as ProjectType } from './Project'

export const projects:ProjectType[] = [
  {
    title: "BMS",
    logo: "/projects/bms.png",
    image: "/projects/project-2.png",
    subtitle: "Sales Representative Application",
    description: "BMS is the ultimate all-in-one platform for seamless clinic bookings, multi-branch administration, and smart user-role control. Designed for clinics, hospitals, and medical centers, BMS empowers admins, staff, and patients with a centralized digital hub to streamline appointments, finances, and operations—no more chaos, just clarity.",
    link: "/projects/bms",
    color: "to-[#722238]/40 from-[#722238]/20"
  },
  {
    title: "STS",
    logo: "/projects/sts.png",
    image: "/projects/project-3.png",
    subtitle: "SAMA TOURISM SYSTEM",
    description: "Discover how STS, the all-in-one B2B travel booking platform, simplifies group reservations, optimizes pricing, and streamlines operations for agencies and corporate partners. From real-time inventory access to seamless multi-user collaboration, STS empowers you to deliver unforgettable travel experiences—effortlessly.",
    link: "/projects/sts",
    color: "to-[#642B0E]/40 from-[#642B0E]/20"
  },
  {
    title: "Al-Rayan",
    logo: "/projects/rayan-2.png",
    image: "/projects/Mask.png",
    subtitle: "Sales Representative Application",
    description: "The Rayan application is designed to empower sales representatives by streamlining their daily tasks, making their workflow not only easier but also significantly faster. This all-in-one platform acts as a robust tool that facilitates the management of customer data, simplifies the invoicing process, and provides real-time inventory tracking.",
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
